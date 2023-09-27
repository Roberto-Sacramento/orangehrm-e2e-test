Feature: Admin page

    Scenario Outline: Searching a user by username
        Given I accessed Admin page
        When I search a by username '<userName>'
        Then I should see the employee name '<employeeName>'
        Examples:
            | userName  | employeeName | 
            | Virgulino2| Virgulino2   | 

    