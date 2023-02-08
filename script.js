//1. Display number in textbox
      // display=document.getElementById('display').value;
      buttons=document.querySelectorAll('.button');

      function displayNum(num){
        console.log(num);
        display.value+=num;
      }

//2. Clear textbox
      function clearBox1(){
        display.value='';
      }

//3.evaluate expression

      function Calculate(){
        output=eval(display.value);   //evaluating expression in display
        display.value=output;
      }

//4. Remove last item from textbox
      function removeLastItem(){
        currentExpression= display.value;
        display.value= currentExpression.slice(0,-1);
        
      }
      
      
