Feature: Investment Simulator Testing

  Scenario: Simulate an investiment with success
    Given I visit the Investment Simulator page
    Then I should see a simulation form
    When I inform my profile
    When I would apply R$ 20
    When I would save R$ 20 for months
    Then I could simulate with success