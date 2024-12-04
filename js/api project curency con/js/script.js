const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("form button");
const from_cur = document.querySelector(".from select");
const to_cur = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for (const select of dropdowns) {
    for (currcode in countryList) {
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        if (select.name === "from" && currcode === "USD") {
            newoption.selected = "selected"
        } else if (select.name === "to" && currcode === "INR") {
            newoption.selected = "selected"
        }
        select.append(newoption);
    }
    select.addEventListener("change", (evt) => {
        updatFlag(evt.target);
    })
}
const updatFlag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateexchangerate();
})
const updateexchangerate = async () => {
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    console.log(amtval);
    if (amtval === "" || amtval < 1) {
        amtval = 1;
        amount.value = "1";
    }
    // console.log(from_cur.value,to_cur.value);
    const URL = `${base_url}/${from_cur.value.toLowerCase()}/${to_cur.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[to_cur.value.toLowerCase()];
    let finalamount = amtval * rate;
    msg.innerText = `${amtval}${from_cur.value}=${finalamount}${to_cur.value}`
    // 1usd = 83inr
}
window.addEventListener("load", () => {
    updateexchangerate();
});