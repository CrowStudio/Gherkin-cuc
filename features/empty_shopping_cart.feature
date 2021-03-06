# As a customer, I want to be able to empty the whole shopping cart,
# so that I can start over if I change my mind

Feature: Empty shopping cart
  You should be able empty the shopping cart
  if you changed your mind about shopping, or want to start over.

  Background: Click cookies button
    Given that I am on "https://www.willys.se"
      And I click the accept cookies button
      And we have been through the initial select delivery popup
    When I click the plus sign for a product
    Then I should see a quantity of one in the mini shopping cart
    When I click the shopping cart
    Then I should see the added products in my shopping cart

  Scenario: Empty the whole shopping cart
    When I click the white Töm-button in the shopping cart
      And confirm by clicking the red Töm-button
    Then I should have an empty shopping cart
      And the total price should be 0,00 kr


