Feature: Adding credit cards

    Scenario: Add a new card
        Given I landed on my account
        When I click on account silhouette
        Then I land in my account page
        When I click on payment
        Then I land in payment page
        When I click on add new payment method
        Then I should be able to add Card Number 4111111111111111 Date 1025 and ccv 567
        When I click on confirm
        Then I should be able to see the card saved