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
        for ( let i = 0; i<this.data.length; i++) {
        const item = this.data[i];
        console.log (item);
        
             HTML +=`<div class="row">
                        <h2 class="main-form-h2">${item.title}</h2>
                        <form action="" class="main-form">
                            <input  type="email" name="main-email" class="email-main" placeholder="Enter your email" id="" required>
                            <div class="progressBar"></div>
                            <input type="submit" value="→" class="main-arrow">
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

export { mainForm };

//WRAP UP
// Objektų klasėje nustatomi pradiniai parametrai.
// Paleidžiamas pradinis proceaas, kuris praeina validacija
// ir paleidžia renderį.

//Patikros:
//elemento būvimas
//duomenų atitikimas
//patikrnti selektorius