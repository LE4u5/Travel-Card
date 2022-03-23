const html = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
*{
    font-family: 'Montserrat', sans-serif;
}

.card-cont{
    box-shadow: 0px 3px 10px rgba(0, 0, 0, .16);
    height: 445px;
    width: 317px;
    border-radius: 6px;
    
    --sm: 10px;
    --md: 18px;
    --lg: 24px;
}
.img-cont{
    background-color: black;
    width: 100%;
    max-height: 180px;
    border-radius: 6px 6px 0px 0px;
    overflow: hidden;
}
.img-box{
    width: 100%;
}
.info-cont{
    padding: 1rem;
}
h2{
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 0;
    margin-top: 0rem;
}
.name-cont{
    display: flex;
    
    align-items: center;
    justify-content: space-between;
}

.svg-sm{
    height: var(--sm);
    width: var(--sm);
}
.svg-md{
    height: var(--md);
    width: var(--md); 
}
.svg-lg{
    height: var(--lg);
    width: var(--lg); 
    
}
.rating-cont{
    display: flex;
    align-items: center;
}
.rating-cont p{
    font-size: 9px;
    margin-left: 1rem;
    color: grey;
}
.star{
    padding: 0rem .1rem;
}
.address-cont{
    display: flex;
    margin-top: 1rem;
}
.address-cont p{
    font-size: 10px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 1rem;
}
.phone-cont{
    display: flex;
    margin-top: .8rem;
}
.phone-cont p{
    font-size: 10px;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 1rem;
}

</style>
<div class='card-cont'>
 <div class='img-cont'>
    <img class='img-box' src='' alt='' />
 </div>
 <div class='info-cont'>
    <div class='name-cont'>
        <h2 class='name'></h2>
        <a>
            <svg class='svg-lg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM57.71 192.1L67.07 209.4C75.36 223.9 88.99 234.6 105.1 239.2L162.1 255.7C180.2 260.6 192 276.3 192 294.2V334.1C192 345.1 198.2 355.1 208 359.1C217.8 364.9 224 374.9 224 385.9V424.9C224 440.5 238.9 451.7 253.9 447.4C270.1 442.8 282.5 429.1 286.6 413.7L289.4 402.5C293.6 385.6 304.6 371.1 319.7 362.4L327.8 357.8C342.8 349.3 352 333.4 352 316.1V307.9C352 295.1 346.9 282.9 337.9 273.9L334.1 270.1C325.1 261.1 312.8 255.1 300.1 255.1H256.1C245.9 255.1 234.9 253.1 225.2 247.6L190.7 227.8C186.4 225.4 183.1 221.4 181.6 216.7C178.4 207.1 182.7 196.7 191.7 192.1L197.7 189.2C204.3 185.9 211.9 185.3 218.1 187.7L242.2 195.4C250.3 198.1 259.3 195 264.1 187.9C268.8 180.8 268.3 171.5 262.9 165L249.3 148.8C239.3 136.8 239.4 119.3 249.6 107.5L265.3 89.12C274.1 78.85 275.5 64.16 268.8 52.42L266.4 48.26C262.1 48.09 259.5 48 256 48C163.1 48 84.4 108.9 57.71 192.1L57.71 192.1zM437.6 154.5L412 164.8C396.3 171.1 388.2 188.5 393.5 204.6L410.4 255.3C413.9 265.7 422.4 273.6 433 276.3L462.2 283.5C463.4 274.5 464 265.3 464 256C464 219.2 454.4 184.6 437.6 154.5H437.6z"/>
            </svg>
        </a>
    </div>
    <div class='rating-cont'>
        <svg class="svg-sm star-1 star" fill="lightgrey" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
        <svg class="svg-sm star-2 star" fill="lightgrey" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
        <svg class="svg-sm star-3 star" fill="lightgrey" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
        <svg class="svg-sm star-4 star" fill="lightgrey" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
        <svg class="svg-sm star-5 star" fill="lightgrey" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg>
        <p>3.0</p>
    </div>
    <div class='address-cont'>
        <svg class='svg-md' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/>
        </svg>
        <p></p>
    </div>
    <div class='phone-cont'>
        <svg class='svg-md' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/>
        </svg>
        <p></p>
    </div>
 </div>
</div>

`;

class TravelCardComponent extends HTMLElement {
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = html;
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    render() {
        console.log(parseInt(this.rating));
        if (this.shadow.querySelector('.card-cont')) {
            this.shadow.querySelector('.img-box').src = this.getAttribute('img-src')
            this.shadow.querySelector('.name').innerHTML = this.getAttribute('name')
            this.setRatingStars();
            this.shadow.querySelector('.rating-cont p').innerHTML = `${this.getAttribute('rating')} (${this.getAttribute('reviews')})`;
            this.shadow.querySelector('.address-cont p').innerHTML = this.getAttribute('address');
            this.shadow.querySelector('.phone-cont p').innerHTML = this.getAttribute('phone');
            this.shadow.querySelector('.name-cont a').setAttribute('href',this.getAttribute('website'))
        }
    }
    setRatingStars(){
        let rating = parseInt(this.getAttribute('rating'));

        for(let i = rating; i > 0; i--){
            this.shadow.querySelector(`.star-${i}`).setAttribute('fill','#FFD70F');
        }
    }
    connectedCallback() {
        this.shadow.appendChild(this.template.content.cloneNode(true));
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    disconnectedCallback() {

    }
}

window.customElements.define('travel-card', TravelCardComponent);