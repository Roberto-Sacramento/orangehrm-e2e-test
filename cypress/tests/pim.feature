Feature: PIM page

    Scenario: Creation of an user
        Given I accessed PIM page
        And I click on Add button
        And I fill the fields '<firstName>', '<middleName>', '<lastName>'
          | firstName | middleName | lastName|
          | Maria     | Philips    | Silva   |
        When I click on Save button
        Then The system should display the Successfully message
        
          