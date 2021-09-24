Feature: Account Creation

  Scenario: create account
    Given I landed in Home Page
    When I click on account silhouette
    Then I click on New to the CAVA App Sign Up
    When I Enter Valid Name Last Name email address Password and confirmation contact number and DOB
    Then I click on Im at least 18 years old and agree to CAVA Terms Conditions and Reward Terms Conditions
    When I click on Create account
    Then I should be able to log in successfully