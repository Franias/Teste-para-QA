Feature: Investment Simulator Testing

  Scenario: Simulate an investiment
    Given I visit the Investment Simulator page
    Then I should see a simulation form
    When I inform my profile <associate>
    When I would apply R$<investiment>
    When I would save R$<savings> for <time>
    Then I could simulate with success