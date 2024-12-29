<template>
  <div v-if="main">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./img/carousel-theme1.jpg" class="d-block w-100" alt="...">

        <div class="carousel-caption d-none d-md-block">
        <h5>Travel with</h5>
        <p>a trusted friend, travel with TravelTaste</p>
      </div>
      </div>
      <div class="carousel-item">
        <img src="./img/carousel-theme2.jpg" class="d-block w-100" alt="...">

        <div class="carousel-caption d-none d-md-block">
        <h5>Enjoy</h5>
        <p>And let TravelTaste find your perfect spot</p>
      </div>
      </div>
      <div class="carousel-item">
        <img src="./img/carousel-theme3.jpg" class="d-block w-100" alt="...">

        <div class="carousel-caption d-none d-md-block">
        <h5>Prices for</h5>
        <p>Hotels, restaurants, tours and more here at TravelTaste!</p>
      </div>
      </div>

      <div class="carousel-item">
        <img src="./img/carousel-theme4.jpg" class="d-block w-100" alt="...">

        <div class="carousel-caption d-none d-md-block">
        <h5>Discover</h5>
        <p>and enjoy new cuisines and cultures from around the world</p>
      </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>

    <div class="container-main">
      <div class="pointerclass"><p v-on:click="tastesSecction()">Search by your tastes </p> </div>
      <span></span>
      <div class="pointerclass"><p @click="TastesRdd()">Touristic places </p></div>
    </div>

  </div>
    


    <div>
      <div v-if="SectionTastes">
        <SectionTastes />
      </div>
    </div>

    <div>
      <div v-if="TastesRd">
        <TastesRd />
      </div>
    </div>

    <AppFooter />
</template>

<script>

  import AppFooter from "./components/AppFooter.vue";
  import SectionTastes from "./components/SectionTastes.vue";
  import TastesRd from "./components/TastesRd.vue";

export default {
  name: 'App',
  components: {
    AppFooter,
    SectionTastes,
    TastesRd
  },

  data() {
    return {
      main: true,
    }
  },

  methods: {
      tastesSecction() {
        this.SectionTastes = !this.SectionTastes;
        this.main = false;
      },

      TastesRdd() {
        this.TastesRd = !this.TastesRd;
        this.main = false;
      }
}
}

</script>

<style>
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #0f0f0f;
}

.carousel-item img {
  height: 70vh;
  filter: brightness(0.3);
  object-fit: cover;
}

.container-main {
  display: flex;
  justify-content: space-evenly;
  color: white;
  margin: 20px;
  font-size: 1rem;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  font-family: "Ysabeau SC", serif;
  font-optical-sizing: auto;
  text-decoration: underline;
  font-weight: weight;
  font-style: normal;
}

.container-main span {
background-color: #3d3d3d;
height: 60px;
width: 2px;
margin-left: 20px;
margin-right: 20px;
}

.pointerclass {
  cursor: pointer;
}
</style>
