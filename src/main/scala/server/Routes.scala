package server

import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server._
import handler.RequestHandler
/**
  * Eventuate.Created by knoldus on 4/1/17.
  */
trait Routes extends RequestHandler{


  case class User(userid: String, gender: String, nickname: String)

  def getRequest: Route =
    get {
      path("get") {
        parameters('userid)
        {
          (userId) =>
            val result = getUserHandler(userId)
            complete(result)
        }
      }
    }

  def putRequest: Route =
    put {
      path("put") {
        parameters('userid, 'gender, 'nickname) {
          (userId, gender, nickName) =>
            val result = updateUserHandler( userId, gender, nickName)
            complete(result)
        }
      }
    }

  def postRequest: Route =
    post {
      path("post") {
        parameters('userid, 'gender, 'nickname) {
          (userId,gender,nickName) => {
            val result = createUserHandler( userId, gender, nickName)
            complete(result)
          }
        }
      }
    }
  def deleteRequest: Route =
    delete {
      path("delete") {
        parameters('userid) {
          (userId) =>
            val result = deleteHandler(userId)
            complete(result)

        }
      }
    }

  def route: Route = getRequest ~ putRequest ~ postRequest ~ deleteRequest

}
