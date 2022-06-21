<template>
    <div class="video_block">
        <video
            id="myVid"
            loop
            autoplay
            src="https://www.apple.com/105/media/us/airpods/2021/625e09e3-e26e-49ed-a5ee-6e4eda5d275f/anim/supercut/large_2x.mp4"
        ></video>
        <div class="txt_content">
            <div class="airpod-gen">
                <div class="label-new">New</div>
                <h1>AirPods</h1>
                <p class="subhead">3rd generation</p>
            </div>
            <div class="purchase-gen">
                <div class="label">Buy</div>
                <p>Learn more</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
    window.addEventListener("mouseover", () => {
        document.querySelector("#myVid").play();
    });
});
</script>

<style lang="scss">
.video_block {
    width: 100%;
    position: relative;
    video {
        width: 100%;
        border-radius: 2rem;
    }
    .txt_content {
        position: absolute;
        top: 35%;
        left: 35%;
        text-align: center;
        @include flexcol(8rem 0);
        .airpod-gen {
            @include flexcol(1.5rem 0);
            h1 {
                @include txtheader($black-txt);
            }
        }
        .purchase-gen {
            .label {
                padding: 0.8rem;
                border-radius: 1.5rem;
                width: 4.8rem;
                background: $blue;
                color: $white;
            }
            p {
                color: $blue;
            }
        }
    }
}
</style>
