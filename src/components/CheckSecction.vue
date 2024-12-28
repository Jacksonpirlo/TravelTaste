<template>
    <div class="tastes-teme  Adventure_&_Activities">
        <div class="check-filter">
            <!-- ELIMINAR UNA VEZ HECHO EL BACKEND -->
            <div>
                <input type="checkbox" id="check1" name="check1" value="check1">
                <label for="check1">Beaches</label>
            </div>
            <div>
                <input type="checkbox" id="check2" name="check2" value="check2">
                <label for="check2">Mountains</label>
            </div>
            <div>
                <input type="checkbox" id="check3" name="check3" value="check3">
                <label for="check3"></label>
            </div>
            <div>
                <input type="checkbox" id="check4" name="check4" value="check4">
                <label for="check4">Check 4</label>
            </div>
            <div>
                <input type="checkbox" id="check5" name="check5" value="check5">
                <label for="check5">Check 5</label>
            </div>
            <div>
                <input type="checkbox" id="check6" name="check6" value="check6">
                <label for="check6">Check 6</label>
            </div>
            <div>
                <input type="checkbox" id="check7" name="check7" value="check7">
                <label for="check7">Check 7</label>
            </div>
            <div>
                <input type="checkbox" id="check8" name="check8" value="check8">
                <label for="check8">Check 8</label>
            </div>
            <div>
                <input type="checkbox" id="check9" name="check9" value="check9">
                <label for="check9">Check 9</label>
            </div>
            <div>
                <input type="checkbox" id="check10" name="check10" value="check10">
                <label for="check10">Check 10</label>
            </div>
            <div>
                <input type="checkbox" id="check11" name="check11" value="check11">
                <label for="check11">Check 11</label>
            </div>
            <!-- ELIMINAR UNA VEZ HECHO EL BACKEND -->
    </div>

    <div class="check-selected">
        <p>Selected:</p>

        <CardsSelected />

    </div>
</div>


</template>

<script>
import CardsSelected from './CardsSelected.vue';

export default {
    name: 'CheckSecction',
    components: {
        CardsSelected
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.tastes-teme {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        height: 100%;
        padding: 20px;
        background-color: #f5f5f5;
    }

    .check-filter {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 80%;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .check-filter div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        margin: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .check-filter div input {
        display: none;
    }

    .check-filter div label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: .7rem;
        font-weight: bold;
        color: #333;
        background-color: #f5f5f5;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s;
    }

    .check-filter div input:checked + label {
        background-color: #333;
        color: white;
    }

    .check-selected {
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
    }

    .check-selected p {
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
        margin-top: 20px;
        margin-bottom: 20px;
    }

</style>