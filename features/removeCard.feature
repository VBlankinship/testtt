Feature: Remove Payment method

    Scenario: Remove Credit Card
      Given I login with Valid credentials
      When I click on Payments from my account page
      Then I should be able to see and click on remove card