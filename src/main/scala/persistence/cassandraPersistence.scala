package persistence

import cassandra.CassandraSessionProvider

/**
  * Created by knoldus on 6/1/17.
  */
trait CassandraPersistence extends CassandraSessionProvider{

  def insertUser(userDetail: User): Boolean = {
    try {
      cassandraConn.execute(s"insert into userTable (userid,gender,nickName) values ('${userDetail.userid}','${userDetail.gender}','${userDetail.nickname}')").one()
      true
    }
    catch {
      case ex: Throwable => false
    }
  }

  def updateUser(userDetail: User): Boolean = {
    try {
      cassandraConn.execute(s"update userTable SET gender ='${userDetail.nickname}' , nickName ='${userDetail.gender}'  WHERE userid = '${userDetail.userid}'")
      true
    }
    catch {
      case ex: Throwable => false
    }
  }

  def deleteUser(userId: String): Boolean = {
    try {
      cassandraConn.execute(s"delete from userTable where userid = '$userId'").all()
      true
    }
    catch {
      case ex: Throwable => false
    }
  }

  def getUser(userId: String): Option[User] = {
    try {
      val rows = cassandraConn.execute(s"select * from userTable where userid = '$userId'").all()
      Some(User(rows.get(0).getString("userid"), rows.get(0).getString("gender"), rows.get(0).getString("nickName")))
    }
    catch {
      case ex: Throwable => None
    }
  }



}

object CassandraPersistence extends CassandraPersistence

