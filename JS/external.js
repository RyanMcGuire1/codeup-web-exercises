console.log("hello from external JavaScript");
alert("Welcome to my website!");
var Color = prompt("What is your favorite color?");
alert(Color + " is my favorite color too!");

var LittleMermaid = Number(prompt("How many days did you have 'The little Mermaid'?"));
var BrotherBear = Number(prompt("How many days did you have 'Brother Bear'?"));
var Hercules = Number(prompt("How many days did you have 'Hercules'?"));
var PricePerDay = Number(prompt("What is the price of a rental per day?"));
alert("Your cost is " + (LittleMermaid+BrotherBear+Hercules)*PricePerDay);

var googlePay = Number(prompt("How much does Google pay you per hour?"));
var googleHours = Number(prompt("How many hours did you work for Google?"));
var FacebookPay = Number(prompt("How much does Facebook pay you per hour?"));
var FacebookHours = Number(prompt("How many hours did you work for facebook?"));
var AmazonPay = Number(prompt("How much does Amazon pay you oer hour?"));
var AmazonHours = Number(prompt("How many hours did you work for Amazon?"));
var TotalPay = alert("Your pay is " + (googlePay*googleHours) + (FacebookPay*FacebookHours) + (AmazonPay*AmazonHours));

var ClassIsNotFull = confirm("Class is not full");
var ScheduleNoConflict = confirm("Schedules does not conflict");
var StudentEnrolled = ClassIsNotFull && ScheduleNoConflict;
var alertMessage = "Student enroled: " + StudentEnrolled;
alert(alertMessage);

var numberOfItems =Number(prompt("How many items did you buy?"));
var offerIsValid = confirm("Is the offer valid");
var isPremiumMember = confirm("Are you a premium member?");
var discountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);
alert("Product discount: " + discountApplied);


