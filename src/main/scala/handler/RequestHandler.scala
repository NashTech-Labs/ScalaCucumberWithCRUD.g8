package handler

import persistence.{User, CassandraPersistence}

/**
  * Created by knoldus on 5/1/17.
  */
trait RequestHandler extends CassandraPersistence{


  def createUserHandler(userId: String,gender: String,nickName: String): String = {
    val createAccount = insertUser(User(userId,gender,nickName))
    createAccount match {
      case true =>  "Accounts Created Successfully"
      case false =>  "Unable to create Account"
    }

  }

  def updateUserHandler( userId: String,gender: String,nickName: String): String = {
    val upadeAccount = updateUser(User(userId,gender,nickName))
    upadeAccount match {
      case true =>  "Accounts Update Successfully"
      case false =>  "Unable  to update Account"
  }
  }

  def deleteHandler( userId: String): String = {
    val createAccount = deleteUser(userId)
    createAccount match {
      case true =>  "Accounts Delete Successfully"
      case false =>   "Unable to Delete Account"
    }
  }

  def getUserHandler(userId: String): String = {
    val result = getUser(userId)
    result match {
      case Some(user) =>    "user  " + user
      case None =>  "Unable to get User Details"
    }
  }

}

class Handler extends RequestHandler
