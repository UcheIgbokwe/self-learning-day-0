
'use strict'

module.exports = {

  aritGeo: function (arr) {
      if(typeof arr == 'object'){
          if (!arr[0]) {
            return 0;
          }
       }
        if(arguments.length > 1){
          return -1;
        }

        if(checkArit(arr) === true) {
          return 'Arithmetic';
        } else if (checkGeo(arr) === true) {
          return "Geometric";
        } else {
          return -1;
        }
        
        
        function checkArit(arr) {
          var diff = arr[1] - arr[0];
          var arit = true;
          for (var i = 0; i < arr.length - 1; i++) {
            if ((arr[i+1] - arr[i]) !== diff) {
              arit = false;
            }
          }
          return arit;
        }
        
        function checkGeo(arr) {
          var rad = arr[1]/arr[0];
          var geo = true;
          for (var x = 0; x < arr.length - 1; x++) {
            if ((arr[x+1]/arr[x]) !== rad) {
              geo = false;
            } 
          }
          return geo;
        }
  
    }
}