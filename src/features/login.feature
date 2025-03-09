@login @validation
Feature: Login Form Validation

  # UC-1: Empty credentials after clearing
  Scenario Outline: Login page should show username missing error when inputs are cleared
    Given I am on the "login" page
    When I enter "<username>" as username
    And I enter "<password>" as password
    And I clear "username" field
    And I clear "password" field
    And I click the login button
    Then the error message should contain "<message>"

    Examples:
      | username | password      | message              |
      | test     | testpassword! | Username is required |
      | standard | secret_sauce  | Username is required |

  # UC-2: Password cleared
  Scenario Outline: Login page should show password missing error when password is cleared
    Given I am on the "login" page
    When I enter "<username>" as username
    And I enter "<password>" as password
    And I clear "password" field
    And I click the login button
    Then the error message should contain "<message>"

    Examples:
      | username       | password      | message              |
      | standard_user  | secret_sauce  | Password is required |
      | problem_user   | secret_sauce  | Password is required |

  # UC-3: Successful login
  Scenario Outline: Successful login with valid credentials from accepted list
    Given I am on the "login" page
    When I enter "<username>" as username
    And I enter "secret_sauce" as password
    And I click the login button
    Then I should be redirected to dashboard
    And the browser title should be "Swag Labs"
    And the page header should display "Swag Labs"

    Examples:
      | username                |
      | standard_user           |
      | problem_user            |
      | performance_glitch_user |