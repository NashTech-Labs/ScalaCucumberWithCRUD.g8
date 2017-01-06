package com.spok.apiservice.airthmetic

import cucumber.api.scala.{EN, ScalaDsl}
import persistence.{User, cassandra}

import scala.collection.mutable.{ListBuffer}

/**
  * Created by knoldus on 6/1/17.
  */
class cassandraPersistenceSteps extends ScalaDsl with EN{

  var res:Boolean = false
  var cass: cassandra = _
  val list = new ListBuffer[String]
  Given("""^my cassandra is running$"""){ () =>
    cass = new cassandra
  }
  Given("""^a user with nickName value "([^"]*)"$"""){ (arg0:String) =>
    list+=arg0
  }
  Given("""^a user with gender value "([^"]*)"$"""){ (arg0:String) =>
    list+=arg0
  }
  Given("""^a user with userid value "([^"]*)"$"""){ (arg0:String) =>
    list+=arg0
  }
  When("""^I insert an user nickName, gender, userid$"""){ () =>
    res = cass.insertUser(User(list(0),list(1),list(2)))
  }
  Then("""^result should be equal to true$"""){ () =>
    assert(res == true)
  }

}
