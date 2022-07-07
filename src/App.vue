<script setup>
import Header from "./components/header.vue";
import airpods3 from "./components/airpods3.vue";
import LocomotiveScroll from "locomotive-scroll";
import { onMounted, ref } from "@vue/runtime-core";
const pod = ref(null);

onMounted(() => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        lerp: 0.02,
    });

    setTimeout(() => {
        scroll.update();
    }, 1000);

    scroll.on("call", () => {
        setTimeout(() => {
            let namesArray = [2, 3, "Pro", "Max"];
            let i = 0;
            setInterval(() => {
                pod.value = namesArray[i];
                i++;

                if (i >= namesArray.length) {
                    i = 0;
                }
            }, 1500);
        }, 1000);
    });
});
</script>

<template>
    <nullResponsive/>
    <div data-scroll-container class="c-section">
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
        <div class="child_wrap airpods-section" id="fixed">
            <airpods-3 />
            <div class="airpods-pro airpods-item">
                <div class="image-backdrop">
                    <div class="img">
                        <img data-scroll data-scroll-speed="1" src="./assets/airpods_pro_left_large.png" alt="" />
                    </div>
                    <div class="img">
                        <img data-scroll data-scroll-speed="-0.5" src="./assets/airpods_pro_right_2x.png" alt="" />
                    </div>
                </div>
                <div class="txt_content ta_center abs">
                    <h1>AirPods Pro</h1>
                    <div class="purchase-gen">
                        <div class="label">Buy</div>
                        <p class="col-white">Learn more</p>
                    </div>
                </div>
            </div>
            <div class="airpods-max airpods-item">
                <div>
                    <div class="img">
                        <img data-scroll data-scroll-speed="2" data-scroll-delay="1" src="./assets/airpods_max_large_2x.png" alt="" />
                    </div>
                    <div class="purchase-gen ta_center">
                        <div class="label col-white">Buy</div>
                        <p class="col-blue">Learn more</p>
                    </div>
                </div>
            </div>
            <div class="airpods-2 airpods-item">
                <div class="image-backdrop" data-scroll data-scroll-speed="1">
                    <div class="img">
                        <img src="./assets/airpods_2_left_large.png" alt="" />
                    </div>
                    <div class="img">
                        <img src="./assets/airpods_2_right.png" alt="" />
                    </div>
                </div>
                <div class="txt_content ta_center">
                    <div class="airpod-gen">
                        <h1>AirPods</h1>
                        <br />
                        <p class="subhead">2nd generation</p>
                    </div>
                    <div class="purchase-gen">
                        <div class="label col-white">Buy</div>
                        <p class="col-blue">Learn more</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="apple-pods-pros ta_center">
            <h1 class="header-sub">
                A magical connection to <br />
                your devices.
            </h1>
            <div class="section-connection">
                <div class="tile-connection">
                    <div class="img">
                        <img src="./assets/tile_1.jpeg" alt="" />
                    </div>
                </div>
                <div class="tile-connection">
                    <div class="img">
                        <img src="./assets/tile_2.jpeg" alt="" />
                    </div>
                </div>
                <div class="tile-connection">
                    <div class="img">
                        <img src="./assets/tile_3.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="apple-pods-compare ta_center">
            <h1 class="header-sub">
                Which AirPods are <br />
                right for you?
            </h1>
            <div class="compare-section">
                <div data-scroll data-scroll-call="2" data-scroll-speed="9" data-scroll-direction="horizontal">
                    <div class="img">
                        <img src="./assets/a2.png" alt="" />
                    </div>
                    <div class="txt_content">
                        <h2>AirPods</h2>
                        <p class="subhead">2nd generation</p>
                        <br />
                        <div class="purchase-gen">
                            <div class="label col-white">Buy</div>
                            <p class="col-blue">Learn more</p>
                        </div>
                    </div>
                </div>
                <div data-scroll-speed="-14" data-scroll data-scroll-direction="horizontal" data-scroll-call="3">
                    <div class="txt_content">
                        <h2>AirPods</h2>

                        <p class="subhead">3rd generation</p>
                        <br />
                        <div class="purchase-gen">
                            <div class="label col-white">Buy</div>
                            <p class="col-blue">Learn more</p>
                        </div>
                    </div>
                    <div class="img">
                        <img src="./assets/a3.png" alt="" />
                    </div>
                </div>
                <div data-scroll-speed="11" data-scroll data-scroll-direction="horizontal" data-scroll-call="Pro">
                    <div class="img">
                        <img src="./assets/ap.png" alt="" />
                    </div>
                    <div class="txt_content">
                        <h2>AirPods Pro</h2>
                        <br />
                        <div class="purchase-gen">
                            <div class="label col-white">Buy</div>
                            <p class="col-blue">Learn more</p>
                        </div>
                    </div>
                </div>
                <div data-scroll-speed="-10" data-scroll data-scroll-direction="horizontal" data-scroll-call="Max">
                    <div class="txt_content">
                        <h2>AirPods Max</h2>
                        <br />
                        <div class="purchase-gen">
                            <div class="label col-white">Buy</div>
                            <p class="col-blue">Learn more</p>
                        </div>
                    </div>
                    <div class="img">
                        <img src="./assets/am.png" alt="" />
                    </div>
                </div>
            </div>
            <div data-scroll-sticky data-scroll data-scroll-target=".apple-pods-compare" class="trial">
                <h1 data-scroll-speed="-1" data-scroll>AirPods {{ pod }}</h1>
            </div>
        </div>
        <br />
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
        position: relative;
    }
    .airpods-pro {
        background: black;
        width: 100%;
        .image-backdrop {
            z-index: 3;
            @include flex(center, center, 0 3.5rem);
            .img {
                width: 31%;
                img {
                    width: 100%;
                }
            }
        }
        .txt_content {
            top: 37%;
            left: 28%;
            @include flexcol(13rem 0);
            h1 {
                @include txtheader($white);
                letter-spacing: -0.0018em;
                text-shadow: 0 2px 50px rgb(0 0 0 / 48%);
            }
            .label {
                @include label_btn() {
                    background-color: $white;
                }
            }
        }
    }
    .airpods-max {
        z-index: 2;
        background: white;
        background-image: url("./assets/airpods_max_logo_2x.jpeg");
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center 45%;
        > div {
            @include flexcol(3rem);
            justify-content: center;
            align-items: center;
            .img {
                width: 39%;
                img {
                    width: 100%;
                }
            }
            .label {
                @include label_btn() {
                    background: $blue;
                }
            }
        }
    }
    .airpods-2 {
        background: white;
        overflow: hidden;
        min-height: 680px;
        .image-backdrop {
            @include flex(center, center, 0em 8rem);
            position: absolute;
            z-index: 0;
            .img {
                position: relative;
                &:nth-child(1) {
                    width: 26%;
                    top: 0rem;
                }
                &:nth-child(2) {
                    top: 15rem;
                    width: 24%;
                }
                img {
                    width: 100%;
                }
            }
        }
        .txt_content {
            z-index: 14;
            position: relative;
            top: 200px;
            @include flexcol(10rem 0);
            align-items: center;
            justify-content: center;
            h1 {
                @include txtheader($black-txt);
                letter-spacing: -0.0018em;
            }

            .label {
                @include label_btn() {
                    background: $blue;
                }
            }
        }
    }
}
.apple-pods-pros {
    padding: 7rem 0px;
    @include flexcol(3rem);
    .section-connection {
        @include flex(center, center, 0 1.5em);
        .tile-connection {
            width: 27%;
            border-radius: 25px;
            background: white;
            height: 484px;
            @include flex(center, center, 0);
            &:nth-child(1) {
                display: block;
                .img {
                    margin-left: 20px !important;
                }
            }
            .img {
                width: 90%;
                img {
                    width: 100%;
                }
            }
        }
    }
}
.apple-pods-compare {
    padding: 7rem 0px;
    position: relative;
    @include flexcol(7rem);
    .trial {
        position: absolute;
        top: 10%;
        z-index: -10;
        text-align: center;
        left: 15%;
        h1 {
            font-size: 12em;
            color: white;
            text-shadow: 0 2px 20px rgb(235, 235, 235);
            text-shadow: -10px 7px 0px #d3d3d4;
        }
    }
    .compare-section {
        @include flexcol(5rem);
        > div {
            @include flex(center, center, 0 5rem);
            .txt_content {
                h2 {
                    color: $black-txt;
                    font-size: 3em;
                }
                p {
                    font-size: 1em;
                }
                .label {
                    @include label_btn() {
                        background: $blue;
                    }
                }
            }
        }
    }
}
</style>
