Feature: invalid Account Creation

    Scenario: unable to create account
        Given I landed in Home Page
        When I click on account silhouette
        Then I click on New to the CAVA App Sign Up
        When I Enter invalid Name Last Name email address Password and confirmation contact number and DOB
        Then I click on Im at least 18 years old and agree to CAVA Terms Conditions and Reward Terms Conditions
        When I click on Create account
        Then I should not be able to create an account