#As a customer, I want to be able to add a product to the shopping cart, so that I can buy it.

Feature: Add one product to the shopping cart
  As a customer I should be able to add a product to the shopping cart
  so that I can by the product.

  Background: Going to Willys and pressing the accept cookies button
    Given that I am on "https://www.willys.se"
    And I click the accept cookies button
    And we have been through the initial select delivery popup
    Then I should be able to see some products

  Scenario: Add a product by clicking plus one time
    When I click the plus sign for a product
    And click the shopping cart
    Then I should see a quantity of 1 of the product in the shopping cart

  Scenario: Add a product by changing quantity to 1
    When I change the quantity of a product from 0 to 1
    And click the shopping cart
    Then I should see a quantity of 1 of the product in the shopping cart