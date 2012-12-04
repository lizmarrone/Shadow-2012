		$(document).ready(function()
		{
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