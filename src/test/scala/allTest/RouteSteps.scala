package allTest

import akka.http.scaladsl.testkit.ScalatestRouteTest
import cucumber.api.scala.{EN, ScalaDsl}
import org.scalatest.mock.MockitoSugar
import org.scalatest.{Matchers, WordSpec}
import server.Routes

/**
  * Created by knoldus on 6/1/17.
  */
class RouteSteps extends WordSpec with ScalaDsl with EN with MockitoSugar with Routes with  Matchers with ScalatestRouteTest {

  var result: RouteTestResult = _

  Given("""^my server is running$"""){ () =>
  }

  When("""^I hit on route post with value "([^"]*)"$"""){ (arg0:String) =>
    val path = arg0
    result = Post(s"/$path") ~> allRoute
  }

  When("""^I hit on route put with value "([^"]*)"$"""){ (arg0:String) =>
    val path = arg0
    result = Put(s"/$path") ~> allRoute
  }

  When("""^I hit on route get with value "([^"]*)"$"""){ (arg0:String) =>
    val path = arg0
    result = Get(s"/$path") ~> allRoute
  }
  When("""^I hit on route delete with value "([^"]*)"$"""){ (arg0:String) =>
    val path = arg0
    result = Delete(s"/$path") ~> allRoute
  }

  Then("""^the response should be "([^"]*)"$"""){ (arg0:String) =>
    result ~> check {
      responseAs[String] shouldEqual arg0
    }
  }

}
