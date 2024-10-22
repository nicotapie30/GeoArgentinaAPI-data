
class MyCarousel extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });


        const article = document.createElement('article');
        article.classList.add('article__carousel');


        const divContainer = document.createElement('div');
        divContainer.classList.add('carousel__container');
        divContainer.innerHTML = `  <div class="carousel">
                                        <img src="/public/imgs/buenosaires.webp" alt="Buenos-Aires" title="Buenos Aires">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/catamarca.webp" alt="Catamarca" title="Catamarca">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/chaco.webp" alt="Chaco" title="Chaco">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/chubut.webp" alt="Chubut" title="Chubut">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/cordoba.webp" alt="Córdoba" title="Córdoba">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/corrientes.webp" alt="Corrientes" title="Corrientes">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/entre-rios.webp" alt="Entre Ríos" title="Entre Ríos">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/formosa.webp" alt="Formosa" title="Formosa">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/jujuy.webp" alt="Jujuy" title="Jujuy">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/la-rioja.webp" alt="La Rioja" title="La Rioja">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/la-pampa.webp" alt="La Pampa" title="La Pampa">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/mendoza.webp" alt="Mendoza" title="Mendoza">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/misiones.webp" alt="Misiones" title="Misiones">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/neuquen.webp" alt="Neuquen" title="Neuquen">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/rio-negro.webp" alt="Río Negro" title="Río Negro">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/salta.webp" alt="Salta" title="Salta">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/san-luis.webp" alt="San Luis" title="San Luis">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/san-juan.webp" alt="San Juan" title="San Juan">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santa-fe.webp" alt="Santa Fe" title="Santa Fe">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santa-cruz.webp" alt="Santa Cruz" title="Santa Cruz">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santiago-del-estero.webp" alt="Santiago del Estero" title="Santiago del Estero">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/tierra-del-fuego.webp" alt="Tierra del Fuego" title="Tierra del Fuego">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/tucuman.webp" alt="Tucuman" title="Tucman">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/buenosaires.webp" alt="Buenos-Aires" title="Buenos Aires">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/catamarca.webp" alt="Catamarca" title="Catamarca">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/chaco.webp" alt="Chaco" title="Chaco">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/chubut.webp" alt="Chubut" title="Chubut">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/cordoba.webp" alt="Córdoba" title="Córdoba">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/corrientes.webp" alt="Corrientes" title="Corrientes">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/entre-rios.webp" alt="Entre Ríos" title="Entre Ríos">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/formosa.webp" alt="Formosa" title="Formosa">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/jujuy.webp" alt="Jujuy" title="Jujuy">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/la-rioja.webp" alt="La Rioja" title="La Rioja">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/lapampa.webp" alt="La Pampa" title="La Pampa">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/mendoza.webp" alt="Mendoza" title="Mendoza">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/misiones.webp" alt="Misiones" title="Misiones">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/neuquen.webp" alt="Neuquen" title="Neuquen">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/rionegro.webp" alt="Río Negro" title="Río Negro">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/salta.webp" alt="Salta" title="Salta">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/san-luis.webp" alt="San Luis" title="San Luis">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/sanjuan.webp" alt="San Juan" title="San Juan">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santa-fe.webp" alt="Santa Fe" title="Santa Fe">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santacruz.webp" alt="Santa Cruz" title="Santa Cruz">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/santiago-del-estero.webp" alt="Santiago del Estero" title="Santiago del Estero">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/tierradelfuego.webp" alt="Tierra del Fuego" title="Tierra del Fuego">
                                    </div>
                                    <div class="carousel">
                                        <img src="/public/imgs/tucuman.webp" alt="Tucuman" title="Tucuman">
                                    </div>`


        article.appendChild(divContainer);

        shadow.innerHTML = `
                        <style>

                            .article__carousel {
                                width: 100%;
                                height: auto;
                                margin: 0 -2rem;
                                overflow: hidden;
                            }


                            .carousel__container {
                                width: calc(10rem * 46);
                                margin-top: 5rem;
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
