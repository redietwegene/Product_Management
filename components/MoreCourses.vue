<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";
</script>

<template>
    <div class="w-[700px] ml-44 py-4 mt-10 font-Zeitung ">


        <div class="border-b-[1.3px] pb-10">
            <h1 class="text-[17pt] mb-3 font-extrabold">
                More Courses by
                <strong class="text-[#6447cf] font-extrabold"> Laura Pickel</strong>
            </h1>
            <div class="flex">
                <div class="w-64">
                    <img src="/images/download.jpg" class="h-30 w-60" />
                    <h1 class="font-extrabold text-[13pt]">

                        ChatGPT for Marketing: Boost Your Content...
                    </h1>

                    <p class="text-[10pt] text-[#747373]">DaylightAcademy</p>
                    <div class="flex items-center font-normal text-[11pt]">
                        <span class="font-extrabold">4.4</span>
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <span class="text-[11pt] text-[#747373]">(180)</span>
                    </div>
                    <p class="text-[10pt] text-[#747373]">1.5 total hours . 9 lectures .All level</p>

                    <h1 class="font-extrabold text-[15pt]">$39.99</h1>
                </div>
                <div class="w-64">
                    <img src="/images/download.jpg" class="h-30 w-60" />
                    <h1 class="font-extrabold text-[13pt]">
                        Python Programming for Beginners :Learn python in ...
                    </h1>

                    <p class="text-[10pt] text-[#747373]">DaylightAcademy</p>
                    <div class="flex items-center font-normal text-[11pt]">
                        <span class="font-extrabold">4.9</span>
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <span class="text-[11pt] text-[#747373]">(53,724)</span>
                    </div>
                    <p class="text-[10pt] text-[#747373]">3 total hours . 19 lectures .Beginner</p>

                    <h1 class="font-extrabold text-[15pt]">$59.99</h1>
                </div>
                <div class="w-64">
                    <img src="/images/download.jpg" class="h-30 w-60" />
                    <h1 class="font-extrabold text-[13pt]">
                        Microsoft Excel :Microsoft Excel for Data Analaysis
                    </h1>

                    <p class="text-[10pt] text-[#747373]">DaylightAcademy</p>
                    <div class="flex items-center font-normal text-[11pt]">
                        <span class="font-extrabold">4.4</span>
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                        <span class="text-[11pt] text-[#747373]">(76)</span>
                    </div>
                    <p class="text-[10pt] text-[#747373]">2 total hours . 12 lectures .All Levels</p>

                    <h1 class="font-extrabold text-[15pt]">$49.99</h1>
                </div>
            </div>
        </div>
        <button class="border-[1.2px] border-black mt-5 w-full p-[7px] font-bold"> Report Abuse</button>
    </div>
</template>