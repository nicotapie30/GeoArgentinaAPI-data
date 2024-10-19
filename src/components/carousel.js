
class MyCarousel extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });


        const article = document.createElement('article');
        article.classList.add('article__carousel');


        const divContainer = document.createElement('div');
        divContainer.classList.add('carousel__container');
        divContainer.innerHTML = `  <div class="carousel">
                                        <img src="/public/imgs/buenosaires.png" alt="Buenos-Aires">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/catamarca.png" alt="Catamarca">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/chaco.png" alt="Chaco">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/chubut.png" alt="Chubut">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/cordoba.png" alt="Córdoba">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/corrientes.png" alt="Corrientes">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/entre-rios.png" alt="Entre Ríos">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/formosa.png" alt="Formosa">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/jujuy.png" alt="Jujuy">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/la-rioja.png" alt="La Rioja">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/lapampa.png" alt="La Pampa">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/mendoza.png" alt="Mendoza">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/misiones.png" alt="Misiones">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/neuquen.png" alt="Neuquen">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/rionegro.png" alt="Río Negro">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/salta.png" alt="Salta">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/san-luis.png" alt="San Luis">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/sanjuan.png" alt="San Juan">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santa-fe.png" alt="Santa Fe">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santacruz.png" alt="Santa Cruz">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santiago-del-estero.png" alt="Santiago del Estero">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/tierradelfuego.png" alt="Tierra del Fuego">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/tucuman.png" alt="Tucuman">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/buenosaires.png" alt="Buenos-Aires">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/catamarca.png" alt="Catamarca">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/chaco.png" alt="Chaco">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/chubut.png" alt="Chubut">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/cordoba.png" alt="Córdoba">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/corrientes.png" alt="Corrientes">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/entre-rios.png" alt="Entre Ríos">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/formosa.png" alt="Formosa">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/jujuy.png" alt="Jujuy">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/la-rioja.png" alt="La Rioja">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/lapampa.png" alt="La Pampa">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/mendoza.png" alt="Mendoza">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/misiones.png" alt="Misiones">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/neuquen.png" alt="Neuquen">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/rionegro.png" alt="Río Negro">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/salta.png" alt="Salta">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/san-luis.png" alt="San Luis">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/sanjuan.png" alt="San Juan">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santa-fe.png" alt="Santa Fe">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santacruz.png" alt="Santa Cruz">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santiago-del-estero.png" alt="Santiago del Estero">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/tierradelfuego.png" alt="Tierra del Fuego">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/tucuman.png" alt="Tucuman">
                                    </div>`


        article.appendChild(divContainer);

        shadow.innerHTML = `
                        <style>

                            .article__carousel {
                                width: 100%;
                                height: auto;
                                margin: auto;
                                overflow: hidden;
                            }


                            .carousel__container {
                                width: calc(10rem * 46);
                                margin-top: 4rem;
                                display: flex;
                                align-items: center;
                                gap: 5rem;
                                overflow: hidden;
                                animation: scroll 100s linear infinite;
                            }


                            .carousel {
                                width: 10rem;
                                height: 10rem
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            }


                            img {
                                width: 100%;
                                height: 100%;
                                filter: drop-shadow(0px 0px 2px #000)
                            }


                            @keyframes scroll {
                                0% {
                                    transform: translateX(0);
                                }
                                100% {
                                    transform: translateX(calc(-10rem * 23));
                                }
                            }

                        </style>`

        shadow.appendChild(article);
    };
};

customElements.define('my-carousel', MyCarousel);
