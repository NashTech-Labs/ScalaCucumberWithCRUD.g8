name := "ScalaCucumberwithCRUD"

version := "1.0.0.0"

scalaVersion := "2.11.8"


libraryDependencies ++= Seq(
  "org.scalatest" %% "scalatest" % "2.2.0" % "test",
  "com.datastax.cassandra" % "cassandra-driver-core" % "3.1.2",
  "com.typesafe.akka" %% "akka-slf4j" % "2.4.11",
  "com.typesafe.akka" %% "akka-http" % "10.0.1",
  "com.typesafe.akka" %% "akka-http-core" % "10.0.1",
  "com.typesafe.akka" %% "akka-http-testkit" % "10.0.1",
  "org.scalatest" %% "scalatest" % "2.2.6",
  "info.cukes" % "cucumber-junit" % "1.2.4"
)




