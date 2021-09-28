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
        console.log (HTML);
        //const DOM = document.querySelector(this.selector);
        this.DOM.innerHTML += HTML;
    }
}

export { mainForm };