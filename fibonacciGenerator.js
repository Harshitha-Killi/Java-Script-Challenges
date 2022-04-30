function fibonacciGenerator (n) {
      var output = [0];

    for (var i = 1; i < n; i++){

        if(i===1){

            output.push(i);

        } 
        
        else {

            output.push(output[i-1]+output[i-2]);

        }

    }

    return output;
}

