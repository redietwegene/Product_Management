<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="bg-[#2e2c2c] h-[80vh] w-screen text-white">
        <div class="flex justify-between mr-12 ml-16 mt-5 pt-6">
            <div>
                <p>
                    Teach the World online
                </p>
                <p>Create an online video courses .reach students across the globe .and earn money</p>

            </div>

            <div>
                <button class="border-white border-[1.2px] p-3 m-5 ml-3">Teach on udemy</button>
            </div>

        </div>
        <div class="border-[0.54px] border-[#7b7b7b] w-screen"></div>
        <div class="w-full flex gap-10 h-[20%] justify-between items-center px-16 py-5">
            <h1 class="font-extrabold">
                Top companies choose
                <strong class="text-[#c0b6d6] text-[15pt]"> Udemy Business </strong>to
                build in-demand career skills.
            </h1>

        </div>
        <div class="border-[0.54px] border-[#7b7b7b] w-screen"></div>
        <div class="flex justify-between px-16 py-5 ">
            <div class="flex gap-40 text-[10pt]">
                <div class="flex flex-col gap-2">
                    <a>Udemy Business</a>
                    <a>Teach on Udemy</a>
                    <a>Get the app</a>
                    <a> About us</a>
                    <a>Contact us</a>
                </div>
                <div class="flex flex-col gap-2">
                    <a>Careers</a>
                    <a>Blog</a>
                    <a>Help and Support</a>
                    <a>Affiliate</a>
                    <a>Inverstors</a>
                </div>
                <div class="flex flex-col gap-2">
                    <a>Terms</a>
                    <a>Privacy Policy</a>
                    <a>Cookie Settings</a>
                    <a> Sitemap</a>
                    <a>Accessibility statement</a>
                </div>
            </div>
            <div></div>
            <button class="px-[12px] border-[1.3px] h-10 flex  py-[11px] border-white">
                <Icon icon="solar:global-linear" width="20"></Icon> English
            </button>
        </div>
        <div class="flex justify-between px-16 py-5 mt-9 ">
            <img src="/images/udemy.jpg" class="w-[91px] h-[34px]" alt="Logo" />
            <p class="text-[10pt]">© 2024 Udemy, Inc.</p>
        </div>
    </div>
</template>