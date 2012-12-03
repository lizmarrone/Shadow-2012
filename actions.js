		$(document).ready(function()
		{
			/*$("#accordion").accordion();
			$("button")
            .button()
            .click(function( event ) {*/
                /*event.preventDefault();*/
            /*    $("#dialog").dialog();
            });
            $("#datepicker").datepicker();*/
            
            $("div#uiButtonBar div#radio").buttonset();
            $("input#datepicker").datepicker();
            $("div#uiButton button").button();
            $("#tabs").tabs();
            $("#slider").slider();
            $("div#uiLinkButton a").button();  
            $( "#uiActiveProgressBar" ).progressbar({
            	value: 59
        	});               
            
			var spinner = $( "#spinner" ).spinner();
	 
			$( "#disable" ).click(function() {
				if ( spinner.spinner( "option", "disabled" ) ) {
					spinner.spinner( "enable" );
				} else {
					spinner.spinner( "disable" );
				}
			});
			$( "#destroy" ).click(function() {
				if ( spinner.data( "ui-spinner" ) ) {
					spinner.spinner( "destroy" );
				} else {
					spinner.spinner();
				}
			});
			$( "#getvalue" ).click(function() {
				alert( spinner.spinner( "value" ) );
			});
			$( "#setvalue" ).click(function() {
				spinner.spinner( "value", 5 );
			});
            
             $("div#uiComboBox select").mouseover(function()
            {
            	$(this).css("border","1px solid #2cabb8");
            });
            $("div#uiComboBox select").mouseout(function()
            {
            	$(this).css("border","1px solid #000000");
            });               
            			
            $("div#uiTextArea textarea").focus(function()
            {
            	$(this).css("border","2px solid #2cabb8");
            });
            $("div#uiTextArea textarea").focusout(function()
            {
            	$(this).css("border","2px solid #000000");
            });
            
            $("div#uiTextInput input").focus(function()
            {
            	$(this).css("border","2px solid #2cabb8");
            });
            $("div#uiTextInput input").focusout(function()
            {
            	$(this).css("border","2px solid #000000");
            });
            
            $("a.ui-spinner-button").mouseover(function()
            {
            	$("a.ui-spinner-button").css("border","1px solid #2cabb8");
            });
            
            $("a.ui-spinner-button").mouseout(function()
            {
            	$("a.ui-spinner-button").css("border","1px solid #000000");
            });              
            
			$("div#search input#txtSearch").click(function()
			{
				if($(this).val() == "Enter Search Keyword Here")
				{
					$(this).val("");
				}
			});
			$("div#search input#txtSearch").focusout(function()
			{
				if($(this).val() == "")
				{
					$(this).val("Enter Search Keyword Here");
				}
			});
			$("div#search div#submitBox").click(function()
			{
				$("form#headerSearchFrm").submit();
			});
			
			$("table#subscribe tr td input#txtSubscribe1").click(function()
			{
				if($(this).val() == "Email Address")
				{
					$(this).val("");
				}
			});
			
			$("table#subscribe tr td input#txtSubscribe1").focusout(function()
			{
				if($(this).val() == "")
				{
					$(this).val("Email Address");
				}
			});			
			
			$("table#subscribe tr td input#txtSubscribe2").click(function()
			{
				if($(this).val() == "Full Name")
				{
					$(this).val("");
				}				
			});		
			
			$("table#subscribe tr td input#txtSubscribe2").focusout(function()
			{
				if($(this).val() == "")
				{
					$(this).val("Full Name");
				}				
			});				
		});