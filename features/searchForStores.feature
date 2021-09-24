Feature: Search for stores

  Scenario: Search by city
    Given I log in with Valid Credentials
    When I enter Washington is search box
    Then I should be able to see the stores available

  Scenario: search by city as Guest
    Given I landed in Cava home page
    When I enter washington and click search
    Then I should be able to see the stores available

  Scenario: Select Lab location
    Given I landed in Cava home page
    When I enter washington and click search
    Then I click on lab location


