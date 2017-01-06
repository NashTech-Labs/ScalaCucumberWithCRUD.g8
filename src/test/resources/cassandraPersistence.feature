Feature: cassandraPersistence
In order to avoid making mistakes
  As an developer
I want to register an user

Scenario: Insert an user
Given my cassandra is running
Given a user with nickName value "Dhirendra"
And a user with gender value "Male"
And a user with userid value "userid"
When I insert an user nickName, gender, userid
Then result should be equal to true
