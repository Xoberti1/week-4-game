$(document).ready(function () {

	var numbersArray = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];

	var numberGoal = numbersArray[Math.floor(Math.random() * numbersArray.length)];

	$("#randomnumber").text(numberGoal);	



	var crystalnumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	for (var i = 0; i < crystalnumbers.length; i++) {
		var assignment1 = crystalnumbers[Math.floor(Math.random() * crystalnumbers.length)];
		var assignment2 = crystalnumbers[Math.floor(Math.random() * crystalnumbers.length)];
		var assignment3 = crystalnumbers[Math.floor(Math.random() * crystalnumbers.length)];
		var assignment4 = crystalnumbers[Math.floor(Math.random() * crystalnumbers.length)];

		$("#daimond").attr("data-crystalvalue", assignment1);
		$("#ruby").attr("data-crystalvalue", assignment2);
		$("#sapphire").attr("data-crystalvalue", assignment3);
		$("#yellowstone").attr("data-crystalvalue", assignment4);
	};

	var wins = 0;
	var losses = 0;

	var score = 0;

	var reset = function() {
		var numbersArray = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];

		var numberGoal = numbersArray[Math.floor(Math.random() * numbersArray.length)];

		$("#randomnumber").text(numberGoal);

		var crystalnumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

		for (var i = 0; i < crystalnumbers.length; i++) {
			var assignment1 = crystalnumbers[Math.floor(Math.random() * crystalnumbers.length)];
			var assignment2 = crystalnumbers[Math.floor(Math.random() * crystalnumbers.length)];
			var assignment3 = crystalnumbers[Math.floor(Math.random() * crystalnumbers.length)];
			var assignment4 = crystalnumbers[Math.floor(Math.random() * crystalnumbers.length)];

			$("#daimond").attr("data-crystalvalue", assignment1);
			$("#ruby").attr("data-crystalvalue", assignment2);
			$("#sapphire").attr("data-crystalvalue", assignment3);
			$("#yellowstone").attr("data-crystalvalue", assignment4);
		};

		score = 0;
		$("#scorebox").html(score);

	}

	$("#daimond").on("click", function() {

	var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);	

    	score += crystalValue;
    	$("#scorebox").html(score);
    	console.log(score);

    if (score === numberGoal) {
    	wins ++;
    	$("#wins").html("Wins: " + wins)
    	reset();
    }
    
    else if (score > numberGoal) {
    	losses ++;
    	$("#losses").html("Losses: " + losses)
    	reset();
    }

	});

	$("#ruby").on("click", function() {

	var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);	

    	score += crystalValue;
    	$("#scorebox").html(score);
    	console.log(score);

    if (score === numberGoal) {
    	wins ++;
    	$("#wins").html("Wins: " + wins)
    	reset();
    }
    
    else if (score > numberGoal) {
    	losses ++;
    	$("#losses").html("Losses: " + losses)
    	reset();
    }
	});

	$("#sapphire").on("click", function() {

	var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);	

    	score += crystalValue;
    	$("#scorebox").html(score);
    	console.log(score);

    if (score === numberGoal) {
    	wins ++;
    	$("#wins").html("Wins: " + wins)
    	reset();
    }
    
    else if (score > numberGoal) {
    	losses ++;
    	$("#losses").html("Losses: " + losses)
    	reset();
    }
	});

	$("#yellowstone").on("click", function() {

	var crystalValue = ($(this).attr("data-crystalvalue"));
    	crystalValue = parseInt(crystalValue);	

    	score += crystalValue;
    	$("#scorebox").html(score);
    	console.log(score);

    if (score === numberGoal) {
    	wins ++;
    	$("#wins").html("Wins: " + wins)
    	reset();
    }
    
    else if (score > numberGoal) {
    	losses ++;
    	$("#losses").html("Losses: " + losses)
    	reset();
    }
	});

/*
1. Assign each image a number whenever a game begins
	This will likely require:
	 a series of arrays 
	 a math.random function for each array
2. Will have to be able to add the numers assigned to each gem together throughout the course of the game.
3. Will have to be able to compare the sum of those added numbers to numbergoal
	increase losses if the sum exceeds numbergoal
	increase wins if the sum is equal to the numbergoal
4. Display each quantity in the appropriate location	
*/
});
