<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <header class="w-screen h-[60px] fixed top-0 left-0 z-50 flex justify-center pl-3 py-1 font-Montserrat bg-black
        text-white flex-col">
        <h1 class="font-bold"> Product Management Masterclass: Become a Product Manager</h1>
        <div class="flex flex-col gap-3">
            <div class="flex gap-2 items-center">
                <p class=" text-sm w-24 flex justify-center font-semibold bg-orange-0 text-black">Highest Rated</p>
                <div class="flex items-center font-normal text-[11pt]">
                    <Icon icon="ri:star-s-fill" class="text-yellow-500" />


                </div>
                <a href="" class="text-[#cecaff] font-extrabold text-[10pt] underline">(12 ratings)</a>
                <p class="text-[10pt] font-extrabold">27 students</p>
            </div>
            </div>


    </header>
</template>