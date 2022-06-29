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
                    <img src="./assets/airpods_max_large_2x.png" alt="" />
                </div>
                <div class="purchase-gen ta_center">
                    <div class="label col-white">Buy</div>
                    <p class="col-blue">Learn more</p>
                </div>
            </div>
        </div>
        <div class="airpods-2 airpods-item">
            <div class="image-backdrop">
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
        <h1>
            A magical connection to <br />
            your devices.
        </h1>
        <div class="section-connection">
            <div class="tile-connection">
                <div class="img">
                    <img src="./assets/tile_1.jpeg" alt="" />
                </div>
                <div class="tile-header">
                    <h3>One-tap setup</h3>
                </div>
            </div>
            <div class="tile-connection">
                <div class="img">
                    <img src="./assets/tile_2.jpeg" alt="" />
                </div>
                <div class="tile-header">
                 <h3>One-tap setup</h3>
                </div>
            </div>
            <div class="tile-connection">
                <div class="img">
                    <img src="./assets/tile_3.jpeg" alt="" />
                </div>
                <div class="tile-header">
 <h3>Audio Sharing</h3>
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
        position: relative;
    }
    .airpods-pro {
        background: black;
        width: 100%;
        .image-backdrop {
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
    h1 {
        font-size: 62px;
        color: $black-txt;
        font-weight: 700;
        line-height: 4rem;
    }
    .section-connection {
        @include flex(center, center, 0 1.5em);
        .tile-connection {
            width: 27%;
            border-radius: 25px;
            background: white;
            height: 484px;
             @include flex(center, center,0 );
             &:nth-child(1){
                display: block;
                .img{
                     margin-left: 20px !important;
                }
            }
           .img{
            width: 90%;
             img {
                width: 100%;
            }
           }
           .tile-header{
            display: none;
            h3{
                font-size: 2em;
            }
           }
        }
    }
}
</style>
