class courseBenefit {
    constructor (selector, data) {
        this.selector = selector;
        this.data = data;
        this.render();
    }
    render () {
        let HTML = "";
        for ( let i = 0; i<this.data.length; i++) {
             const item = this.data[i];
             console.log (item);

             HTML +=`<div class="course-benefit-main">
             <div class="course-benefit-child">
                 <div class="course-benefit-left">
                     <div> <i class=${item.ikonele} aria-hidden="true"></i></div>
                 </div>
                 <div class="course-benefit-right">
                     <div class="course-benefit-text">
                         <h3>${item.antraste}</h3>
                         <p>${item.tekstas}</p>
                     </div>
                 </div>
             </div>`
        }
        console.log (HTML);
        const DOM = document.querySelector(this.selector);
        DOM.innerHTML += HTML;
    }
}

export { courseBenefit };