const tittle = document.getElementById("tittle");
const desc = document.getElementById("desc");
const submit = document.getElementById("submit");
const main = document.getElementById("main");


const heading = document.getElementsByTagName("h1")[0];

function headingalert() {
    alert("How are you?");
}

heading.addEventListener("click" , headingalert);


const saveNewItems = (event) => {
    event.preventDefault();
    const newItems = {
        tittle: tittle.value,
        desc: desc.value,
    };

    const newItemsHtmlLi = document.createElement("li");
    const newItemsHtmlH3 = document.createElement("h3");
    newItemsHtmlH3.innerHTML = newItems.tittle;
    const newItemsHtmlP = document.createElement("p");
    newItemsHtmlP.innerHTML = newItems.desc;
    newItemsHtmlLi.appendChild(newItemsHtmlH3);
    newItemsHtmlH3.appendChild(newItemsHtmlP);
    main.appendChild(newItemsHtmlLi);



    const sizechangerSmaller = () => {
        newItemsHtmlH3.style.fontSize = "10px";
    }
    const sizechangerMedium = () => {
        newItemsHtmlH3.style.fontSize = "20px";
    }
    const sizechangerBigger = () => {
        newItemsHtmlH3.style.fontSize = "30px";
    }





    const changeItemsHtmlBtnsmaller = document.createElement("button");
    changeItemsHtmlBtnsmaller.innerHTML = "Smaller"
    changeItemsHtmlBtnsmaller.addEventListener("click" , sizechangerSmaller);
    const changeItemsHtmlBtnmedium = document.createElement("button");
    changeItemsHtmlBtnmedium.innerHTML = "Medium"
    changeItemsHtmlBtnmedium.addEventListener("click" , sizechangerMedium);
    const changeItemsHtmlBtnbigger = document.createElement("button");
    changeItemsHtmlBtnbigger.addEventListener("click" , sizechangerBigger);
    changeItemsHtmlBtnbigger.innerHTML = "Bigger"
    const btns = document.createElement("div");
    btns.appendChild(changeItemsHtmlBtnsmaller);
    btns.appendChild(changeItemsHtmlBtnmedium);
    btns.appendChild(changeItemsHtmlBtnbigger);



    main.appendChild(newItemsHtmlLi);
    main.appendChild(btns);



}


submit.addEventListener("click" , saveNewItems)
