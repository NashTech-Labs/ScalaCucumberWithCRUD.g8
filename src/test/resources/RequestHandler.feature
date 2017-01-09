Feature: RequestHandler
  In order to avoid making mistakes
  As a developer
  I want to handle all the request

  Scenario: Handle insert an user request
  Given my handler is running
  Given At handler a user with nickName value "Dhirendra"
  And At handler a user with gender value "Male"
  And At handler a user with userid value "101010101"
  When At handler I insert an user nickName, gender, userid
  Then At handler Create result should be equal to "Accounts Created Successfully"

Scenario Outline: Handle insert an user request
  Given At handler a user with nickName value <Name>
  And At handler a user with gender value <G>
  And At handler a user with userid value <Uid>
  When At handler I insert an user nickName, gender, userid
  Then At handler Create result should be equal to <result>
  Examples:
  | Name       | G      | Uid     | result                            |
  | "Dhiru"    | "Male" | "1111"  | "Accounts Created Successfully"   |
  | "Bob"      | "Male" | "2222"  | "Accounts Created Successfully"   |
  | "Jay"      | "Male" | "3333"  | "Accounts Created Successfully"   |
  | "Abhi"     | "Male" | "4444"  | "Accounts Created Successfully"   |



Scenario: Handle update an user request
  Given my handler is running
  Given At handler a user with nickName value "ABCDE"
  And At handler a user with gender value "Male"
  And At handler a user with userid value "101010101"
  When At handler I update an user nickName, gender, userid
  Then At handler Update result should be equal to "Accounts Update Successfully"

Scenario Outline: Handle update an user request
  Given At handler a user with nickName value <Name>
  And At handler a user with gender value <G>
  And At handler a user with userid value <Uid>
  When At handler I update an user nickName, gender, userid
  Then At handler Update result should be equal to <result>
  Examples:
  | Name       | G        | Uid     | result                           |
  | "AA"       | "Male"   | "1111"  | "Accounts Update Successfully"   |
  | "BB"       | "Female" | "2222"  | "Accounts Update Successfully"   |
  | "CC"       | "Male"   | "3333"  | "Accounts Update Successfully"   |
  | "DD"       | "Male"   | "4444"  | "Accounts Update Successfully"   |

Scenario: Handle get an user request
  Given my handler is running
  Given At handler a user with userid value "101010101"
  When At handler I get an user from cassandra
  Then At handler result should be equal to some user details "userUser(101010101,ABCDE,ABCDE)"

Scenario Outline: Handle get an user request
  Given At handler a user with userid value <Uid>
  When At handler I get an user from cassandra
  Then At handler result should be equal to some user details <result>
  Examples:
  | Uid     | result                   |
  | "1111"  | "userUser(1111,AA,AA)"   |
  | "2222"  | "userUser(2222,BB,BB)"   |
  | "3333"  | "userUser(3333,CC,CC)"   |
  | "4444"  | "userUser(4444,DD,DD)"   |

Scenario: Handle delete an user request
  Given my handler is running
Given At handler a user with userid value "101010101"
When At handler I delete an user from cassandra
Then At handler Delete result should be equal to "Accounts Delete Successfully"

Scenario Outline: Handle delete an user request
  Given At handler a user with userid value <Uid>
  When At handler I delete an user from cassandra
  Then At handler Delete result should be equal to <result>
    Examples:
    | Uid     | result                           |
    | "1111"  | "Accounts Delete Successfully"   |
    | "2222"  | "Accounts Delete Successfully"   |
    | "3333"  | "Accounts Delete Successfully"   |
    | "4444"  | "Accounts Delete Successfully"   |
