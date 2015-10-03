# BoxProject 1.0
Custom and Light Alert,Confirm and Prompt Dialogs for Websites.

# Prerequisites
JQuery 1.* or higher (http://jquery.com/)

# Implementing BoxProject

Add the BoxProject JavaScript to your web page

<script type="text/javascript" src="BoxProject.js"></script> 

Declare a New Object

var Bp=new BoxProject();

To Show an Alert Dialog

Bp.showAlert('Error Box Title Goes Here','Error Message Goes Here');

To Show a Confirm Dialog

Bp.showConfirm('Confirm Box Title Goes Here','Confirm Message Goes Here',
	function(){//If Yes Button Clicked the Code inside this function executes
		console.log("yes button clicked")
	}
);

To Show a Prompt Dialog

Bp.showPrompt('Prompt Box Title Goes Here','Prompt Message Goes Here',
	function(data){//The Data entered inside the prompt box can be accessed from this function
		console.log(data);
	}
);

# License

BoxProject 1.0 is covered by the MIT License.

Copyright (C) 2015 ~ Basura Ratnayake ~ amuthupuwath@gmail.com



