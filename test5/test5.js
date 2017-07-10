describe('Angular.io url', function() {
  it('Running test scenario', function() {

   /////////// Test Settings /////////////
    var testName="\"Click on Result Link\"";
    var testNumber="#1";
    var desiredResult="TestabilityRegistry";
   ///////////////////////////////////////


    var mywindow=browser.get('http://angular.io');
    var searchBox= element(by.xpath('/html/body/aio-shell/md-toolbar/div/md-toolbar-row/aio-search-box/input'));
	searchBox.sendKeys('Testability');
    searchBox.click();
	
	console.log("==================================================================");
    console.log("Test "+testNumber);
    console.log("Test Name: "+testName);

try{
    var searchResult=element(by.xpath('/html/body/aio-shell/aio-search-results/div/div/ul[1]/li/a'));
    var EC=protractor.ExpectedConditions;

    browser.wait(EC.elementToBeClickable(searchResult),10000)
       .then(function(){
         //searchResult.getText();
         console.log("clickable");
       },function(err){
         console.error("Request timed out");

       });

        searchResult.getText().then(function(text){
            //matching text against desired linked text.
        if(text==desiredResult){
			searchResult.click();
		    browser.driver.sleep(5000);
            console.log("...\""+desiredResult+"\" found and result has been clicked.")
            console.log("\nTest Result: Pass");
            console.log("==================================================================");

        }
        else{
          console.log("...\""+desiredResult+"\" NOT found.");
          console.log("\nTest Result: Failed - There are errors.");
          console.log("==================================================================");

          throw new Error(text+" not equal to "+desiredResult);

        }

      });
     
    }catch(err){

        console.log("There was an error: "+err);
    }

  })

});
