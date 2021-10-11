#As a customer, I want to be able to remove any product from the shopping cart, so that I can change my mind.

Feature: Remove a product
  As a customer I should be able to remove a product from the shopping cart

  Background: Going to Willys and pressing the accept cookies button
    Given that I am on "https://www.willys.se"
      And I click the accept cookies button
      And we have been through the initial select delivery popup
    Then I should be able to see some products
    When I click the plus sign to add a product
      And I click the plus sign on the next product
    Then I should be able to see some products

  Scenario: Remove a product from shopping cart
    When I click the Gå till kassan-button
      And click the X-button
    Then the product shall be removed from the shopping cart

  Scenario: Remove a product from shopping cart with minus button
    When I click the minus button twice for a product in the shopping cart
    Then the product shall be removed from the shopping cart

  Scenario: Remove product from shopping cart by changing the quantity to zero 
    When I change the quantity for a product to 0   
    Then the product shall be removed from the shopping cart