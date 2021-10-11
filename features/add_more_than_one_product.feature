#As a customer, I want to be able to add more than one of a selected product to the shopping cart, so that I can buy them.

Feature: Add more than one of the same product to the shopping cart
  As a customer I should be able to add more than one of the same product to the shopping cart
  so that I can buy the products.

  Background: Going to Willys and pressing the accept cookies button
    Given that I am on "https://www.willys.se"
      And I click the accept cookies button
      And we have been through the initial select delivery popup
    Then I should be able to see some products

  Scenario: Add products by clicking the plus button more than once
    When I click the plus sign to add a product
      And click the plus sign of the same product again
    Then I can verify there is more than one product

  Scenario: Add a product by changing quantity to more then one
    When I change the quantity of a product from zero to "100"
      And press the enter key
    Then I should see a quantity of 100 of the product in the shopping cart

  Scenario: Add a product by more than 999
    When I change the quantity of a product from zero to "1000"
      And press the enter key
    Then I should see a quantity of 999 of the product in the shopping cart