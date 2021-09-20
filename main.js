/*
	WEB 303
	Starting file for Assignment 1 
	{Eric Batiste}
*/

$(document).ready(function () {
    $('#percent').on('change',function(e) {
        let spendResult;
		console.log( $("#salary").val());
        spendResult = $("#salary").val() * $("#percent").val() / 100;
        $("#spend").text("$" + spendResult.toFixed(2));
    })
	 $('#salary').on('change',function(e) {
		console.log( $("#percent").val());
        spendResult = $("#salary").val() * $("#percent").val() / 100;
        $("#spend").text("$" + spendResult.toFixed(2));
    })
});
