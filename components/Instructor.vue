<script setup>
import { Icon } from "@iconify/vue";

</script>

<template>
    <div class="w-[800px] ml-44 py-4 mt-10 font-Zeitung flex flex-col gap-2">
        <h1 class="text-[17pt] font-extrabold">Instructor</h1>
        <div>
            <a href="" class="text-[#4c26b4] font-extrabold text-[14pt] underline">
                DaylightAcademy</a>
            <p class="text-[13pt] text-slate-700">
                Top-rated Instructor on Udemy
            </p>
        </div>
        <div class="flex gap-5 mt-2">
            <img src="/images/download.jpg" class="h-28 w-28" />
            <div class="flex flex-col gap-2 ">
                <div class="flex items-center gap-3">
                    <Icon icon="ri:star-s-fill" />
                    <p>4.6 Instructor Rating</p>
                </div>
                <div class="flex items-center gap-3">
                    <Icon icon="iconamoon:certificate-badge-fill"></Icon>
                    <p>344 Reviews</p>
                </div>
                <div class="flex items-center gap-3">
                    <Icon icon="material-symbols:person-rounded"></Icon>
                    <p>956 Students</p>
                </div>
                <div class="flex items-center gap-3">
                    <Icon icon="material-symbols:play-circle"></Icon>
                    <p>6 Courses</p>
                </div>
            </div>
        </div>
        <div>
            <p>Hello there, I am proud to be teaching here on Udemy.
                <br/>

                Feel free to reach out to me if you have any issue with any of my courses that you enroll in. I do
                welcome feedback. My courses are well structured to give you the best outcome you so desire.
                <br/>

                See you on the other side!</p>


        </div>
    </div>
</template>