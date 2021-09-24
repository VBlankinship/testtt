Feature: Account Page

  Scenario: Login with Valid credentials
    Given I am on Cava Account Page
    When I enter valid credentials
    Then I should be able to Sign In successfully
    When I click on account icon
    Then I should be able to logout



