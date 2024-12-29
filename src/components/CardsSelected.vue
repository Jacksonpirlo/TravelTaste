<template>
<div class="card-container" v-if="cards">

        <div class="card" style="width: 15rem;">
    <img src="../img/carousel-theme1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a @click="moreInfo()" class="btn btn-dark">Go somewhere</a>
    </div>
</div>

</div>

<div class="card-more">
    <div v-if="moreInformation" class="card-more-info">
        <img src="../img/carousel-theme1.jpg" alt="">
        <h3>Okokokoko</h3>
        <p>More information</p>

        <div class="info-grid">
            <div class="info-item">
                <div class="country cube">
                    <h4>País</h4>
                    <p>Descripción breve del país.</p>
                </div>

                <div class="price-travel cube">
                    <h4>Costo de viaje</h4>
                <p>Avión: $500</p>
                <p>Bus: $100</p>
                </div>

                <div class="hoteles cube">
                    <h4>Hoteles cercanos</h4>
                <p>Hotel 1: $150/noche</p>
                <p>Hotel 2: $120/noche</p>
                </div>
            </div>
            <!-- <div class="info-item">
                <h4>Costo de viaje</h4>
                <p>Avión: $500</p>
                <p>Bus: $100</p>
            </div>
            <div class="info-item">
                <h4>Hoteles cercanos</h4>
                <p>Hotel 1: $150/noche</p>
                <p>Hotel 2: $120/noche</p>
            </div> -->
        </div>
        <a @click="closed" class="btn btn-dark">Cerrar</a>
    </div>
</div>
</template>

<script>
export default {
    name: 'CardsSelected',
    data() {
        return {
            moreInformation: false,
            cards: true
        }
    },

    methods: {
        moreInfo() {
            this.moreInformation = true
            this.cards = false
        },

        closed() {
            this.moreInformation = false
            this.cards = true
        }
    }
}
</script>

<style scoped>
.card-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    padding: 20px;
    background-color: #f5f5f5;
}

.card-container .card {
    margin: 10px;
}

.about-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .about-description {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .card-more {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        background-color: #f5f5f5;
        text-align: center;
        padding: 20px;
    }

    .card-more-info a {
        margin-top: 30px;
    }

    .card-more img {
        width: 100%;
        height: 100%;
    }

    .info-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 15px;
        font-size: .9em;
    }

    .info-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-color: #fff;
        padding: 10px;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .info-item .cube {
        margin: 20px;
        max-width: 50%;
    }

    .info-item h4 {
        margin-bottom: 10px;
        font-size: 1em;
        color: #333;
    }

    .info-item p {
        margin: 5px 0;
        color: #666;
    }
</style>