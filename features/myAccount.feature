Feature: My Account Actions

  Scenario: My Profile

    Given I log in with Valid Credentials
    When I click on account icon
    Then I click on My profile button
    When  I click My profile option
    Then I should see the update Details button

