package server

/**
  * Eventuate.Created by knoldus on 6/12/16.
  */
import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.stream.ActorMaterializer
import handler.RequestHandler

import scala.io.StdIn


object WebServer extends Routes with App with RequestHandler{

  implicit val system = ActorSystem("akka-system")
  implicit val ec = system.dispatcher
  implicit val materializer = ActorMaterializer()

    val interface = "localhost"
    val port = 8080

    val binding = Http().bindAndHandle(allRoute, interface, port)
    Console.println(Console.GREEN +
      """
          ___               _             ___                              _
         / __|  __   __ _  | |  __ _     / __|  _  _   __   _  _   _ __   | |__   ___   _ _
         \__ \ / _| / _` | | | / _` |   | (__  | || | / _| | || | | '  \  | '_ \ / -_) | '_|
         |___/ \__| \__,_| |_| \__,_|    \___|  \_,_| \__|  \_,_| |_|_|_| |_.__/ \___| |_|



      """+Console.RESET)
      println(s"Server is now online at http://$interface:$port\nPress RETURN to stop...")
      StdIn.readLine()

      binding.flatMap(_.unbind()).onComplete(_ => system.terminate())
      println("Server is down...")


}
