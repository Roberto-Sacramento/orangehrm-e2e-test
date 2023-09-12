Feature: Admin page

    Scenario Outline: Searching a user
        Given I access Admin page
        And I search a '<userName>'
        # When I click on Search button
        # Then I should see the '<employeeName>'
        Examples:
            | userName    | employeeName| 
            | Aaliyah     | Aaliyah Haq |
