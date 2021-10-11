#As a customer, I want to be able to view all my products in the shopping cart, so that I can make sure I have not missed anything.

Feature: View shopping cart
  As a customer I should be able to view my added products in the shopping cart
  before I proceed to check-out.

  Background: Click cookies button
    Given that I am on "https://www.willys.se"
    And I click the accept cookies button
    And we have been through the initial select delivery popup
    Then I should be able to see some products
    When I click the plus sign for a product
    Then I should see a quantity of one in the mini shopping cart

  Scenario: See added products in the shopping cart
    When I click the shopping cart
    Then I should see the added products in my shopping cart