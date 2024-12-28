<template>
<footer>
    <div class="footer-desktop">
        <div class="footer-left">
        <p>Made with love by</p>
        <p><a href="#">My github</a></p>
    </div>
    <div><p>© 2024 - JacksonFlorez</p></div>
    </div>

    <div class="footer-mobile">
        <div class="footer-left-mobile">
            <p>Made with love by <a href="#">My github</a></p>
        </div>
        <div><p>© 2024 - JacksonFlorez</p></div>
    </div>
</footer>
</template>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

.footer-desktop {
    display: none;
    justify-content: space-evenly;
    background-color: #000000;
    align-items: center;
    height: 10vh;
    color: white;
    font-size: .7rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
}

.footer-mobile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000000;
    align-items: center;
    height: 10vh;
    color: white;
    font-size: .7rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
}

footer .footer-left {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.footer-left p {
    margin: 5px;
}

@media screen and (min-width: 768px) {
    .footer-desktop {
        display: flex;
    }

    .footer-mobile {
        display: none;
    }
}
</style>