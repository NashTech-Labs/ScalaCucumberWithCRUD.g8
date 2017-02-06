
name := "ScalaCucumberwithCRUD"

version := "1.0.0.0"

scalaVersion := "2.11.8"


libraryDependencies ++= Seq(
  "com.datastax.cassandra" % "cassandra-driver-core" % "3.1.2",
  "com.typesafe.akka" %% "akka-slf4j" % "2.4.11",
  "com.typesafe.akka" %% "akka-http" % "10.0.1",
  "com.typesafe.akka" %% "akka-http-core" % "10.0.1",
  "com.typesafe.akka" %% "akka-http-testkit" % "10.0.1",
  "org.scalatest" %% "scalatest" % "3.0.0",
  "info.cukes" % "cucumber-core" % "1.2.4",
  "info.cukes" % "cucumber-junit" % "1.2.4",
  "info.cukes" %% "cucumber-scala" % "1.2.4",
  "info.cukes" % "cucumber-jvm" % "1.2.4",
  "org.mockito" % "mockito-core" % "1.9.5",
  "com.waioeka.sbt" %% "cucumber-runner" % "0.0.5"

)

enablePlugins(CucumberPlugin)

CucumberPlugin.glue := "allTest"

testFrameworks += new TestFramework("allTest.runner")




