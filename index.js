/*var tweet= prompt("Enter your tweet:");
var tweetCount= tweet.length;
alert(tweet.length);
var tweetLeft= 140-tweetCount;
alert("You have written " + tweet.length +" charaters." + " You have " + (140-tweet.length) + " characters remaining.");
var finalTweet= tweet.slice(0,140);
alert(finalTweet);
alert( prompt( "Compose your tweet:").slice(0,140) ); */

/* var Name=("Harshitha");
Name.toUpperCase(); */

/*var name = prompt("Enter your Name");
var upperName= (name.slice(0,1)).toUpperCase();
var lowerName= (name.slice(1,)).toLowerCase();
alert("Hello, "+ upperName + lowerName); */

//alert("Hello, "+ ( ( name.slice(0,1) ).toUpperCase() ) + ( ( name.slice(1, ) ).toLowerCase() ));

/* var dogAge=prompt("Enter you Dog's Age: ")
var humanAge= ((dogAge-2)*4)+21 ; */
/*alert("The human age is "+ ( ((( prompt("Enter your Dog's age: ") )-2)*4)+21 )+" years.");


//Functions : Stanford Karel

function main(){

  startPoint();
  startPoint();
   startPoint();
    startPoint();
}

function endPoint (){
    move();
    move();
     move();
      move();
      turnLeft();
       move();
        move();
         move();
          move();
}

function startPoint(){
  endPoint();
  turnLeft();
  endPoint();
  turnLeft();
   }

//Zig-Zag
   function main(){
    endPoint();
    endPoint();
    endPoint();

    move();
    turnLeft();
    move();



   }
   function endPoint (){
      move();
    turnLeft();
    move();
    turnRight();
   }

   //Diagonal Beeper

   function main(){

 diagonalBeeper ();
 diagonalBeeper ();

 putBeeper();



}
function diagonalBeeper (){
  putBeeper();
move();
 turnLeft();
 move();

 putBeeper();
 move();
 turnRight();
 move();
}

//H code

function main(){

  putBeeper();
  turnLeft();

   move();
 putBeeper();

  move();
 putBeeper();

  move();
 putBeeper();

 move();
 putBeeper();

 turnRight();
 move();
 move();
 move();
 move();

 putBeeper();
 turnRight();

  move();
 putBeeper();

  move();
 putBeeper();

  move();
 putBeeper();

 move();
 putBeeper();

 turnRight();
 turnRight();

 move();
 move();

  turnLeft();

   move();
 putBeeper();

  move();
 putBeeper();

 move();
 putBeeper();

 move();

}*/

var output=[];
var count=1;

function fizzbuzz(){


 if(count%3===0 && count%5!==0){
    output.push("Fizz");
 }

 else if(count%5===0 && count%3!==0){
      output.push("Buzz");
 }

 else if(count%15===0){
      output.push("FizzBuzz");

 }
 else{
      output.push(count);
 }

 count++;
    console.log(output);
}
