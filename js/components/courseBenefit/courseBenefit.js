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
             
             HTML +=`<div class="course-benefit-child">
             <div class="course-benefit-left">
             <div>${item.ikonele}</div>
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

const cBcolors = () => {
    const backgroundColor = document.querySelector(".course-benefit-left");
    for (let i = 0; i<backgroundColor.length; i++) {
        backgroundColor[i].style.color = courseBenefitArray[i].spalva;
    }
}
const h2color = () => {
const h2 = document.getElementsByTagName("h2");
for (let i = 0; i<h2.length; i++) {
    h2[i].style.color = "red";
    h2[i].style.fontSize = "2rem";
    }
}

export { courseBenefit, cBcolors, h2color };