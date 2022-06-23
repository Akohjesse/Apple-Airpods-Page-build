<script setup>
import Header from "./components/header.vue";
import airpods3 from "./components/airpods3.vue";
</script>

<template>
    <Header />
    <div class="chapternav">
        <div class="items">
            <img src="./assets/airpods2.svg" alt="" />
            <span
                >AirPods <br />
                2nd Generation</span
            >
        </div>
        <div class="items">
            <img src="./assets/airpods3.svg" alt="" />
            <span
                >AirPods <br />
                3rd Generation <br
            /></span>
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
    <div class="child_wrap airpods-section">
        <airpods-3 />
        <div class="airpods-pro airpods-item">
            <div class="image-backdrop">
                <div class="img">
                    <img src="./assets/airpods_pro_left_large.png" alt="" />
                </div>
                <div class="img">
                    <img src="./assets/airpods_pro_right_2x.png" alt="" />
                </div>
            </div>
            <div class="txt_content">
                <h1>AirPods Pro</h1>
                <div class="purchase-gen">
                    <div class="label">Buy</div>
                    <p>Learn more</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.chapternav {
    text-align: center;
    padding: 8px 0px;
    @include flex(center, flex-start, 2.5rem);
    .items {
        span {
            padding-top: 0.3rem;
            color: $black-txt;
            font-size: $font-sm;
            display: block;
        }
    }
}
.airpods-section {
    padding: 2rem 0;
    @include flexcol(2rem 0);
    .airpods-item {
        border-radius: 1.5rem;
        padding: 2.5rem 0;
    }
    .airpods-pro {
        background: black;
        width: 100%;
        .image-backdrop {
            @include flex(center, center, 0 3rem);
            .img {
                width: 31%;
                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>
