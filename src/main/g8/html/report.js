$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CassandraPersistence.feature");
formatter.feature({
  "line": 1,
  "name": "CassandraPersistence",
  "description": "In order to avoid making mistakes\nAs a developer\nI want to basic CRUD operations on cassandra database",
  "id": "cassandrapersistence",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Insert an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;insert-an-user-in-cassandra-database",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "my cassandra is running",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "a user with nickName value \"Dhirendra\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "a user with gender value \"Male\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a user with userid value \"101010101\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "result should be equal to true",
  "keyword": "Then "
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:14"
});
formatter.result({
  "duration": 200868179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhirendra",
      "offset": 28
    }
  ],
  "location": "CassandraPersistenceSteps.scala:17"
});
formatter.result({
  "duration": 3933720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:20"
});
formatter.result({
  "duration": 59104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101010101",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 58465,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:26"
});
formatter.result({
  "duration": 42048524,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 76383,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Insert an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;insert-an-user-in-cassandra-database",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "a user with nickName value \u003cName\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "a user with gender value \u003cG\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "a user with userid value \u003cUid\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "result should be equal to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "cassandrapersistence;insert-an-user-in-cassandra-database;",
  "rows": [
    {
      "cells": [
        "Name",
        "G",
        "Uid",
        "result"
      ],
      "line": 21,
      "id": "cassandrapersistence;insert-an-user-in-cassandra-database;;1"
    },
    {
      "cells": [
        "\"Dhiru\"",
        "\"Male\"",
        "\"1111\"",
        "true"
      ],
      "line": 22,
      "id": "cassandrapersistence;insert-an-user-in-cassandra-database;;2"
    },
    {
      "cells": [
        "\"Bob\"",
        "\"Male\"",
        "\"2222\"",
        "true"
      ],
      "line": 23,
      "id": "cassandrapersistence;insert-an-user-in-cassandra-database;;3"
    },
    {
      "cells": [
        "\"Jay\"",
        "\"Male\"",
        "\"3333\"",
        "true"
      ],
      "line": 24,
      "id": "cassandrapersistence;insert-an-user-in-cassandra-database;;4"
    },
    {
      "cells": [
        "\"Abhi\"",
        "\"Male\"",
        "\"4444\"",
        "true"
      ],
      "line": 25,
      "id": "cassandrapersistence;insert-an-user-in-cassandra-database;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Insert an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;insert-an-user-in-cassandra-database;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "a user with nickName value \"Dhiru\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "a user with userid value \"1111\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "result should be equal to true",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Dhiru",
      "offset": 28
    }
  ],
  "location": "CassandraPersistenceSteps.scala:17"
});
formatter.result({
  "duration": 61619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:20"
});
formatter.result({
  "duration": 69270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 49321,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:26"
});
formatter.result({
  "duration": 4003527,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 23561,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Insert an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;insert-an-user-in-cassandra-database;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "a user with nickName value \"Bob\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "a user with userid value \"2222\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "result should be equal to true",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 28
    }
  ],
  "location": "CassandraPersistenceSteps.scala:17"
});
formatter.result({
  "duration": 70011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:20"
});
formatter.result({
  "duration": 47101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 36796,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:26"
});
formatter.result({
  "duration": 5913628,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 22967,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Insert an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;insert-an-user-in-cassandra-database;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "a user with nickName value \"Jay\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "a user with userid value \"3333\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "result should be equal to true",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Jay",
      "offset": 28
    }
  ],
  "location": "CassandraPersistenceSteps.scala:17"
});
formatter.result({
  "duration": 291359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:20"
});
formatter.result({
  "duration": 255091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3333",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 101679,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:26"
});
formatter.result({
  "duration": 5811773,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 18900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Insert an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;insert-an-user-in-cassandra-database;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "a user with nickName value \"Abhi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "a user with userid value \"4444\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "result should be equal to true",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi",
      "offset": 28
    }
  ],
  "location": "CassandraPersistenceSteps.scala:17"
});
formatter.result({
  "duration": 67975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:20"
});
formatter.result({
  "duration": 40218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4444",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 34721,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:26"
});
formatter.result({
  "duration": 2732108,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 17653,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Update an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;update-an-user-in-cassandra-database",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "my cassandra is running",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "a user with nickName value \"ABCDE\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "a user with gender value \"Male\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "a user with userid value \"101010101\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "result should be equal to true",
  "keyword": "Then "
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:14"
});
formatter.result({
  "duration": 19736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABCDE",
      "offset": 28
    }
  ],
  "location": "CassandraPersistenceSteps.scala:17"
});
formatter.result({
  "duration": 51314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:20"
});
formatter.result({
  "duration": 31108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101010101",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 75342,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:29"
});
formatter.result({
  "duration": 5389591,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 23126,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Update an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;update-an-user-in-cassandra-database",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "a user with nickName value \u003cName\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "a user with gender value \u003cG\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "a user with userid value \u003cUid\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "result should be equal to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "cassandrapersistence;update-an-user-in-cassandra-database;",
  "rows": [
    {
      "cells": [
        "Name",
        "G",
        "Uid",
        "result"
      ],
      "line": 44,
      "id": "cassandrapersistence;update-an-user-in-cassandra-database;;1"
    },
    {
      "cells": [
        "\"AA\"",
        "\"Male\"",
        "\"1111\"",
        "true"
      ],
      "line": 45,
      "id": "cassandrapersistence;update-an-user-in-cassandra-database;;2"
    },
    {
      "cells": [
        "\"BB\"",
        "\"Female\"",
        "\"2222\"",
        "true"
      ],
      "line": 46,
      "id": "cassandrapersistence;update-an-user-in-cassandra-database;;3"
    },
    {
      "cells": [
        "\"CC\"",
        "\"Male\"",
        "\"3333\"",
        "true"
      ],
      "line": 47,
      "id": "cassandrapersistence;update-an-user-in-cassandra-database;;4"
    },
    {
      "cells": [
        "\"DD\"",
        "\"Male\"",
        "\"4444\"",
        "true"
      ],
      "line": 48,
      "id": "cassandrapersistence;update-an-user-in-cassandra-database;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Update an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;update-an-user-in-cassandra-database;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "a user with nickName value \"AA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "a user with userid value \"1111\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "result should be equal to true",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "AA",
      "offset": 28
    }
  ],
  "location": "CassandraPersistenceSteps.scala:17"
});
formatter.result({
  "duration": 130217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:20"
});
formatter.result({
  "duration": 73668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 96652,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:29"
});
formatter.result({
  "duration": 4184447,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 25139,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Update an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;update-an-user-in-cassandra-database;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "a user with nickName value \"BB\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "a user with gender value \"Female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "a user with userid value \"2222\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "result should be equal to true",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BB",
      "offset": 28
    }
  ],
  "location": "CassandraPersistenceSteps.scala:17"
});
formatter.result({
  "duration": 77510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:20"
});
formatter.result({
  "duration": 66563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 70508,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:29"
});
formatter.result({
  "duration": 4181038,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 26679,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Update an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;update-an-user-in-cassandra-database;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "a user with nickName value \"CC\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "a user with userid value \"3333\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "result should be equal to true",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CC",
      "offset": 28
    }
  ],
  "location": "CassandraPersistenceSteps.scala:17"
});
formatter.result({
  "duration": 77969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:20"
});
formatter.result({
  "duration": 64149,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3333",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 47439,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:29"
});
formatter.result({
  "duration": 4071671,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 37357,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Update an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;update-an-user-in-cassandra-database;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "a user with nickName value \"DD\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "a user with userid value \"4444\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "result should be equal to true",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DD",
      "offset": 28
    }
  ],
  "location": "CassandraPersistenceSteps.scala:17"
});
formatter.result({
  "duration": 80627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:20"
});
formatter.result({
  "duration": 52115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4444",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 62066,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:29"
});
formatter.result({
  "duration": 2924900,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 23840,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Get an user from cassandra database",
  "description": "",
  "id": "cassandrapersistence;get-an-user-from-cassandra-database",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "my cassandra is running",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "a user with userid value \"101010101\"",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "result should be equal to some user details true",
  "keyword": "Then "
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:14"
});
formatter.result({
  "duration": 18091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101010101",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 38998,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:32"
});
formatter.result({
  "duration": 6689849,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:41"
});
formatter.result({
  "duration": 46998,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "Get an user from cassandra database",
  "description": "",
  "id": "cassandrapersistence;get-an-user-from-cassandra-database",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "a user with userid value \u003cUid\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "result should be equal to some user details \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "cassandrapersistence;get-an-user-from-cassandra-database;",
  "rows": [
    {
      "cells": [
        "Uid",
        "result"
      ],
      "line": 61,
      "id": "cassandrapersistence;get-an-user-from-cassandra-database;;1"
    },
    {
      "cells": [
        "\"1111\"",
        "true"
      ],
      "line": 62,
      "id": "cassandrapersistence;get-an-user-from-cassandra-database;;2"
    },
    {
      "cells": [
        "\"2222\"",
        "true"
      ],
      "line": 63,
      "id": "cassandrapersistence;get-an-user-from-cassandra-database;;3"
    },
    {
      "cells": [
        "\"3333\"",
        "true"
      ],
      "line": 64,
      "id": "cassandrapersistence;get-an-user-from-cassandra-database;;4"
    },
    {
      "cells": [
        "\"4444\"",
        "true"
      ],
      "line": 65,
      "id": "cassandrapersistence;get-an-user-from-cassandra-database;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 62,
  "name": "Get an user from cassandra database",
  "description": "",
  "id": "cassandrapersistence;get-an-user-from-cassandra-database;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "a user with userid value \"1111\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "result should be equal to some user details true",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 42613,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:32"
});
formatter.result({
  "duration": 2485779,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:41"
});
formatter.result({
  "duration": 16530,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Get an user from cassandra database",
  "description": "",
  "id": "cassandrapersistence;get-an-user-from-cassandra-database;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "a user with userid value \"2222\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "result should be equal to some user details true",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 39362,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:32"
});
formatter.result({
  "duration": 8211066,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:41"
});
formatter.result({
  "duration": 46234,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Get an user from cassandra database",
  "description": "",
  "id": "cassandrapersistence;get-an-user-from-cassandra-database;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "a user with userid value \"3333\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "result should be equal to some user details true",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3333",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 50789,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:32"
});
formatter.result({
  "duration": 3660410,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:41"
});
formatter.result({
  "duration": 18645,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Get an user from cassandra database",
  "description": "",
  "id": "cassandrapersistence;get-an-user-from-cassandra-database;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "a user with userid value \"4444\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "result should be equal to some user details true",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4444",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 44967,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:32"
});
formatter.result({
  "duration": 3378771,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:41"
});
formatter.result({
  "duration": 17815,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Delete an user from cassandra database",
  "description": "",
  "id": "cassandrapersistence;delete-an-user-from-cassandra-database",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 68,
  "name": "my cassandra is running",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "a user with userid value \"101010101\"",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "result should be equal to true",
  "keyword": "Then "
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:14"
});
formatter.result({
  "duration": 16243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101010101",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 54257,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:35"
});
formatter.result({
  "duration": 4316874,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 17566,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "Delete an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;delete-an-user-in-cassandra-database",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "a user with userid value \u003cUid\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "result should be equal to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "cassandrapersistence;delete-an-user-in-cassandra-database;",
  "rows": [
    {
      "cells": [
        "Uid",
        "result"
      ],
      "line": 78,
      "id": "cassandrapersistence;delete-an-user-in-cassandra-database;;1"
    },
    {
      "cells": [
        "\"1111\"",
        "true"
      ],
      "line": 79,
      "id": "cassandrapersistence;delete-an-user-in-cassandra-database;;2"
    },
    {
      "cells": [
        "\"2222\"",
        "true"
      ],
      "line": 80,
      "id": "cassandrapersistence;delete-an-user-in-cassandra-database;;3"
    },
    {
      "cells": [
        "\"3333\"",
        "true"
      ],
      "line": 81,
      "id": "cassandrapersistence;delete-an-user-in-cassandra-database;;4"
    },
    {
      "cells": [
        "\"4444\"",
        "true"
      ],
      "line": 82,
      "id": "cassandrapersistence;delete-an-user-in-cassandra-database;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 79,
  "name": "Delete an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;delete-an-user-in-cassandra-database;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "a user with userid value \"1111\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "result should be equal to true",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 60928,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:35"
});
formatter.result({
  "duration": 3999019,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 25112,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Delete an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;delete-an-user-in-cassandra-database;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "a user with userid value \"2222\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "result should be equal to true",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 82865,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:35"
});
formatter.result({
  "duration": 7025851,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 17472,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Delete an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;delete-an-user-in-cassandra-database;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "a user with userid value \"3333\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "result should be equal to true",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3333",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 48115,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:35"
});
formatter.result({
  "duration": 2523944,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 23900,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Delete an user in cassandra database",
  "description": "",
  "id": "cassandrapersistence;delete-an-user-in-cassandra-database;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "a user with userid value \"4444\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "result should be equal to true",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4444",
      "offset": 26
    }
  ],
  "location": "CassandraPersistenceSteps.scala:23"
});
formatter.result({
  "duration": 59579,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:35"
});
formatter.result({
  "duration": 2945353,
  "status": "passed"
});
formatter.match({
  "location": "CassandraPersistenceSteps.scala:38"
});
formatter.result({
  "duration": 20972,
  "status": "passed"
});
formatter.uri("Multiplication.feature");
formatter.feature({
  "line": 1,
  "name": "Multiplication",
  "description": "In order to avoid making mistakes\nAs an accountant\nI want to multiply numbers",
  "id": "multiplication",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Multiply two variables",
  "description": "",
  "id": "multiplication;multiply-two-variables",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "a variable x with value 3",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "a variable y with value 4",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I multiply x * y",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I get 12",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 1263779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "y",
      "offset": 11
    },
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 153611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "y",
      "offset": 15
    }
  ],
  "location": "MultiplicationSteps.scala:15"
});
formatter.result({
  "duration": 117991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 6
    }
  ],
  "location": "MultiplicationSteps.scala:18"
});
formatter.result({
  "duration": 103959,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Multiply two variables",
  "description": "",
  "id": "multiplication;multiply-two-variables",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "a variable x with value 3",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "a variable y with value 3",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I multiply x * y",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I get 9",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 100440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "y",
      "offset": 11
    },
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 79502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "y",
      "offset": 15
    }
  ],
  "location": "MultiplicationSteps.scala:15"
});
formatter.result({
  "duration": 50982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 6
    }
  ],
  "location": "MultiplicationSteps.scala:18"
});
formatter.result({
  "duration": 107888,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Multiply two variables",
  "description": "",
  "id": "multiplication;multiply-two-variables",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "a variable x with value \u003cx_1\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "a variable y with value \u003cy_1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I multiply x \u003cop\u003e y",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I get \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "multiplication;multiply-two-variables;",
  "rows": [
    {
      "cells": [
        "x_1",
        "y_1",
        "op",
        "result"
      ],
      "line": 22,
      "id": "multiplication;multiply-two-variables;;1"
    },
    {
      "cells": [
        "20",
        "30",
        "*",
        "600"
      ],
      "line": 23,
      "id": "multiplication;multiply-two-variables;;2"
    },
    {
      "cells": [
        "30",
        "30",
        "*",
        "900"
      ],
      "line": 24,
      "id": "multiplication;multiply-two-variables;;3"
    },
    {
      "cells": [
        "40",
        "30",
        "*",
        "1200"
      ],
      "line": 25,
      "id": "multiplication;multiply-two-variables;;4"
    },
    {
      "cells": [
        "4",
        "20",
        "*",
        "80"
      ],
      "line": 26,
      "id": "multiplication;multiply-two-variables;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Multiply two variables",
  "description": "",
  "id": "multiplication;multiply-two-variables;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "a variable x with value 20",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "a variable y with value 30",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I multiply x * y",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I get 600",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "20",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 121565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "y",
      "offset": 11
    },
    {
      "val": "30",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 87925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "y",
      "offset": 15
    }
  ],
  "location": "MultiplicationSteps.scala:15"
});
formatter.result({
  "duration": 71033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 6
    }
  ],
  "location": "MultiplicationSteps.scala:18"
});
formatter.result({
  "duration": 71138,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Multiply two variables",
  "description": "",
  "id": "multiplication;multiply-two-variables;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "a variable x with value 30",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "a variable y with value 30",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I multiply x * y",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I get 900",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "30",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 127774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "y",
      "offset": 11
    },
    {
      "val": "30",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 112966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "y",
      "offset": 15
    }
  ],
  "location": "MultiplicationSteps.scala:15"
});
formatter.result({
  "duration": 62501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "900",
      "offset": 6
    }
  ],
  "location": "MultiplicationSteps.scala:18"
});
formatter.result({
  "duration": 200846,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Multiply two variables",
  "description": "",
  "id": "multiplication;multiply-two-variables;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "a variable x with value 40",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "a variable y with value 30",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I multiply x * y",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I get 1200",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "40",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 168748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "y",
      "offset": 11
    },
    {
      "val": "30",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 123115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "y",
      "offset": 15
    }
  ],
  "location": "MultiplicationSteps.scala:15"
});
formatter.result({
  "duration": 63501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1200",
      "offset": 6
    }
  ],
  "location": "MultiplicationSteps.scala:18"
});
formatter.result({
  "duration": 69745,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Multiply two variables",
  "description": "",
  "id": "multiplication;multiply-two-variables;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "a variable x with value 4",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "a variable y with value 20",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I multiply x * y",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I get 80",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 107981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "y",
      "offset": 11
    },
    {
      "val": "20",
      "offset": 24
    }
  ],
  "location": "MultiplicationSteps.scala:12"
});
formatter.result({
  "duration": 83675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "x",
      "offset": 11
    },
    {
      "val": "y",
      "offset": 15
    }
  ],
  "location": "MultiplicationSteps.scala:15"
});
formatter.result({
  "duration": 61432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 6
    }
  ],
  "location": "MultiplicationSteps.scala:18"
});
formatter.result({
  "duration": 80941,
  "status": "passed"
});
formatter.uri("RequestHandler.feature");
formatter.feature({
  "line": 1,
  "name": "RequestHandler",
  "description": "In order to avoid making mistakes\nAs a developer\nI want to handle all the request",
  "id": "requesthandler",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Handle insert an user request",
  "description": "",
  "id": "requesthandler;handle-insert-an-user-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "my handler is running",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "At handler a user with nickName value \"Dhirendra\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "At handler a user with gender value \"Male\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "At handler a user with userid value \"101010101\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "At handler I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "At handler Create result should be equal to \"Accounts Created Successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RequestHandlerSteps.scala:22"
});
formatter.result({
  "duration": 191292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhirendra",
      "offset": 39
    }
  ],
  "location": "RequestHandlerSteps.scala:25"
});
formatter.result({
  "duration": 81722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:28"
});
formatter.result({
  "duration": 65037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101010101",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 62720,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:34"
});
formatter.result({
  "duration": 26660702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Created Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:52"
});
formatter.result({
  "duration": 140728,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Handle insert an user request",
  "description": "",
  "id": "requesthandler;handle-insert-an-user-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "At handler a user with nickName value \u003cName\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "At handler a user with gender value \u003cG\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "At handler a user with userid value \u003cUid\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "At handler I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "At handler Create result should be equal to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "requesthandler;handle-insert-an-user-request;",
  "rows": [
    {
      "cells": [
        "Name",
        "G",
        "Uid",
        "result"
      ],
      "line": 21,
      "id": "requesthandler;handle-insert-an-user-request;;1"
    },
    {
      "cells": [
        "\"Dhiru\"",
        "\"Male\"",
        "\"1111\"",
        "\"Accounts Created Successfully\""
      ],
      "line": 22,
      "id": "requesthandler;handle-insert-an-user-request;;2"
    },
    {
      "cells": [
        "\"Bob\"",
        "\"Male\"",
        "\"2222\"",
        "\"Accounts Created Successfully\""
      ],
      "line": 23,
      "id": "requesthandler;handle-insert-an-user-request;;3"
    },
    {
      "cells": [
        "\"Jay\"",
        "\"Male\"",
        "\"3333\"",
        "\"Accounts Created Successfully\""
      ],
      "line": 24,
      "id": "requesthandler;handle-insert-an-user-request;;4"
    },
    {
      "cells": [
        "\"Abhi\"",
        "\"Male\"",
        "\"4444\"",
        "\"Accounts Created Successfully\""
      ],
      "line": 25,
      "id": "requesthandler;handle-insert-an-user-request;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Handle insert an user request",
  "description": "",
  "id": "requesthandler;handle-insert-an-user-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "At handler a user with nickName value \"Dhiru\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "At handler a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "At handler a user with userid value \"1111\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "At handler I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "At handler Create result should be equal to \"Accounts Created Successfully\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Dhiru",
      "offset": 39
    }
  ],
  "location": "RequestHandlerSteps.scala:25"
});
formatter.result({
  "duration": 71184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:28"
});
formatter.result({
  "duration": 26446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 26724,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:34"
});
formatter.result({
  "duration": 5769177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Created Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:52"
});
formatter.result({
  "duration": 46753,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Handle insert an user request",
  "description": "",
  "id": "requesthandler;handle-insert-an-user-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "At handler a user with nickName value \"Bob\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "At handler a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "At handler a user with userid value \"2222\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "At handler I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "At handler Create result should be equal to \"Accounts Created Successfully\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 39
    }
  ],
  "location": "RequestHandlerSteps.scala:25"
});
formatter.result({
  "duration": 45730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:28"
});
formatter.result({
  "duration": 31994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 21594,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:34"
});
formatter.result({
  "duration": 2493541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Created Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:52"
});
formatter.result({
  "duration": 42113,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Handle insert an user request",
  "description": "",
  "id": "requesthandler;handle-insert-an-user-request;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "At handler a user with nickName value \"Jay\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "At handler a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "At handler a user with userid value \"3333\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "At handler I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "At handler Create result should be equal to \"Accounts Created Successfully\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Jay",
      "offset": 39
    }
  ],
  "location": "RequestHandlerSteps.scala:25"
});
formatter.result({
  "duration": 30902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:28"
});
formatter.result({
  "duration": 23612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3333",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 20025,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:34"
});
formatter.result({
  "duration": 4007776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Created Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:52"
});
formatter.result({
  "duration": 59770,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Handle insert an user request",
  "description": "",
  "id": "requesthandler;handle-insert-an-user-request;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "At handler a user with nickName value \"Abhi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "At handler a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "At handler a user with userid value \"4444\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "At handler I insert an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "At handler Create result should be equal to \"Accounts Created Successfully\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Abhi",
      "offset": 39
    }
  ],
  "location": "RequestHandlerSteps.scala:25"
});
formatter.result({
  "duration": 59872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:28"
});
formatter.result({
  "duration": 240595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4444",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 47676,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:34"
});
formatter.result({
  "duration": 4197463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Created Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:52"
});
formatter.result({
  "duration": 48733,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Handle update an user request",
  "description": "",
  "id": "requesthandler;handle-update-an-user-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "my handler is running",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "At handler a user with nickName value \"ABCDE\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "At handler a user with gender value \"Male\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "At handler a user with userid value \"101010101\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "At handler I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "At handler Update result should be equal to \"Accounts Update Successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RequestHandlerSteps.scala:22"
});
formatter.result({
  "duration": 17361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABCDE",
      "offset": 39
    }
  ],
  "location": "RequestHandlerSteps.scala:25"
});
formatter.result({
  "duration": 66290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:28"
});
formatter.result({
  "duration": 26346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101010101",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 22932,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:40"
});
formatter.result({
  "duration": 4230693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Update Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:55"
});
formatter.result({
  "duration": 123193,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Handle update an user request",
  "description": "",
  "id": "requesthandler;handle-update-an-user-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "At handler a user with nickName value \u003cName\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "At handler a user with gender value \u003cG\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "At handler a user with userid value \u003cUid\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "At handler I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "At handler Update result should be equal to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "requesthandler;handle-update-an-user-request;",
  "rows": [
    {
      "cells": [
        "Name",
        "G",
        "Uid",
        "result"
      ],
      "line": 44,
      "id": "requesthandler;handle-update-an-user-request;;1"
    },
    {
      "cells": [
        "\"AA\"",
        "\"Male\"",
        "\"1111\"",
        "\"Accounts Update Successfully\""
      ],
      "line": 45,
      "id": "requesthandler;handle-update-an-user-request;;2"
    },
    {
      "cells": [
        "\"BB\"",
        "\"Female\"",
        "\"2222\"",
        "\"Accounts Update Successfully\""
      ],
      "line": 46,
      "id": "requesthandler;handle-update-an-user-request;;3"
    },
    {
      "cells": [
        "\"CC\"",
        "\"Male\"",
        "\"3333\"",
        "\"Accounts Update Successfully\""
      ],
      "line": 47,
      "id": "requesthandler;handle-update-an-user-request;;4"
    },
    {
      "cells": [
        "\"DD\"",
        "\"Male\"",
        "\"4444\"",
        "\"Accounts Update Successfully\""
      ],
      "line": 48,
      "id": "requesthandler;handle-update-an-user-request;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "Handle update an user request",
  "description": "",
  "id": "requesthandler;handle-update-an-user-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "At handler a user with nickName value \"AA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "At handler a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "At handler a user with userid value \"1111\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "At handler I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "At handler Update result should be equal to \"Accounts Update Successfully\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "AA",
      "offset": 39
    }
  ],
  "location": "RequestHandlerSteps.scala:25"
});
formatter.result({
  "duration": 49079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:28"
});
formatter.result({
  "duration": 50133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 33060,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:40"
});
formatter.result({
  "duration": 3475505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Update Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:55"
});
formatter.result({
  "duration": 48610,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Handle update an user request",
  "description": "",
  "id": "requesthandler;handle-update-an-user-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "At handler a user with nickName value \"BB\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "At handler a user with gender value \"Female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "At handler a user with userid value \"2222\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "At handler I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "At handler Update result should be equal to \"Accounts Update Successfully\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "BB",
      "offset": 39
    }
  ],
  "location": "RequestHandlerSteps.scala:25"
});
formatter.result({
  "duration": 53900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:28"
});
formatter.result({
  "duration": 34358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 32221,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:40"
});
formatter.result({
  "duration": 3993136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Update Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:55"
});
formatter.result({
  "duration": 82173,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Handle update an user request",
  "description": "",
  "id": "requesthandler;handle-update-an-user-request;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "At handler a user with nickName value \"CC\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "At handler a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "At handler a user with userid value \"3333\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "At handler I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "At handler Update result should be equal to \"Accounts Update Successfully\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CC",
      "offset": 39
    }
  ],
  "location": "RequestHandlerSteps.scala:25"
});
formatter.result({
  "duration": 54649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:28"
});
formatter.result({
  "duration": 28385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3333",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 26551,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:40"
});
formatter.result({
  "duration": 2819948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Update Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:55"
});
formatter.result({
  "duration": 50900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Handle update an user request",
  "description": "",
  "id": "requesthandler;handle-update-an-user-request;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "At handler a user with nickName value \"DD\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "At handler a user with gender value \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "At handler a user with userid value \"4444\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "At handler I update an user nickName, gender, userid",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "At handler Update result should be equal to \"Accounts Update Successfully\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "DD",
      "offset": 39
    }
  ],
  "location": "RequestHandlerSteps.scala:25"
});
formatter.result({
  "duration": 45984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:28"
});
formatter.result({
  "duration": 31128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4444",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 24053,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:40"
});
formatter.result({
  "duration": 2661965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Update Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:55"
});
formatter.result({
  "duration": 53357,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Handle get an user request",
  "description": "",
  "id": "requesthandler;handle-get-an-user-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "my handler is running",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "At handler a user with userid value \"101010101\"",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "At handler I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "At handler result should be equal to some user details \"userUser(101010101,ABCDE,ABCDE)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RequestHandlerSteps.scala:22"
});
formatter.result({
  "duration": 18226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101010101",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 38767,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:44"
});
formatter.result({
  "duration": 9536030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userUser(101010101,ABCDE,ABCDE)",
      "offset": 56
    }
  ],
  "location": "RequestHandlerSteps.scala:58"
});
formatter.result({
  "duration": 149593,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "Handle get an user request",
  "description": "",
  "id": "requesthandler;handle-get-an-user-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "At handler a user with userid value \u003cUid\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "At handler I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "At handler result should be equal to some user details \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "requesthandler;handle-get-an-user-request;",
  "rows": [
    {
      "cells": [
        "Uid",
        "result"
      ],
      "line": 61,
      "id": "requesthandler;handle-get-an-user-request;;1"
    },
    {
      "cells": [
        "\"1111\"",
        "\"userUser(1111,AA,AA)\""
      ],
      "line": 62,
      "id": "requesthandler;handle-get-an-user-request;;2"
    },
    {
      "cells": [
        "\"2222\"",
        "\"userUser(2222,BB,BB)\""
      ],
      "line": 63,
      "id": "requesthandler;handle-get-an-user-request;;3"
    },
    {
      "cells": [
        "\"3333\"",
        "\"userUser(3333,CC,CC)\""
      ],
      "line": 64,
      "id": "requesthandler;handle-get-an-user-request;;4"
    },
    {
      "cells": [
        "\"4444\"",
        "\"userUser(4444,DD,DD)\""
      ],
      "line": 65,
      "id": "requesthandler;handle-get-an-user-request;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 62,
  "name": "Handle get an user request",
  "description": "",
  "id": "requesthandler;handle-get-an-user-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "At handler a user with userid value \"1111\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "At handler I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "At handler result should be equal to some user details \"userUser(1111,AA,AA)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 49526,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:44"
});
formatter.result({
  "duration": 9222935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userUser(1111,AA,AA)",
      "offset": 56
    }
  ],
  "location": "RequestHandlerSteps.scala:58"
});
formatter.result({
  "duration": 93959,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Handle get an user request",
  "description": "",
  "id": "requesthandler;handle-get-an-user-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "At handler a user with userid value \"2222\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "At handler I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "At handler result should be equal to some user details \"userUser(2222,BB,BB)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 62487,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:44"
});
formatter.result({
  "duration": 3551038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userUser(2222,BB,BB)",
      "offset": 56
    }
  ],
  "location": "RequestHandlerSteps.scala:58"
});
formatter.result({
  "duration": 113201,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Handle get an user request",
  "description": "",
  "id": "requesthandler;handle-get-an-user-request;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "At handler a user with userid value \"3333\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "At handler I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "At handler result should be equal to some user details \"userUser(3333,CC,CC)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3333",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 55001,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:44"
});
formatter.result({
  "duration": 5045992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userUser(3333,CC,CC)",
      "offset": 56
    }
  ],
  "location": "RequestHandlerSteps.scala:58"
});
formatter.result({
  "duration": 60123,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Handle get an user request",
  "description": "",
  "id": "requesthandler;handle-get-an-user-request;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "At handler a user with userid value \"4444\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "At handler I get an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "At handler result should be equal to some user details \"userUser(4444,DD,DD)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4444",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 41741,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:44"
});
formatter.result({
  "duration": 2867076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "userUser(4444,DD,DD)",
      "offset": 56
    }
  ],
  "location": "RequestHandlerSteps.scala:58"
});
formatter.result({
  "duration": 64013,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Handle delete an user request",
  "description": "",
  "id": "requesthandler;handle-delete-an-user-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 68,
  "name": "my handler is running",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "At handler a user with userid value \"101010101\"",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "At handler I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "At handler Delete result should be equal to \"Accounts Delete Successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RequestHandlerSteps.scala:22"
});
formatter.result({
  "duration": 20421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101010101",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 58489,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:48"
});
formatter.result({
  "duration": 3476014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Delete Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:62"
});
formatter.result({
  "duration": 134130,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "Handle delete an user request",
  "description": "",
  "id": "requesthandler;handle-delete-an-user-request",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "At handler a user with userid value \u003cUid\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "At handler I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "At handler Delete result should be equal to \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "requesthandler;handle-delete-an-user-request;",
  "rows": [
    {
      "cells": [
        "Uid",
        "result"
      ],
      "line": 78,
      "id": "requesthandler;handle-delete-an-user-request;;1"
    },
    {
      "cells": [
        "\"1111\"",
        "\"Accounts Delete Successfully\""
      ],
      "line": 79,
      "id": "requesthandler;handle-delete-an-user-request;;2"
    },
    {
      "cells": [
        "\"2222\"",
        "\"Accounts Delete Successfully\""
      ],
      "line": 80,
      "id": "requesthandler;handle-delete-an-user-request;;3"
    },
    {
      "cells": [
        "\"3333\"",
        "\"Accounts Delete Successfully\""
      ],
      "line": 81,
      "id": "requesthandler;handle-delete-an-user-request;;4"
    },
    {
      "cells": [
        "\"4444\"",
        "\"Accounts Delete Successfully\""
      ],
      "line": 82,
      "id": "requesthandler;handle-delete-an-user-request;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 79,
  "name": "Handle delete an user request",
  "description": "",
  "id": "requesthandler;handle-delete-an-user-request;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "At handler a user with userid value \"1111\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "At handler I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "At handler Delete result should be equal to \"Accounts Delete Successfully\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 60865,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:48"
});
formatter.result({
  "duration": 3409858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Delete Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:62"
});
formatter.result({
  "duration": 56260,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Handle delete an user request",
  "description": "",
  "id": "requesthandler;handle-delete-an-user-request;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "At handler a user with userid value \"2222\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "At handler I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "At handler Delete result should be equal to \"Accounts Delete Successfully\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 51711,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:48"
});
formatter.result({
  "duration": 5294039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Delete Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:62"
});
formatter.result({
  "duration": 61366,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "Handle delete an user request",
  "description": "",
  "id": "requesthandler;handle-delete-an-user-request;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "At handler a user with userid value \"3333\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "At handler I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "At handler Delete result should be equal to \"Accounts Delete Successfully\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3333",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 59377,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:48"
});
formatter.result({
  "duration": 3052929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Delete Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:62"
});
formatter.result({
  "duration": 50679,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Handle delete an user request",
  "description": "",
  "id": "requesthandler;handle-delete-an-user-request;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "At handler a user with userid value \"4444\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "At handler I delete an user from cassandra",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "At handler Delete result should be equal to \"Accounts Delete Successfully\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4444",
      "offset": 37
    }
  ],
  "location": "RequestHandlerSteps.scala:31"
});
formatter.result({
  "duration": 147209,
  "status": "passed"
});
formatter.match({
  "location": "RequestHandlerSteps.scala:48"
});
formatter.result({
  "duration": 6675100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Delete Successfully",
      "offset": 45
    }
  ],
  "location": "RequestHandlerSteps.scala:62"
});
formatter.result({
  "duration": 76173,
  "status": "passed"
});
formatter.uri("Routes.feature");
formatter.feature({
  "line": 1,
  "name": "Routes",
  "description": "In order to avoid making mistakes\nAs a developer\nI want to check the routes",
  "id": "routes",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Check post request",
  "description": "",
  "id": "routes;check-post-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "my server is running",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I hit on route post with value \"post?userid\u003d123\u0026gender\u003dmale\u0026nickname\u003dDhiru\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the response should be \"Accounts Created Successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RouteSteps.scala:20"
});
formatter.result({
  "duration": 51470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "post?userid\u003d123\u0026gender\u003dmale\u0026nickname\u003dDhiru",
      "offset": 32
    }
  ],
  "location": "RouteSteps.scala:23"
});
formatter.result({
  "duration": 898000996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Created Successfully",
      "offset": 24
    }
  ],
  "location": "RouteSteps.scala:42"
});
formatter.result({
  "duration": 69107631,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check put request",
  "description": "",
  "id": "routes;check-put-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "my server is running",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I hit on route put with value \"put?userid\u003d123\u0026gender\u003dmale\u0026nickname\u003dUpdateDhiru\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the response should be \"Accounts Update Successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RouteSteps.scala:20"
});
formatter.result({
  "duration": 23234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "put?userid\u003d123\u0026gender\u003dmale\u0026nickname\u003dUpdateDhiru",
      "offset": 31
    }
  ],
  "location": "RouteSteps.scala:28"
});
formatter.result({
  "duration": 10453743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Update Successfully",
      "offset": 24
    }
  ],
  "location": "RouteSteps.scala:42"
});
formatter.result({
  "duration": 909033,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Check get request",
  "description": "",
  "id": "routes;check-get-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "my server is running",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I hit on route get with value \"get?userid\u003d123\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the response should be \"user  User(123,UpdateDhiru,male)\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RouteSteps.scala:20"
});
formatter.result({
  "duration": 29075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "get?userid\u003d123",
      "offset": 31
    }
  ],
  "location": "RouteSteps.scala:33"
});
formatter.result({
  "duration": 16410770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user  User(123,UpdateDhiru,male)",
      "offset": 24
    }
  ],
  "location": "RouteSteps.scala:42"
});
formatter.result({
  "duration": 243805,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Check delete request",
  "description": "",
  "id": "routes;check-delete-request",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "my server is running",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I hit on route delete with value \"delete?userid\u003d123\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the response should be \"Accounts Delete Successfully\"",
  "keyword": "Then "
});
formatter.match({
  "location": "RouteSteps.scala:20"
});
formatter.result({
  "duration": 23722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete?userid\u003d123",
      "offset": 34
    }
  ],
  "location": "RouteSteps.scala:37"
});
formatter.result({
  "duration": 6030475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accounts Delete Successfully",
      "offset": 24
    }
  ],
  "location": "RouteSteps.scala:42"
});
formatter.result({
  "duration": 199192,
  "status": "passed"
});
});