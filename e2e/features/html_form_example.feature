@automation_training
Feature: Accessing HTML form test
  As a customer
  I want to access to HTML form test
  So that I can complete all fields and submit

  Background:
    Given I am on the index page
    When I click on "HTML form example" option

  @test-1
  Scenario Outline: Complete fields in HTML form
    Then I validate the page title is "Basic HTML Form Example"

  @test-2
  Scenario: Complete fields in HTML form
    When I enter "Sergi Olmos" in "username" field
    And I enter "Helouda" in "password" field
    And I enter "Test Automation" in "textarea comment" field
    And I click on first "checkbox"
    And I click on second "radio"
    And I select the Third item in "multiple"
    And I select a first item in "dropdown"
    And I click on "Submit" button
    Then "You submitted a form" message is displayed





