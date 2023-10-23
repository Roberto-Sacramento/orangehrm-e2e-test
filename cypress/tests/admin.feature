Feature: Admin page

    Background: 
        Given I accessed Admin page

    Scenario: Searching a user by username
        When I search a by username '<userName>'
            | userName  |
            | Virgulino2| 
        Then I should see the employee name '<employeeName>'
            | employeeName|
            | Virgulino2  |
            
    Scenario: Updating an user
      Given I search a user by username '<userName>'
      And I click on edit button
      And I changed user role information
      When I click on Save button
      Then I should see the updated toast message
            | userName  |
            | Virgulino2|

    