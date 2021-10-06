#As a customer, I want to be able update the amount of a product in the shopping cart,
#so that I can change my mind after adding it to the cart.

Feature: Update quantity of a product in the shopping cart
  As a customer I should be able to update the quantity of a product in the shopping cart
  if I change my mind after adding the product to the cart

  Background: Going to Willys and pressing the accept cookies button
    Given that I am on "https://www.willys.se"
    And I click the accept cookies button
    And we have been through the initial select delivery popup
    Then I should be able to see some products
    When I click the plus sign for a product
    And I click the shopping cart


  Scenario: Updating quantity by clicking plus

  Scenario: Updating quantity by clicking minus

  Scenario: Updating quantity by changing number directly in quantity