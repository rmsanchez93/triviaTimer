//first lets grab timer and fill with countdown 
//then grab div with questions and fill with questions(answers)
//make answers clickable 
//keep count of what is correct and incorrect




$( document ).ready(function() {
    //I want to make a "slideshow" of my profile picture,so it keeps the user entertained through my boring questions
    //ok ok make a collection of question, start with one. 

    var questionAnswer = {
        q0: "What is my favorite food?",
        a0 : ["tacos", "pizza","donuts","ramen"],
        correct0: 0, //so I want to make the index of the answers array and 0 is the correct answer in this case

        q1: "Where have I NOT travelled??",
        a1: ["Calgary", "New Orleans","Mexico City","Tulsa"],
        correct1: 3,

        q2: "Why did I choose to pick up coding??",
        a2: ["Bored","Tired of my old job", "Just cause","My family does coding so I have  to, too"],
        correct2: 1,
        
        q3: "What's my favorite game??",
        a3: ["Secret Of Mana", "Super Mario Sunshine", "Resident Evil 7","Fortnite"],
        correct3: 0,
       
        q4: "What's my favorite animal??",
        a4: ["Lions","Tigers","Bears","Wolves"],
        correct4: 3,

        q5: "What style of guitar do I prefer?",
        a5: ["Telecasters", "Stratocasters", "All guitars are my favorite", "Offsets"],
        correct5: 2,

        q6: "What's my favorite band?",
        a6: ["Dance Gavin Dance","Eternity Forever","Foo Fighters","CHON"],
        correct6:1,

        q7: "What is my drink of choice?",
        a7:["Jose Cuervo", "Jack Daniels","Moutain Dew","40 Creek"],
        correct7:3,

        q8: "What's my favorite movie??",
        a8:["Kung Fu Panda","Spinal Tap","Pick of Destiny", "Pulp Fiction"],
        correct8:3,

        q9:"What instrument do I NOT know how to play?",
        a9:["drums","guitar","bass","keys"],
        correct9:0,

    }
    
    
    var timer = $("#timer");
    var count = 25; //25 seconds sounds like it should work
    timer.text("TIME LEFT, SUCKAH : " + count); //I wanna put the time on here
    
    function start() {
           intervalId = setInterval(count, 1000);
         }


    //ok ok  so now we are gon test the questions div and fill it dynamically 
    //for loop to get all questions loaded properly
    //for (let i =0;i<4;i++){

        var quest = $("#question");
        quest.text(questionAnswer.q); //cool it works, now get it to load a question
        
        
        var answer =$("#answers");
        var load =$("<li>"); //new list for each answer 
        
        answer.text(questionAnswer.a.join(" ")); //shows answer, but would prefer list cause tehn I can make them clickable
   // }

    //maybe make a loop to go through your array of answers PER question?




});