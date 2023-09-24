Feature: Admin page

    Scenario Outline: Searching a user
        Given I accessed Admin page
        When I search a '<userName>'
        Then I should see the employee name
        Examples:
            | userName | employeeName| 
            | Virgulino| Virgulino   | 

    @CreationOfUser
    Scenario Outline: Update a user
    Scenario Outline: Searching an user by role
        Given I accessed Admin page
        When I selected user by role '<userRole>'
        #Then I should see the user role selected
        Examples:
            | userRole| 
            | ESS     |