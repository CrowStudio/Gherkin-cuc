# As a customer, I want to be able to select a category of products,
# so that I can see what products are included.

Feature: Select a Product Category on willys.se
  You should be able single out a product catergory,
  to make it easier to find a specifik product at willys.se

  Background: Going to Willys and pressing the accept cookies button
    Given that I am on "https://www.willys.se"
      And I click the accept cookies button
      And we have been through the initial select delivery popup
    Then I should be able to see some products

  Scenario Outline: Show Products per Catagory
    When I click Meny
      And click <Sort>
      And click <SubSort>
    Then I should get a listing of products
      And the search result should contain only products related to SubSort

  Examples:
  | Sort            | SubSort      |
  | "Frukt & Grönt" | "Färska bär" |
  | "Vegetariskt"   | "Korv"       |

