const URL = "https://cat-fact.herokuapp.com/facts";
let lol = document.querySelector("#fact")

const getdata = async() => {
    console.log("Hello India")
    let response = await fetch(URL);
    // console.log(response);
    let data = await response.json();
    // console.log(data);
    lol.innerHTML = data[0].text;

}
getdata();