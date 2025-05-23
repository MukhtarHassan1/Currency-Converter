const BASE_URL="https://api.currencyapi.com/v3/latest?apikey=cur_live_R7PtG0Q4LtosFdF670JzAskQA2gy9zYg9tQkBVCJ";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

for(let i of dropdowns)
{
    for(let code in countryList)
        {
            let newOption=document.createElement("option");
            newOption.innerText=code;
            newOption.value=code;
            if(i.name=="from"&&code=="USD"){
                newOption.selected="selected";
            }
            else if(i.name=="to"&&code=="PKR"){
                newOption.selected="selected";
            }
            i.append(newOption);
        }
        i.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        })
}

const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = 1;
    }

    const URL = `${BASE_URL}&base_currency=${fromCurr.value}&currencies=${toCurr.value}`;
    
    try {
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data.data[toCurr.value].value;
        let finalAmount = (amtVal * rate).toFixed(2);
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        msg.innerText = "Something went wrong. Please check API key or connection.";
        console.error("Error fetching currency data:", error);
    }
})

