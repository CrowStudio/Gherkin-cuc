#As a customer, I want to be able to select a product to get more information about it,
#so that I can decide if it is interesting.

Feature: Willys product information
  As a customer at Willys I should be able to click a product to get detailed
  information about it.


  #Background? Maybe search for a product?
  #choose products to search for and then click and get info?
  #or just a random product from the the start page?

  Scenario: Click product and get information
    Given that I am on "https://www.willys.se"
    When I click on a product
    Then I should get the clicked products information
