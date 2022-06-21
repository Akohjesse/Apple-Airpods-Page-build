<script setup>
import Header from "./components/header.vue";
</script>

<template>
    <Header />
    <div class="child_wrap">
        <div class="chapternav">
            <div class="items">
                <img src="./assets/airpods2.svg" alt="" />
                <span>AirPods <br> 2nd Generation</span>
            </div>
            <div class="items">
                <img src="./assets/airpods3.svg" alt="" />
                <span>AirPods <br> 3rd Generation <br></span>
                <span class="new">New</span>
            </div>
            <div class="items">
                <img src="./assets/airpodspro.svg" alt="" />
                <span>AirPods Pro</span>
            </div>
            <div class="items">
                <img src="./assets/airpodsmax.svg" alt="" />
                <span>AirPods Max</span>
            </div>
            <div class="items">
                <img src="./assets/compare_light.svg" alt="" />
                <span>Compare</span>
            </div>
            <div class="items">
                <img src="./assets/apple_music_light.svg" alt="" />
                <span>Apple Music</span>
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
        padding: 8px 0px;
        @include flex(center, flex-start, 2.5rem);
        .items{
            span{
                padding-top: .3rem;
                color: $black-txt;
                font-size: $font-sm;
                display: block;
            }
        }
    }
}
</style>
