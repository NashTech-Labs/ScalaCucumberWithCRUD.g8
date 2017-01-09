package com.spok.apiservice.airthmetic

import cucumber.api.scala.{EN, ScalaDsl}
import handler.{Handler, RequestHandler}
import org.scalatest.mock.MockitoSugar
import persistence.{CassandraPersistence, User}
import org.mockito.Mockito._

/**
  * Created by knoldus on 6/1/17.
  */
class RequestHandlerSteps extends ScalaDsl with EN with MockitoSugar with RequestHandler{

  var result: String = ""
  var getResult: String = ""
  var userDetails:Option[User] = None
  var handler: Handler = _
  var nickName = ""
  var gender = ""
  var userid = ""
  override val cassandraPersistence: CassandraPersistence = mock[CassandraPersistence]
  Given("""^my handler is running$"""){ () =>
    handler = new Handler
  }
  Given("""^At handler a user with nickName value "([^"]*)"$"""){ (arg0:String) =>
    nickName = arg0
  }
  Given("""^At handler a user with gender value "([^"]*)"$"""){ (arg0:String) =>
    gender = arg0
  }
  Given("""^At handler a user with userid value "([^"]*)"$"""){ (arg0:String) =>
    userid = arg0
  }
  When("""^At handler I insert an user nickName, gender, userid$"""){ () =>
    when(cassandraPersistence.insertUser(User(userid,gender,nickName))) thenReturn true
    result = handler.createUserHandler(userid,gender,nickName)


  }
  When("""^At handler I update an user nickName, gender, userid$""") { () =>
    when(cassandraPersistence.updateUser(User(userid,gender,nickName))) thenReturn true
    result = handler.updateUserHandler(userid,gender,nickName)
  }
  When("""^At handler I get an user from cassandra$"""){ () =>
    when(cassandraPersistence.getUser(userid)) thenReturn Some(User(userid,gender,nickName))
    getResult = handler.getUserHandler(userid)
  }
  When("""^At handler I delete an user from cassandra$""") { () =>
    when(cassandraPersistence.deleteUser(userid)) thenReturn true
    result = handler.deleteHandler(userid)
  }
  Then("""^At handler Create result should be equal to "([^"]*)"$"""){ (arg0:String) =>
    assert(arg0 == result)
  }
  Then("""^At handler Update result should be equal to "([^"]*)"$""") { (arg0: String) =>
    assert(arg0 == result)
  }
  Then("""^At handler result should be equal to some user details "([^"]*)"$"""){ (arg0:String) =>
    assert(arg0.substring(0,3) == getResult.substring(0,3))
  }

  Then("""^At handler Delete result should be equal to "([^"]*)"$""") { (arg0: String) =>
    assert(arg0 == result)
  }
}
