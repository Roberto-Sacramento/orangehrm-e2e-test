Feature: PIM page

    Scenario Outline: Creation of an user
        Given I accessed PIM page
        And I click on Add button
        And I fill the fields '<firstName>', '<middleName>', '<lastName>'
        When I click on Save button
        #Then The system should display the message  'Successfuly salved'
        Examples:
            | firstName | middleName | lastName|
            | Maria     | Philips    | Silva   |