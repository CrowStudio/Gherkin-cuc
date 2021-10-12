# As a customer, I want to be able to checkout my shopping cart, 
# so that I can buy the products I have added.

Feature: Test checkout functionality
  As a customer, I want to be able to checkout my shopping cart, 
  so that I can buy the products I have added.

  Background: Going to Willys and pressing the accept cookies button
    Given that I am on "https://www.willys.se"
      And I click the accept cookies button
      And we have been through the initial select delivery popup
    Then I should be able to see some products

  Scenario: Checking out
    When I click the plus sign to add a product
      And click the plus sign of the same product again
      And I click the shopping cart
      And we should have a price higher than zero
      And we click the gå till kassan button
    Then we should see the checkout screen