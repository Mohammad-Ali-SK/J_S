const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

let i = 0;

for(let select of dropdowns){
    for(code in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if(select.name === "from" && code === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && code === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption)
    }
    select.addEventListener("change", (evt) => {
        undateFlag(evt.target);
    })
};


const undateFlag = (element) => {
    let code = element.value;
    let countreyCode = countryList[code];
    let newSrc = `https://flagsapi.com/${countreyCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

};
