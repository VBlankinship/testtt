Feature: Single order

  Scenario: Create an order using in store
    Given I log in with Valid Credentials
    When I enter Washington is search box
    Then I click on lab location
    When I select pitas
    Then I choose Greek Chicken
    When I click on add to Bag
    Then I should be able to click on go to checkout
    When I click on in Store then select a day and time, no Bag
    Then I submit the order to LAB location



