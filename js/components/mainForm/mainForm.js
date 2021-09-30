class mainForm {
    constructor (selector, data) {
        console.log ("mainForm Object Go!");
        console.log (data);
        this.selector = selector;
        this.data = data;
        this.init();
    }

    init () {
        if (!this.isValidSelector 
            () || !this.isValidData () || !this.findElement()){
            return false;
        }
        if (!this.findElement()){
            console.log ("KLAIDA - nerastas selektorius")
            return false;
        }
            this.render();
    }

    isValidSelector(){
        if (typeof(this.selector) !== "string"|| this.selector==="") {return false};
        return true;
    }

    isValidData(){
        if (!Array.isArray(this.data) || this.data.length===0 ) {return false};
        return true;
    }

    findElement() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;I
      //return this.DOM ? true : false;
    }
    //Atskirų duomenų tikrinimas, skaičiai ir pavadinimai\:

    //     if (typeof(item)!=="object" || !Array.isArray(item) || item !== null) {
    //         continue;}
    //         else if (typeof(item.label)!=="string"||item.label!=="") {
    //             continue;
    //         }
    //            else if (typeof(item.value)!=="number" || isFinite(item.value)!==true) {
    //                continue;
    //            };

    //Tikrinama, ar objekas neturi per daug raktažodžių:

    // const itemKeys = Object.keys(item);

    // for (const key of itemKeys) {
    //     if (!allowedKeys.includes(key)) {
    //         return false;
    //     };
    // }

    render () {
        console.log ("Go Away!!!!")
        console.log (this.data)
        let HTML = "";
        for ( let i = 0; i<this.data.length; i++ ) {
        const item = this.data[i];
        console.log (item);
        
             HTML +=`<div class="row">
                        <p class="main-form-p">Pasirinkite sąsajos spalvą: <button class="formButton" id="esamaSpalva">Esama</button><button class="formButton" id="melynaSpalva">Mėlyna</button><button class="formButton" id="juodaSpalva">Juoda</button></p>
                        <h2 class="main-form-h2">${item.title}</h2>
                        <form action="" class="main-form">
                            <input  type="email" name="main-email" id="email-main" placeholder="Enter your email" id="" required>
                            <div class="progressBar"></div>
                            <button class="main-arrow"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>
                        </form>
                    </div>`
        }

        if (HTML==="") {
            console.error("Nėra validžių reikšmių")
            return false;
        }
        console.log (HTML);
        //const DOM = document.querySelector(this.selector);
        this.DOM.innerHTML += HTML;
    }
}
const spalvuFunkcijos = () => {
const esamaSpalva = document.getElementById("esamaSpalva");
const melynaSpalva = document.getElementById("melynaSpalva");
const juodaSpalva = document.getElementById("juodaSpalva");
const mainFormSpalva = document.querySelector("#main-form-div");
const mainEmailSpalva = document.querySelector("#email-main");
const mainArrowSpalva = document.querySelector(".main-arrow");

const melynosSpalvosF = () => {
    mainFormSpalva.style.backgroundColor = "darkblue";
    mainEmailSpalva.style.backgroundColor = "darkblue";
    mainArrowSpalva.style.backgroundColor = "darkblue";
    esamaSpalva.textContent = "Žalia";
    melynaSpalva.textContent = "Esama";
    juodaSpalva.textContent = "Juoda";

};
melynaSpalva.addEventListener("click", melynosSpalvosF);

const zaliosSpalvosF = () => {
    mainFormSpalva.style.backgroundColor = "var(--system1)";
    mainEmailSpalva.style.backgroundColor = "var(--system1)";
    mainArrowSpalva.style.backgroundColor = "var(--system1)";
    esamaSpalva.textContent = "Esama";
    melynaSpalva.textContent = "Mėlyna";
    juodaSpalva.textContent = "Juoda";
};
esamaSpalva.addEventListener("click", zaliosSpalvosF);

const juodosSpalvosF = () => {
    mainFormSpalva.style.backgroundColor = "black";
    mainEmailSpalva.style.backgroundColor = "black";
    mainArrowSpalva.style.backgroundColor = "black";
    esamaSpalva.textContent = "Žalia";
    melynaSpalva.textContent = "Mėlyna";
    juodaSpalva.textContent = "Esama";
};
juodaSpalva.addEventListener("click", juodosSpalvosF);

const emailInput = document.querySelector("#email-main");
const progressBarAnimation = document.querySelector(".progressBar");
const progressBarF = () => {
    progressBarAnimation.style.animation = "none";
}
emailInput.addEventListener("click", progressBarF);
}

export { mainForm, spalvuFunkcijos };

//WRAP UP
// Objektų klasėje nustatomi pradiniai parametrai.
// Paleidžiamas pradinis proceaas, kuris praeina validacija
// ir paleidžia renderį.

//Patikros:
//elemento būvimas
//duomenų atitikimas
//patikrnti selektorius