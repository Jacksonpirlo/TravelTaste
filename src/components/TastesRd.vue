<template>
    <NavbarSection />
    <div class="card-container">

        <div class="card" style="width: 15rem;">
    <img src="../img/carousel-theme1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a @click="moreInfo()" class="btn btn-dark">Go somewhere</a>
    </div>
</div>

<div class="card" style="width: 15rem;">
    <img src="../img/carousel-theme1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a @click="moreInfo()" class="btn btn-dark">Go somewhere</a>
    </div>
</div>

<div class="card" style="width: 15rem;">
    <img src="../img/carousel-theme1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a @click="moreInfo()" class="btn btn-dark">Go somewhere</a>
    </div>
</div>

<div class="card" style="width: 15rem;">
    <img src="../img/carousel-theme1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a @click="moreInfo()" class="btn btn-dark">Go somewhere</a>
    </div>
</div>

<div class="card" style="width: 15rem;">
    <img src="../img/carousel-theme1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a @click="moreInfo()" class="btn btn-dark">Go somewhere</a>
    </div>
</div>

<div class="card" style="width: 15rem;">
    <img src="../img/carousel-theme1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a @click="moreInfo()" class="btn btn-dark">Go somewhere</a>
    </div>
</div>

<div class="card" style="width: 15rem;">
    <img src="../img/carousel-theme1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a @click="moreInfo()" class="btn btn-dark">Go somewhere</a>
    </div>
</div>

    </div>
</template>

<script>
import NavbarSection from './NavbarSecction.vue';
    export default {
        name: 'TastesRd',
        components: {
            NavbarSection,
        }
    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

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
    padding: 10px;
}

</style>