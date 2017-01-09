package com.spok.apiservice.airthmetic

import cucumber.api.scala.{EN, ScalaDsl}
import handler.Handler
import persistence.User

/**
  * Created by knoldus on 6/1/17.
  */
class RequestHandlerSteps extends ScalaDsl with EN {

  var result: String = ""
  var getResult: String = ""
  var userDetails:Option[User] = None
  var handler: Handler = _
  var nickName = ""
  var gender = ""
  var userid = ""
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
    result = handler.createUserHandler(userid,gender,nickName)
  }
  When("""^At handler I update an user nickName, gender, userid$""") { () =>
    result = handler.updateUserHandler(userid,gender,nickName)
  }
  When("""^At handler I get an user from cassandra$"""){ () =>
    getResult = handler.getUserHandler(userid)
  }
  When("""^At handler I delete an user from cassandra$""") { () =>
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
