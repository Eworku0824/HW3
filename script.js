let origArray = [2,3,4];
     
      document.addEventListener("DOMContentLoaded", function() {
        let textboxes = document.querySelectorAll("input[type=text]");
        for (let i = 0; i < origArray.length; i++) {
          textboxes[i].value = origArray[i];
        }
       
        let button2 = document.getElementById("button2");
        button2.addEventListener("click", function() {
          let newArray = origArray.map(function(x) {
            return x*x*x;
          });
          for (let i = 0; i < newArray.length; i++) {
            textboxes[i].value = newArray[i];
          }
        });
       
        let button3 = document.getElementById("button3");
        button3.addEventListener("click", fourthPower);
      });
     
      function fourthPower() {
        let newArray = origArray.map(function(x) {
          return Math.pow(x, 4);
        });
        let textboxes = document.querySelectorAll("input[type=text]");
        for (let i = 0; i < newArray.length; i++) {
          textboxes[i].value = newArray[i];
        }
      }
     
      function squareArray() {
        let newArray = origArray.map(function(x) {
          return x*x;
        });
        let textboxes = document.querySelectorAll("input[type=text]");
        for (let i = 0; i < newArray.length; i++) {
          textboxes[i].value = newArray[i];
        }
      }

