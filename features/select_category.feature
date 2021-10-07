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
    Given there is no side-menu open
      And I click Meny
    When I click <Sort>
      And thereafter click <SubSort>
    Then I should be at <Url>

  Examples:
  | Sort              | SubSort | Url                                                     |
  | "frukt-och-gront" | "frukt" | "https://www.willys.se/sortiment/frukt-och-gront/frukt" |
  | "vegetariskt"     | "korv"  | "https://www.willys.se/sortiment/vegetariskt/korv"      |

