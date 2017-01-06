Feature: cassandraPersistence
In order to avoid making mistakes
  As an developer
I want to register an user

Scenario: Insert an user in cassandra database
Given my cassandra is running
Given a user with nickName value "Dhirendra"
And a user with gender value "Male"
And a user with userid value "userid"
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

