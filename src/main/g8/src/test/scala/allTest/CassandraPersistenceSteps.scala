package allTest

import cucumber.api.scala.{EN, ScalaDsl}
import persistence.{CassandraPersistence, User}

class CassandraPersistenceSteps extends ScalaDsl with EN{

  var res:Boolean = false
  var userDetails:Option[User] = None
  var cass: CassandraPersistence = _
  var nickName = ""
  var gender = ""
  var userid = ""
  Given("""^my cassandra is running$"""){ () =>
    cass = CassandraPersistence
  }
  Given("""^a user with nickName value "([^"]*)"$"""){ (arg0:String) =>
    nickName = arg0
  }
  Given("""^a user with gender value "([^"]*)"$"""){ (arg0:String) =>
    gender = arg0
  }
  Given("""^a user with userid value "([^"]*)"$"""){ (arg0:String) =>
    userid = arg0
  }
  When("""^I insert an user nickName, gender, userid$"""){ () =>
    res = cass.insertUser(User(userid,gender,nickName))
  }
  When("""^I update an user nickName, gender, userid$""") { () =>
    res = cass.updateUser(User(userid,gender,nickName))
  }
  When("""^I get an user from cassandra$"""){ () =>
    userDetails = cass.getUser(userid)
  }
  When("""^I delete an user from cassandra$""") { () =>
    res = cass.deleteUser(userid)
  }
  Then("""^result should be equal to true$"""){ () =>
    assert(res == true)
  }
  Then("""^result should be equal to some user details true$""") { () =>
    assert(userDetails.isDefined == true)
  }



  }
