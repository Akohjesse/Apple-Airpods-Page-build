<script setup>
import Header from "./components/header.vue";
</script>

<template>
    <Header />
    <div class="child_wrap">
        <div class="chapternav">
            <div class="items">
                <img src="./assets/airpods2.svg" alt="" />
            </div>
            <div class="items">
                <img src="./assets/airpods3.svg" alt="" />
            </div>
            <div class="items">
                <img src="./assets/airpodspro.svg" alt="" />
            </div>
            <div class="items">
                <img src="./assets/airpodsmax.svg" alt="" />
            </div>
            <div class="items">
                <img src="./assets/compare_light.svg" alt="" />
            </div>
            <div class="items">
                <img src="./assets/apple_music_light.svg" alt="" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.child_wrap {
    width: 90%;
    margin: 0 auto;
    .chapternav {
        text-align: center;
        @include flex(center, center, 5rem);
    }
}
</style>
