var guestList=["ha","hb","hc","hd","he","hf"]
var guestName= prompt("What is your name?");

function guestIncluded(){

  if(guestList.includes(guestName)){
    return "Please welcome!" ;
  }
  else{
    return "Sorry, you are not invited." ;
  }

  return guestName;
}

var output= guestIncluded();
