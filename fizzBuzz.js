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
