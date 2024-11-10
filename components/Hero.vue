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
    <div class=" bg-[#161515] mt-[13px] w-screen text-white flex flex-col gap-7 py-7 pl-44 ">
        <div class="text-[12pt] font-extrabold flex items-center space-x-2 text-violet-1">
            <a href="#">Business</a>
            <Icon icon="mdi:chevron-right" width="16" class="text-white" />
            <a href="#">Business Strategy</a>
            <Icon icon="mdi:chevron-right" width="16" class="text-white" />
            <a href="#">Design Thinking</a>
        </div>

        <div class="flex flex-col justify-center gap-2">
            <h1 class="text-[22pt] font-extrabold w-[50%]">Product Management Masterclass: Become a Product Manager</h1>
            <h2 class=" w-[60%]">
                A Complete Masterclass in Building a Successful Career in Product Management As A Product Manager
            </h2>
        </div>
        <div class="flex flex-col gap-3">
            <div class="flex gap-2 items-center">
                <p class=" text-sm w-24 flex justify-center font-semibold bg-orange-0 text-black">Highest Rated</p>
                <div class="flex items-center font-normal text-[11pt]">
                    <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                    <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                    <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                    <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                    <Icon icon="ri:star-s-fill" class="text-yellow-500" />

                </div>
                <a href="" class="text-[#cecaff] font-extrabold text-[10pt] underline">(12 ratings)</a>
                <p class="text-[10pt] font-extrabold">27 students</p>
            </div>
            <p class="text-[10pt]">Created by <a href=""
                    class="text-[#cecaff]  text-[10pt] underline">DaylightAcademy</a></p>
            <div class="flex space-x-2  font-bold items-center">
                <Icon icon="material-symbols-light:release-alert-rounded" width="18" class="text-white" />
                <p>Last updated 10/2024</p>
                <Icon icon="mynaui:globe" width="18" class="text-white" />
                <p>English</p>
                <Icon icon="ic:outline-keyboard" width="18" class="text-white" />

                <p>  English [Auto], </p>
            </div>
        </div>
    </div>
</template>