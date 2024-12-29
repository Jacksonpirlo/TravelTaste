<template>
        <div class="carousel-container">
        <button class="carousel-button prev" @click="prevTheme">
            <i class="bi bi-arrow-left-short"></i>
        </button>
        <div class="carousel-wrapper">
            <div
            class="carousel-track"
            :style="{ transform: `translateX(${translateX}%)` }"
            >
            <div
                v-for="(theme, index) in themes"
                :key="index"
                class="theme-slide"
            >
                <h3>{{ theme.title }}</h3>
                <div v-for="(check, index2) in theme.checks" :key="index2">
                    <input
                    type="checkbox"
                    :id="'check-' + index + '-' + index2"
                    :value="check"
                    :name="'theme-' + index"
                    />
                    <label :for="'check-' + index + '-' + index2">{{ check }}</label>
                </div>

            </div>
            </div>
        </div>

        <button class="carousel-button next" @click="nextTheme" :disabled="currentTheme === themes.length - 1">
            <i class="bi bi-arrow-right-short"></i>
    </button>
        </div>

    <div class="check-selected">
        <p>Selected:</p>

        <CardsSelected />
    </div>
    </template>

<script>
import CardsSelected from './CardsSelected.vue';

export default {
    name: 'CheckSecction',
    components: {
        CardsSelected
    },

        data() {
        return {
            colorCliked: "#0026a3",
        themes: [
            {
            title: "Adventure & Activities",
            checks: ["Hiking", "Surfing", "Skiing", "Diving", "Mountain Biking"],
            },
            {
            title: "Relaxation & Wellness",
            checks: ["Beaches", "Spa", "Yoga", "Meditation", "Hot Springs"],
            },
            {
            title: "Culture & History",
            checks: ["Museums", "Art Galleries", "Festivals", "Historic Sites", "Local Cuisine"],
            },
            {
            title: "City & Urban",
            checks: ["Shopping", "Nightlife", "Live Music", "City Parks", "Art"],
            },
                {
            title: "Scenery & Landscapes",
            checks: ["Mountains", "Forests", "Deserts", "Lakes", "Rivers"],
            },

        ],
        currentTheme: 0,
        translateX: 0,
        };
    },
    methods: {
        prevTheme() {
        if (this.currentTheme > 0) {
            this.currentTheme--;
            this.translateX = this.translateX + 100;
        }
        },
        nextTheme() {
        if (this.currentTheme < this.themes.length - 1) {
            this.currentTheme++;
            this.translateX = this.translateX - 100;
        }
        },

        // cliked() {
        //     this.colorCliked = this.colorCliked.style.color = "#0026a3";
        // }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    .carousel-container {
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    position: relative;
    justify-content: center;
    /* flex-wrap: wrap; */
    }

    .carousel-wrapper {
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
}

    .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width:fit-content;
    }


    .theme-slide {
    flex-shrink: 0;
    width: 100%;
    min-width: 100%;
    padding: 20px;
    box-sizing: border-box;
    color: #fff;
    }

    .carousel-button {
    background: none;
    border: none;
    font-size: 2em;
    cursor: pointer;
    padding: 10px;
    z-index: 10;
    user-select: none;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    }
    .carousel-button:disabled {
            opacity: 0.5;
    }
    .theme-slide div {
        display: flex;
        flex-direction: column;
        padding: 5px;
        flex-direction: row;
            /* flex-wrap: wrap; */
            justify-content: space-between;
    }
    .theme-slide label {
        padding: 5px;
        width: 100%;
            text-align: left;
    }

    .theme-slide input {
        width: 20px;
        height: 20px;
    }

    .check-selected {
        margin-top: 50px;
        padding: 10px;
        background-color: #f0f0f0;
        border-radius: 5px;
        color: #333;
    }

    .check-selected p {
        font-size: 1.5em;
        margin-bottom: 10px;
        text-align: center;
        font-weight: bold;
    }

    /* .theme-slide label:hover {
        color: #0026a3;
    } */

</style>