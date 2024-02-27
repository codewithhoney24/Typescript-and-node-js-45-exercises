"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World !");
//  EXERCISE 1
let $message = "Hello world!";
console.log($message);
// EXERCISES NO 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let _personName = "Eric";
let message = `Hello ${_personName},would you like to learn some python today?`;
console.log(message);
// EXERCISES NO 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
//   METHOD 1
let personName = "Muhammad Atif";
// step 1 show in lower case:
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
// step 2 show in upper case:
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
// step 3 show in title case:
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
//  METHOD 2
let personName1 = "Muhammad Atif Khan";
console.log(personName1.toLowerCase());
console.log(personName1.toUpperCase());
console.log(personName1.replace('/\b/w/g', (char) => char.toUpperCase()));
//  //  METHOD 3
let personName2 = "Muhammad Atif Khan";
console.log("uppercase :", personName2.toLowerCase());
console.log("lowercase :", personName2.toUpperCase());
console.log("titlecase :", personName2.replace('/\b/w/g', c => c.toUpperCase()));
// EXERCISES NO 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
//  METHOD 1
console.log('Quaid-e-Azam said,"Expert the best, prepare for the worst."');
//  METHOD 2
let qoute = " A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${qoute}"`);
// EXERCISE 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
//  METHOD 1
let famous_person = "Quaid-e-Azam";
let _message = famous_person + ' once said,"expect the best, prepare for the worst."';
console.log(_message);
//  METHOD 2
let qoute1 = "A person who never made a mistake never tried anything new.";
let famous_person1 = "Albert Einstein ";
let _message1 = `${famous_person} once said, ${qoute1}`;
console.log(_message);
console.log("Hello World !");
//  EXERCISE 1
let message1 = "Hello world!";
console.log(message1);
// EXERCISE 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let $personName = "\t Muhammad Atif \n";
console.log("Name with white space", $personName);
let strippedName = $personName.trim();
console.log("strippedName :", strippedName);
// EXERCISE 7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//  # ADDITION
const additionResult = 4 + 4;
console.log("AdditionResult : " + additionResult);
//  # SUBTRACTION
const subtractionResult = 16 - 8;
console.log("SubtractionResult : " + subtractionResult);
//  # MULTIPLICATION
const multiplicationResult = 4 * 2;
console.log("MultiplicationResult : " + multiplicationResult);
//  # DIVISION
const divisionResult = 64 / 8;
console.log("DivisionResult : " + divisionResult);
// EXERCISE 8
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log("-".repeat(80));
console.log(5 + 3);
console.log("-".repeat(80));
console.log(16 - 8);
console.log("-".repeat(80));
console.log(4 * 2);
console.log("-".repeat(80));
console.log(16 / 2);
// EXERCISE 9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
//  METHOD 1
let favoriteNumber = 4;
console.log(`My Favorite number is ${favoriteNumber}`);
//  METHOD 2
let favorite_Number = 8;
let message$ = `My Favorite number is ${favorite_Number}`;
console.log(message$);
//   EXERCISE 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//  1ST PROGRAM
// my name is Nousheen Atif
// DATED : 20/2/2014
// THIS PROGRAM WILL RUN SIMPLE CODE JUST LIKE HELLO WORLD
console.log('Hello World! simple program');
//    2ND PROGRAM
// my name is Muhammad Atif  
// DATED : 20/2/2014 
// THIS PROGRAM WILL MULTIPLICATION
console.log(5 * 2);
//  EXERCISE 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//   METHOD 1
// let names : string[] = ["saba","ali","hamza","hassan"];
//     for(let i = 0 ; i <  names .length ; i++){
//         console.log(names[i])
//     }
//   METHOD 2
let names1 = ["saba", "ali", "hamza", "hassan"];
console.log(names1[0]);
console.log(names1[1]);
console.log(names1[2]);
console.log(names1[3]);
// EXERCISE 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let name1 = ["Aliza", "Zaheer", "Aamir", "Zameer"];
const messages = " \t:  Welcome to typescript classs! and let's start a first topic.";
for (let i = 0; i < name1.length; i++) {
    console.log(name1[i] + messages);
}
// EXERCISE 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation = ["Car", "Cycle", "Train", "Motorcycle"];
for (let i = 0; i < transportation.length; i++) {
    console.log('I would like to own a ' + transportation[i]);
}
// EXERCISE 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// ONLY THREE GUEST INVITE
let guest_list = ['Waqar', 'Ali', 'Tahir', 'Mateen', 'Asif'];
for (let i = 0; i < 3; i++) {
    console.log('Dear Mr.' + guest_list[i] + ', \nIt is our pleasure to invite you in our party for dinner. \nTank You!\n');
}
// EXERCISE 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest_list1 = ['Ali', 'Imran', 'Nawaz', 'Amir'];
for (let i = 0; i < guest_list1.length; i++) {
    console.log('Dear Mr.' + guest_list1[i] + ', \n\nIt is our pleasure to invite you in our party for dinner.\n\nTank You!\n\n');
}
// EXERCISE 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let Guest_List2 = ['Ishaq khan', 'Noman ali', 'Aqib'];
// for(let i = 0 ; i <  Guest_List.length ; i++){
//    console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party for dinner.\n\nTank You!\n\n')
// }
let absent_Guest1 = 'Ishaq khan';
let new_Guest1 = 'Mansoor shah';
Guest_List2[0] = new_Guest1;
for (let i = 0; i < Guest_List2.length; i++) {
    console.log('Dear Mr.' + Guest_List2[i] + ', \n\nIt is our pleasure to invite you in our party for dinner.\n\nTank You!\n\n');
}
console.log(`Mr.${absent_Guest1} is not coming to the party.\nSorry!\n`);
console.log('Good News! We find Big Table So We Are Inviting 3 More Guest.\n\n');
Guest_List2.unshift('Sir Azam Khan');
Guest_List2.splice(2, 0, 'Maryam');
Guest_List2.push('Bilawal');
for (let i = 0; i < Guest_List2.length; i++) {
    console.log('Dear Mr.' + Guest_List2[i] + ', \n\nIt is our pleasure to invite you in our party for dinner.\n\nTank You!\n\n');
}
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.\
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let Guest_List = ['Ishaq khan', 'Noman ali', 'Aqib'];
// for(let i = 0 ; i <  Guest_List.length ; i++){
//    console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party for dinner.\n\nTank You!\n\n')
// }
let absent_Guest = 'Ishaq khan';
let new_Guest = 'Mansoor shah';
Guest_List[0] = new_Guest;
// for(let i = 0 ; i <  Guest_List.length ; i++){
//      console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party for dinner.\n\nTank You!\n\n')
//      }
console.log(`Mr.${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table So We Are Inviting 3 More Guest.\n\n');
//  ADD 3 GUEST IN ARRAY.
Guest_List.unshift('Sir Azam Khan');
Guest_List.splice(2, 0, 'Maryam');
Guest_List.push('Bilawal');
// 6 GUEST IN ARRAY PRINT
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr.' + Guest_List[i] + ', \n\nIt is our pleasure to invite you in our party for dinner.\n\nTank You!\n\n');
}
// SORRY GUEST FOR NOT INVITING.
console.log('\nSorry we can not arrange big table,only two peoples will be invited.');
// GUEST REMOVE
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, you are not invited for Dinner.`);
}
// REMAING 2 INVITED GUEST
for (let i = 0; i < Guest_List.length; i++) {
    console.log('\nDear Mr.' + Guest_List[i] + ', \n\nYou are still invited.\n\nTank You!\n\n');
}
// ALL GUEST REMOVE   
Guest_List.splice(0, 2);
console.log(Guest_List);
// EXERCISE 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// METHOD 1
// ARRAY IS NOT ALPHABETICAL ORDER.
let places = ['Brazil', 'Denmark', 'America', 'England', 'Colombia'];
// PRINT ARRAY IN ORIGINAL ORDER.
console.log('original : ' + places);
// Print your array in alphabetical order without modifying the actual list.
console.log('copy\t : ' + [...places].sort());
// • Show that your array is still in its original order by printing it.
console.log('original : ' + places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy\t : ' + [...places].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log('original : ' + places);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log('original : ' + places.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('original : ' + places.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log('original : ' + places.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('original : ' + places.sort().reverse());
// METHOD 2
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let places1 = ['Brazil', 'Denmark', 'America', 'England', 'Colombia'];
// // • Print your array in its original order.
console.log('Original Order Print In Array    :  ' + places1);
// // • Print your array in alphabetical order without modifying the actual list.
console.log('Copy Alphabetical Order Print    :  ' + [...places1].sort());
// // • Show that your array is still in its original order by printing it.
console.log('Original Order sorting in Array  :  ' + places1);
// // • Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Copy Reverse Alphabetical order  :  ' + [...places1].sort().reverse());
// // • Show that your array is still in its original order by printing it again.
console.log('Original Order After Sorting     :  ' + places1);
// // • Reverse the order of your list. Print the array to show that its order has changed.
console.log('Original Reverse Order  Changed  :  ' + places1.reverse());
// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Original Order Reverse To Back   :  ' + places1.reverse());
// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
console.log('Original Alphabetical Order Sort :  ' + places1.sort());
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('original Alpha Order Sort in Rev :  ' + places1.sort().reverse());
// EXERCISE 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//  START ONE OF THE PROGRAM FROM EXERCISE 14 :
let invitations = ['Mateen', 'Asif'];
let count = invitations.length;
console.log(`${count} people inviting to the Dinner.`);
// EXERCISE 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let languages = ['Japanese', 'Sindhi', 'Punjabi', 'Hindi', 'Gujarati', 'Marathi'];
console.log("\nItem No 1\nList Of Languages : ");
console.log(languages);
// EXERCISE 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let items = { countries: "pakistan", cities: 30, languages: "urdu", is_religious: true, is_passport: null };
console.log(items);
// EXERCISE 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let communicate = ['Japanese', 'Sindhi', 'Punjabi', 'Hindi', 'Gujarati', 'Marathi'];
// console.log(communicate{4});
console.log(communicate[4]);
// EXERCISE 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car1 = "subaru";
//  CONDITION TRUE
console.log("car1 == 'subaru' ? 'predict true");
console.log(car == "subaru");
console.log("is car1!= 'honda city' ? predict true");
console.log(car1 != 'honda city');
console.log("car1 == 'subaru' ? 'predict false");
console.log(car1 == "subaru");
console.log("is car1.length == 6 ?'honda city' ? predict true");
console.log(car.length == 6);
console.log("is car1.length != 10 ?'honda city' ? predict false");
console.log(car1.length != 10);
// CONDITION FALSE
console.log("car1 == 'subaru' && car.length == 8 ? 'predict false");
console.log(car1 == 'subaru' && car1.length == 8);
console.log("is 15 <= 22 ? predict false");
console.log(3 <= 2);
console.log("is 44 >= 99? predict false");
console.log(44 >= 99);
console.log("car1 == 'SUBARU' ? 'predict true");
console.log(car1 == "SUBARU");
console.log("is 40 > 87 ? predict false");
console.log(10 > 45);
// EXERCISE 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// START
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let name_1 = "Nousheen";
let name_2 = "Nousheen Khan";
let name_3 = "nousheen atif";
if (name_1 == name_3) {
    console.log("name are equal");
}
else {
    console.log("name are not equal");
}
if (name_1 != name_2) {
    console.log("name are equal is Nousheen Khan");
}
// • Tests using the lower case function
if (name_1 != name_3) {
    console.log("name are equal noushee atif");
}
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let age_1 = 20;
let age_2 = 42;
if (age_1 == 20) {
    console.log("you can drive");
}
if (age_1 != 42) {
    console.log("you can not drive");
}
if (age_1 <= age_2) {
    console.log("eligible for passport");
}
if (age_2 >= age_1) {
    console.log("eligible for passport in older category");
}
// • Tests using "and" and "or" operators
if (age_1 == 20 && age_2 == 42) {
    console.log("you have all documents are attested for getting admission in new class");
}
if (age_1 == 20 && age_2 == 42) {
    console.log("you don't havea a paper attest for getting admission in new class");
}
if (age_1 == 20 || age_2 != 42) {
    console.log("younger");
}
if (age_1 == 20 || age_2 != 42) {
    console.log("elder");
}
// • Test whether an item is in a array
let cities = ["karachi", "islamabad", "lahore", "multan"];
if (cities.includes("multan")) {
    console.log("multan is in cities list");
}
// • Test whether an item is not in a array
if (!cities.includes("muree")) {
    console.log("muree is not include in an arry");
}
// EXERCISE 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//  START
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_color = "green";
if (alien_color == "green") {
    console.log("you earn 5 points");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_color1 = "red";
if (alien_color1 == "green") {
    console.log("no output");
}
let alien_color2 = "yellow";
if (alien_color2 == "yellow") {
    console.log("no output");
}
// EXERCISE 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let _alien_color = "green";
if (_alien_color == "green") {
    console.log("play just earned 5 points for shooting");
}
else {
    console.log("play just earned 10 points.");
}
let _alien_color1 = "red";
if (_alien_color1 == "red") {
    console.log("play just earned 10 points for shooting");
}
else {
    console.log("play just earned 20 points.");
}
// EXERCISE 27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// •Write three versions of this program, making sure each message is printed for the appropriate color alien
let $alien_color = "red";
if ($alien_color == "green") {
    console.log("play earned 5 points.");
}
else if ($alien_color == "yellow") {
    console.log("play earned 10 points.");
}
else {
    console.log("play earned 15 points.");
}
// EXERCISE 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 40;
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are older.");
}
// EXERCISE 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["melon", "mango", "banana", "pineapple", "blue berry", "peach"];
if (favorite_fruits.includes("mango")) {
    console.log("mango");
}
if (favorite_fruits.includes("melon")) {
    console.log("i like orange");
}
if (favorite_fruits.includes("banana")) {
    console.log("banana");
}
if (favorite_fruits.includes("blue berry")) {
    console.log("you really like blue berry");
}
if (favorite_fruits.includes("peach")) {
    console.log("peach");
}
// EXERCISE 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let users = ["eric", "ali", "zaid", "hassan", "admin"];
for (let user of users) {
    if (user === "admin") {
        console.log("hello admin,would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again`);
    }
}
// EXERCISE 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users1 = ["eric", "ali", "zaid", "hassan", "admin"];
if (users1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let user of users1) {
        if (user === "admin") {
            console.log("Hello admin,would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again`);
        }
    }
}
users1 = [];
if (users1.length === 0) {
    console.log("we need to find some users!");
}
// EXERCISE 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Eric", "admin", "Fahad", "zohra", "Amir"];
let new_users = ["admin", "Hina", "zohra", "Saba", "Zia"];
let current_users_lower = current_users.map(user => user.toLocaleLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLocaleLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`);
    }
    else {
        console.log(`Yes ${new_user}, is still in available list`);
    }
}
// EXERCISE 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
// EXERCISE 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let favorite_pizza = ["mayo garlic", "chicken", "vegetable", "pepperoni"];
for (let pizza of favorite_pizza) {
    console.log(pizza);
}
for (let pizza of favorite_pizza) {
    console.log(`I really love ${pizza} pizza`);
}
console.log("\n I love large fajita pizza!");
// EXERCISE 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["horse", "cat", "lion", "dog"];
for (let animal of animals) {
    console.log(animal);
}
for (let animal of animals) {
    console.log(` A ${animal} has a tail`);
}
console.log(" \n All of these are great pets! But i love hores more. ");
// EXERCISE 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, text) {
    console.log(`you order a ${size},shirt that says ${text}`);
}
make_shirt('large', "i love addias!.");
make_shirt('medium', "i need medium size shirt.");
// EXERCISE 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shiirt(size = 'large', text = 'i love typescript!.') {
    console.log(`you order a ${size} ,shirt that says ${text}`);
}
make_shiirt();
make_shiirt('medium');
// DIFFERENT MESSAGE
make_shiirt('small', 'i need a medium shirt to wear.');
// EXERCISE 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = 'pakistan') {
    console.log(`${city} , is in ${country}`);
}
// default sentence
describe_city('karachi');
describe_city('islamabad');
describe_city('sukkhar');
// EXERCISE 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return `${city} , ${country}`;
}
let c1 = city_country('lahore', 'pakistan');
let c2 = city_country('tokyo', 'japan');
let c3 = city_country('paris', 'france');
console.log(c1);
console.log(c2);
console.log(c3);
// EXERCISE 40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toLocaleUpperCase() + artist.slice(1),
        title: title.charAt(0).toLocaleUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = make_album("azmeer", "yellow");
console.log(album);
let album1 = make_album("zaheer", "white");
console.log(album1);
let album2 = make_album("hunain", "orange");
console.log(album2);
// EXERCISE 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians1(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toLocaleUpperCase() + magician.slice(1));
    }
}
const magician = ["bilawal", "ali", "jamshed", 'moshin'];
show_magicians1(magician);
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function MAKE_GREAT(MAGICIANS) {
    for (let i = 0; i < MAGICIANS.length; i++) {
        MAGICIANS[i] = MAGICIANS[i] + ' you are The Great Human';
    }
}
const MAGICIANS = ["zia ", "ali ", "saad",];
function SHOW_MAGICIAN(MAGICIANS) {
    console.log(MAGICIANS);
}
MAKE_GREAT(MAGICIANS);
SHOW_MAGICIAN(MAGICIANS);
// EXERCISE 43
// // Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + '  The Great');
    }
    return greatMagicians;
}
const magicians = ["zia", "ali", "jamshed"];
const greatMagicians = make_great(magicians);
function show_magicians(magicians) {
    console.log(magicians);
}
show_magicians(magicians);
show_magicians(greatMagicians);
// EXERCISE 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) {
    console.log("sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(` - ${items[i]}`);
    }
}
console.log("enjoy your sandwich MR.Ali.");
sandwich('capsium', 'mayonise', 'tomato', 'garlic');
sandwich('onion', 'chicken', 'green chili', 'garlic');
sandwich('chili sauas', 'mayo garlic', 'paperica', 'black peeper');
function createcar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createcar("toyota", "suzuki", { color: "black", year: "2024" });
console.log(mycar);
// ALHUMDULILLALLAH.
