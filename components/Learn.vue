<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="w-[700px] ml-52 pl-5 py-4 mt-10 border">
        <h1 class="text-[20pt] font-extrabold">What you'll learn</h1>

        <div class="grid grid-cols-2 gap-6 text-[11pt] pt-3">
            <div class="flex gap-3 flex-col">
                <div class="flex gap-2 items-start">
                    <Icon icon="material-symbols:check-rounded" width="20" />
                    <h2>An Overview of the Product Manager's Role and Who They Partner With</h2>
                </div>
                <div class="flex   gap-2 items-start">
                    <Icon icon="material-symbols:check-rounded" width="20" />
                    <h2>A Deep Dive into Each Phase of the Product Management Life Cycle</h2>
                </div>




            </div>
            <div class="flex gap-3 flex-col">
                <div class="flex gap-2  text-[10pt] items-start">
                    <Icon icon="material-symbols:check-rounded" width="20" />
                    <h2>How to Build Products that Deliver Customer and Business Valu </h2>
                </div>
                <div class="flex gap-2 items-start ">
                    <Icon icon="material-symbols:check-rounded" width="20" />
                    <h2>Common Challenges in Product Management And How to Overcome Them </h2>
                </div>

            </div>
        </div>
    </div>
</template>