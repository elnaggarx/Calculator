var intervalID;
function fadeOutTransition(){
    document.getElementById("hide").style.opacity=1;
    intervalID = setInterval(function(){
    if(document.getElementById("hide").style.opacity>0){
        document.getElementById("hide").style.opacity-=0.1;
    }
    },50);
    setTimeout(function(){
        clearInterval(intervalID);
        document.getElementById("hide").remove();
        

    },1000);
}
var intervalID2;
document.querySelector(".mainContent").style.opacity = 0;
function fadeInTransition(){
    document.querySelector(".mainContent").removeAttribute("id");
    intervalID2 = setInterval(function (){
        if(document.querySelector(".mainContent").style.opacity<1){
            document.querySelector(".mainContent").style.opacity= +(document.querySelector(".mainContent").style.opacity)+0.1;
        }
        else{
            clearInterval(intervalID2);
        }
    },80)
}

setTimeout(fadeOutTransition , 3000);
setTimeout(fadeInTransition , 3500);


function displayOnScreen(text){
    document.getElementsByClassName("screenText")[0].innerText +=text; 
}
function deleteScreen(){
    document.getElementsByClassName("screenText")[0].innerText= ""; 
}
function preformOperation(){
        for(var i=0;i<document.getElementsByClassName("screenText")[0].innerText.length;i++){
        if(!(document.getElementsByClassName("screenText")[0].innerText[i]>=0 && document.getElementsByClassName("screenText")[0].innerText[i]<=9) && !(document.getElementsByClassName("screenText")[0].innerText[i+1]>=0 && document.getElementsByClassName("screenText")[0].innerText[i+1]<=9 )){
            console.log("1");
            return 0;
        }

    }
    if(!(document.getElementsByClassName("screenText")[0].innerText[0]>=0 && document.getElementsByClassName("screenText")[0].innerText[0]<=9) ){
        console.log("2");

        return 0;
    }
    else if(!(document.getElementsByClassName("screenText")[0].innerText[document.getElementsByClassName("screenText")[0].innerText.length-1]>=0 && document.getElementsByClassName("screenText")[0].innerText[document.getElementsByClassName("screenText")[0].innerText.length-1]<=9 )){
        console.log("3");

        return 0;
    }
    var result = eval(document.getElementsByClassName("screenText")[0].innerText);
    deleteScreen();
    displayOnScreen(result);
    return 1;
}
function detectButton(){
    for(var i=0;i<document.querySelectorAll(".calculatorButtons").length;i++){
        document.querySelectorAll(".calculatorButtons")[i].addEventListener("click" , function(){
            if(this.innerText>=0 && this.innerText<=9){
                displayOnScreen(this.innerText);
            }
            else if(this.innerText == '+' || this.innerText == '-' || this.innerText == '/' || this.innerText == '*'){
                displayOnScreen(this.innerText);
            }
            else if(this.innerText == 'AC'){
                deleteScreen();
            }
            else if(this.innerText == '='){
                if(preformOperation()==1){
                    console.log("successful");
                }
                else{
                    alert("error");
                }
            }
        })
    }
}
function detectKeyDown(){
    document.addEventListener("keydown" , function (event){
        if(event.key>=0 && event.key<=9){
            displayOnScreen(event.key);
        }
        else if(event.key == '+' || event.key == '-' || event.key == '/' || event.key == '*'){
            displayOnScreen(event.key);
        }
        else if(event.key == 'Backspace' || event.key == 'Tab'){
            deleteScreen();
        }
        else if(event.key == '=' || event.key == 'Enter'){
            if(preformOperation()==1){
                console.log("successful");
            }
            else{
                alert("error");
            }
        }
    })
}
detectKeyDown();
detectButton();