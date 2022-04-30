function whoisPaying(names){

  var names=["ha","hb","hc","hd"];

  var randomNumber= names.length;
  var randomPosition= (Math.floor( Math.random() * randomNumber)) ;
  var randomName=names[randomPosition];

  return randomName+" is going to pay the lunch today!" ;
  
}

var output=whoisPaying();
console.log(output);
