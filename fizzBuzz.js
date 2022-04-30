//Method-1

var output=[];
var count=1;

function fizzBuzz(){
  
  if(count%3===0 && count%15!==0){
     output.push("Fizz");
  }

   else if(count%5===0 && count%15!==0){
     output.push("Buzz"); 
  }

   else if(count%15===0){
     output.push("FizzBuzz");
  }

  else{
     output.push(count);
  }

  console.log(output);
  count++;
 
}

//Method-2

var output=[];
var count=1;

function fizzBuzz(){

while(count<=100){

 if(count%3===0 && count%5===0){
     output.push("FizzBuzz");
  }

   else if(count%3===0){
     output.push("Fizz"); 
  }

   else if(count%5===0){
     output.push("Buzz");
  }

  else{
     output.push(count);
  }

 count++;
  
 }

  alert(output);

 }
