Feature: Routes
  In order to avoid making mistakes
  As a developer
  I want to check the routes

Scenario: Check post request
  Given my server is running
  When I hit on route post with value "post?userid=123&gender=male&nickname=Dhiru"
  Then the response should be "Accounts Created Successfully"

Scenario: Check put request
Given my server is running
When I hit on route put with value "put?userid=123&gender=male&nickname=UpdateDhiru"
Then the response should be "Accounts Update Successfully"

Scenario: Check get request
Given my server is running
When I hit on route get with value "get?userid=123"
Then the response should be "user  User(123,UpdateDhiru,male)"

Scenario: Check delete request
Given my server is running
When I hit on route delete with value "delete?userid=123"
Then the response should be "Accounts Delete Successfully"

