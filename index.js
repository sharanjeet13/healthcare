let  doctors = document.querySelectorAll(".team");
let  card = document.querySelectorAll(".card");

let count = 0;

doctors.forEach((card, index)=>{
    card.style.left = `${index * 100}%`
})

const myFun = () =>{
    doctors.forEach((curValue)=>{
        curValue.style.transform=`translateX(-${count * 100}%)`
    })
}



function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    const bmi = weight / (height * height);
    const result = document.getElementById("bmi-result");

    if (!isNaN(bmi) && bmi > 0) {
        result.textContent = `Your BMI is ${bmi.toFixed(2)}: ` +
            (bmi < 18.5 ? "Underweight" : bmi < 24.9 ? "Normal weight" : bmi < 29.9 ? "Overweight" : "Obesity");
    } else {
        result.textContent = "Please enter valid values.";
    }
}




setInterval(()=>{
    count++;
    if(count == doctors.length){
        count=0;
    }
    myFun();
}, 3000);

card.forEach((curCard)=>{
    curCard.addEventListener("click", function(){
        console.log(curCard);
        let div = document.createElement("div");
        div.classList.add("detailCard")
        div.innerHTML=`
        
         <div>
         <i id="icon" class="fa-solid fa-xmark"></i>
         <img src=${curCard.firstElementChild.src} alt="">
         <h2>${curCard.lastElementChild.innerHTML}</h2>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, aspernatur ab consequatur, omnis officiis sint doloremque adipisci blanditiis optio magni, illo aut?</p>
         </div>
        `
        document.querySelector("body").appendChild(div);
        document.getElementById("icon").addEventListener("click", function(){
            div.remove();
        })
    })
})

