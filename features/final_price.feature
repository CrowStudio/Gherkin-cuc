Feature: Check the total price
  As a customer, I want to be able to see the correct subtotal of my shopping cart, 
  so that I can see the final price before I proceed to checkout. 

  Background: Going to Willys and pressing the accept cookies button
    Given that I am on "https://www.willys.se"
      And I click the accept cookies button
      And we have been through the initial select delivery popup
    Then I should be able to see some products