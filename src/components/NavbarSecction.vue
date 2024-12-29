<template>

    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"> {{ title }} </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="../App.vue" >Home</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="./SectionTastes.vues">Yours Tastes</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Random Tastes</a>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

</template>

<script>
    export default {
    data() {
    return {
        title: 'TravelTaste'
    } 
}
    }
</script>

<style scoped>
</style>