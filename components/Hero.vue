<script setup>
import { Icon } from "@iconify/vue";
import addToCart from "./AddToCart.vue";
const isScrolled = ref(false);

const handleScroll = () => {
    if (window.scrollY > 0) {
        isScrolled.value = true;
    } else {
        isScrolled.value = false;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <div :class="{
        'fixed top-[20px]': isScrolled,
        'fixed top-[110px]': !isScrolled
    }" class="right-[80px] z-50 w-[28%] h-screen bg-white transition-all">

        <div>
            <AddToCart />
        </div>
    </div>
    <div class=" bg-[#161515] mt-[15px] w-screen text-white flex flex-col gap-7 py-7 pl-20 font-Zeitung">
        <div class="text-[10pt] font-extrabold flex items-center space-x-2 text-[#d2cff6]">
            <a href="#">Business</a>
            <Icon icon="mdi:chevron-right" width="16" class="text-white" />
            <a href="#">Business Strategy</a>
            <Icon icon="mdi:chevron-right" width="16" class="text-white" />
            <a href="#">Design Thinking</a>
        </div>

        <div class="flex flex-col justify-center gap-2">
            <h1 class="text-[22pt] font-extrabold w-[50%]">Design Thinking for Beginners: Develop Innovative Ideas</h1>
            <h2 class="font-extrabold w-[60%]">
                Apply the five-step design thinking process to identify and creatively
                solve problems using a human-centered approach.
            </h2>
        </div>
        <div class="flex flex-col gap-3">
            <div class="flex gap-2 items-center">
                <img src="/images/stars.jpg" alt="stars" class="h-[15px]" />
                <a href="" class="text-[#cecaff] font-extrabold text-[10pt] underline">(53,724 ratings)</a>
                <p class="text-[10pt] font-extrabold">105,243 students</p>
            </div>
            <p class="text-[10pt]">Created by <a href=""
                    class="text-[#cecaff] font-extrabold text-[10pt] underline">Laura Pickel</a></p>
            <div class="flex space-x-2  text-[9pt] font-bold items-center">
                <Icon icon="material-symbols-light:release-alert-rounded" width="18" class="text-white" />
                <p>Last updated 1/2021</p>
                <Icon icon="mynaui:globe" width="18" class="text-white" />
                <p>English</p>
                <Icon icon="ic:outline-keyboard" width="18" class="text-white" />

                <p> English [CC], Arabic [Auto], <a href="" class="text-[#cecaff] underline">13 more</a></p>
            </div>
        </div>
    </div>
</template>