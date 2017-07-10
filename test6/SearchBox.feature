Feature - Search fucntionaitiy for Angular.IO site.

Description
The user should be able to get a list of links to topics related to text entered in a ssearch box.
The list items displayed should be clickable.
When any link in the list is clicked the user should be navigated to the page displaying the related topic.

Scenario: Succesful display of topics related to text in searchBox
Given User is on Angular.IO Page
When user enters text in the searchBox
Then List of links to topics is displayed

Scenario: Succesful navigation to topic page.
Given navigated to Angulat.IO page And has entered text in the searchBox and list of links have been displayed.
When the user clicks on a list item link
Then the user is navigated to the page with related information to the text entered