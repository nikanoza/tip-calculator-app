const firstform = document.querySelector("#firstform input");
const secondform = document.querySelector("#secondform input");
let bill;
let person;
let total;
let costum;
let personTip;
const percentage = Array.from(document.querySelectorAll(".percentagediv"));
const costumdiv = document.querySelector("#costum input");
const error = document.querySelector(".error")
const changetipamount = document.querySelector(".articlefirstdiv h3");
const totalamount = document.querySelector("#articleseconddiv h3");





for(let i = 0; i < percentage.length; i++){
    let howManyPercent = percentage[i]; 
    howManyPercent.addEventListener("click", ()=>{
        let numpercent = parseInt(howManyPercent.textContent);
        if(firstform.value !== "" && secondform.value !== ""){
            bill =  Number(firstform.value);
            person = Number(secondform.value);
            personTip = bill/person;
            if(person === 0){
                error.style.display = "block";
            }else{
                error.style.display = "none";
                tipAmount = personTip * numpercent / 100;
                total = tipAmount * person;
                changetipamount.textContent =  tipAmount;
                totalamount.textContent = total.toFixed(2);
            }
        }
    })  
} 


costumdiv.addEventListener("input", () =>{
if(firstform.value !== "" && secondform.value !== ""){
    if(Number(costumdiv.value) !== 0 && costumdiv.value !== ""){
            costum = Number(costumdiv.value);
            bill =  Number(firstform.value);
            person = Number(secondform.value);
            personTip = bill/person;
            tipAmount = personTip * costum / 100;
            total = tipAmount * person;
            changetipamount.textContent =  tipAmount;
            totalamount.textContent = total.toFixed(2);
        }
    }
    
})



const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
    firstform.value = "";
    secondform.value = "";
    costumdiv.value = "";
    error.style.display = "none";
    changetipamount.textContent = "0.00";
    totalamount.textContent = "0.00";
});





