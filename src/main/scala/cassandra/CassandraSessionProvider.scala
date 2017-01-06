package cassandra

import com.datastax.driver.core._

/**
  * Eventuate.Created by knoldus on 4/1/17.
  */
trait CassandraSessionProvider {

  val timeout = 4000
  val defaultConsistencyLevel = ConsistencyLevel.valueOf("QUORUM")
  val cassandraConn: Session = {
    val cluster = new Cluster.Builder().withClusterName("Test Cluster").
      addContactPoints("127.0.0.1").
      withPort(9042).
      withQueryOptions(new QueryOptions().setConsistencyLevel(defaultConsistencyLevel)).build

    cluster.getConfiguration().getSocketOptions().setReadTimeoutMillis(timeout)
    val session = cluster.connect
    session.execute(s"CREATE KEYSPACE IF NOT EXISTS  ${CassandraConnectionUri.userKeyspace} WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 }")
    session.execute(s"USE ${CassandraConnectionUri.userKeyspace}")
    createTables(session)
    session
  }

  def createTables(session: Session): ResultSet = {

    session.execute(s"CREATE TABLE IF NOT EXISTS ${CassandraConnectionUri.userTable} " +
      s"(userId text, nickname text, gender text, PRIMARY KEY (userId))")


  }
}

object CassandraSessionProvider extends CassandraSessionProvider {

  override val timeout = 4000
  // Session for Eventuate keyspace
  val session = createSessionAndInitKeyspace(CassandraConnectionUri.userKeyspace, defaultConsistencyLevel)

  // Shutdown hook clears up connections in case of app shutdown.
  sys addShutdownHook {
    if (session.isDefined) {
      val cluster = session.get.getCluster
      session.get.close()
      cluster.close()
    }
  }

  private def createSessionAndInitKeyspace(keySpace: String, defaultConsistencyLevel: ConsistencyLevel = ConsistencyLevel.QUORUM): Option[Session] = {
    val cluster = new Cluster.Builder().withClusterName("Test Cluster").
      addContactPoints("127.0.0.1").
      withPort(9042).
      withQueryOptions(new QueryOptions().setConsistencyLevel(defaultConsistencyLevel)).build
    val session = connectToKeyspace(keySpace, cluster)
    Some(session)
  }

  def connectToKeyspace(keySpace: String, cluster: Cluster): Session = {
    cluster.getConfiguration().getSocketOptions().setReadTimeoutMillis(timeout)
    val session = cluster.connect
   session.execute(s"CREATE KEYSPACE IF NOT EXISTS  ${keySpace} WITH REPLICATION = " +
      "{ 'class' : 'SimpleStrategy', 'replication_factor' : 1 }")
    session.execute(s"USE ${keySpace}")
    session
  }
}