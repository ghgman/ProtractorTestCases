Feature - Search fucntionaitiy for Angular.IO site

Description
The user should be able to get a list of links to topics related to text entered in a ssearch box.
The list items displayed should be clickable.
When any link in the list is clicked the user should be navigated to the page displaying the related topic.

Scenario: Succesful display of topics related to text in searchBox
Given As a Angular.IO Page user, I Navigate to Angular.IO
When I enter text in the searchBox with "testability"
Then I should see "TestabilityRegistry"

Scenario: Succesful navigation to topic page.
Given As a Angular.IO Page user, I Navigate to Angular.IO and searched for "testability" and results are displayed
When I click on "TestabilityRegistry" list item link
Then  I am navigated to "TestabilityRegistry"



