package cassandra

import com.typesafe.config.ConfigFactory

/**
  * Eventuate.Created by knoldus on 4/1/17.
  */

object CassandraConnectionUri {

  val configFactory = ConfigFactory.load

  val userKeyspace = configFactory.getString("cassandra.keyspace")
  val userTable = configFactory.getString("cassandra.tablename")
}

