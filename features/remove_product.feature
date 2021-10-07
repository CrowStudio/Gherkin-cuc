#As a customer, I want to be able to remove any product from the shopping cart, so that I can change my mind.

Feature: Remove a product
  As a customer I should be able to remove a product from the shopping cart

  Background: Going to Willys and pressing the accept cookies button
    Given that I am on "https://www.willys.se"
      And I click the accept cookies button
      And we have been through the initial select delivery popup
    Then I should be able to see some products
    When I click the plus sign to add a product
      And click the plus sign of the same product again
    Then I can verify there is more than one product

  Scenario: Remove product from shopping cart with minus button

  Scenario: Remove product from shopping cart by changing the quantity to zero    