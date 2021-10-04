#As a customer, I want to be able to select a product to get more information about it,
#so that I can decide if it is interesting.

Feature: Willys product information
  As a customer at Willys I should be able to click a product to get detailed
  information about it.


  Background: Click cookies button
    Given that I am on "https://www.willys.se"
      And I click the accept cookies button
      And we have been through the initial select delivery popup
    Then I should be able to see some products

  #decide what product to click or click a random one?

  Scenario: Click product and get information
    #Given that I am on "https://www.willys.se"
    When I click on a product
    Then I should get the clicked products information
