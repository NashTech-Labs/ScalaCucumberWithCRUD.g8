Feature: CassandraPersistence
  In order to avoid making mistakes
  As a developer
  I want to basic CRUD operations on cassandra database

  Scenario: Insert an user in cassandra database
  Given my cassandra is running
  Given a user with nickName value "Dhirendra"
  And a user with gender value "Male"
  And a user with userid value "101010101"
  When I insert an user nickName, gender, userid
  Then result should be equal to true

Scenario Outline: Insert an user in cassandra database
  Given a user with nickName value <Name>
  And a user with gender value <G>
  And a user with userid value <Uid>
  When I insert an user nickName, gender, userid
  Then result should be equal to <result>
  Examples:
  | Name       | G      | Uid     | result |
  | "Dhiru"    | "Male" | "1111"  | true   |
  | "Bob"      | "Male" | "2222"  | true   |
  | "Jay"      | "Male" | "3333"  | true   |
  | "Abhi"     | "Male" | "4444"  | true   |



Scenario: Update an user in cassandra database
  Given my cassandra is running
  Given a user with nickName value "ABCDE"
  And a user with gender value "Male"
  And a user with userid value "101010101"
  When I update an user nickName, gender, userid
  Then result should be equal to true

Scenario Outline: Update an user in cassandra database
  Given a user with nickName value <Name>
  And a user with gender value <G>
  And a user with userid value <Uid>
  When I update an user nickName, gender, userid
  Then result should be equal to <result>
  Examples:
  | Name       | G        | Uid     | result |
  | "AA"       | "Male"   | "1111"  | true   |
  | "BB"       | "Female" | "2222"  | true   |
  | "CC"       | "Male"   | "3333"  | true   |
  | "DD"       | "Male"   | "4444"  | true   |

Scenario: Get an user from cassandra database
  Given my cassandra is running
  Given a user with userid value "101010101"
  When I get an user from cassandra
  Then result should be equal to some user details true

Scenario Outline: Get an user from cassandra database
  Given a user with userid value <Uid>
  When I get an user from cassandra
  Then result should be equal to some user details <result>
  Examples:
  | Uid     | result |
  | "1111"  | true   |
  | "2222"  | true   |
  | "3333"  | true   |
  | "4444"  | true   |

Scenario: Delete an user from cassandra database
  Given my cassandra is running
Given a user with userid value "101010101"
When I delete an user from cassandra
Then result should be equal to true

Scenario Outline: Delete an user in cassandra database
  Given a user with userid value <Uid>
  When I delete an user from cassandra
  Then result should be equal to <result>
    Examples:
    | Uid     | result |
    | "1111"  | true   |
    | "2222"  | true   |
    | "3333"  | true   |
    | "4444"  | true   |
