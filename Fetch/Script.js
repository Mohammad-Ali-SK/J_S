const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// console.log(BASE_URL
const dropDown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
// const img = document.querySelectorAll(".dropdown .img");
for(let select of dropDown){
   for(code in countryList){
    let newOption = document.createElement("option");
    newOption.value = code;
    newOption.innerText = code;
    
    if(select.name === "from" && code === "USD"){
        newOption.selected = "selected";
    }else if(select.name === "to" && code ===  "INR"){
        newOption.selected = "selected";
    };
    select.append(newOption);
   }
   select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
   })
};

let updateFlag = (element) => {
    let code = element.value;
    let countryCode = countryList[code];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
   let img = element.parentElement.querySelector("img");
   img.src = newSrc;

};

btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === " " || amtVal < 0){
        amtVal = 1;
        amount.value = "1";
    };
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let finalAmount = Number(amtVal * rate).toFixed(2);
    msg.innerText = `${amtVal}${fromCurr.value} = ${finalAmount}${" " + toCurr.value}`
    
    
     
    
});
