Feature: Admin page

    Scenario Outline: Searching a user
        Given I access Admin page
        When I search a '<userName>'
        Then I should see the employee name
        Examples:
            | userName | employeeName| 
            | Admin    | Admin       | 
    