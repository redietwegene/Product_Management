<script setup>
import { Icon } from "@iconify/vue";

</script>

<template>
    <div class="w-[800px] ml-44 py-4 mt-10 font-Zeitung flex flex-col gap-2">
        <h1 class="text-[17pt] font-extrabold">Instructor</h1>
        <div>
            <a href="" class="text-[#4c26b4] font-extrabold text-[14pt] underline">
                Laura Pickel</a>
            <p class="text-[13pt] text-slate-700">
                Learning Experience Designer at Lyft
            </p>
        </div>
        <div class="flex gap-5 mt-2">
            <img src="/images/course3.png" class="h-28 w-28" />
            <div class="flex flex-col gap-2 ">
                <div class="flex items-center gap-3">
                    <Icon icon="ri:star-s-fill" />
                    <p>4.4 Instructor Rating</p>
                </div>
                <div class="flex items-center gap-3">
                    <Icon icon="iconamoon:certificate-badge-fill"></Icon>
                    <p>54,719 Reviews</p>
                </div>
                <div class="flex items-center gap-3">
                    <Icon icon="material-symbols:person-rounded"></Icon>
                    <p>109,491 Students</p>
                </div>
                <div class="flex items-center gap-3">
                    <Icon icon="material-symbols:play-circle"></Icon>
                    <p>3 Courses</p>
                </div>
            </div>
        </div>
        <div>
            <em>3 parts design nerd, 4 parts passionate educator, 2 parts biker extraordinaire</em>
            
            
        </div>
    </div>
</template>