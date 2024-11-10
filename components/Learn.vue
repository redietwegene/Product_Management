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
                    <h2>Create irresistibly engaging activities that improve retention </h2>
                </div>
                <div class="flex gap-2 items-start">
                    <Icon icon="material-symbols:check-rounded" width="20" />
                    <h2>Learn how to remix your favorite games for learning</h2>
                </div>

                <div class="flex gap-2 items-start">
                    <Icon icon="material-symbols:check-rounded" width="20" />
                    <h2>Learn 25+ game mechanics</h2>
                </div>
            </div>
            <div class="flex gap-3 flex-col">
                <div class="flex gap-2  text-[10pt] items-start">
                    <Icon icon="material-symbols:check-rounded" width="20" />
                    <h2>See how we've creating learning games for some of the world's </h2>
                </div>
                <div class="flex gap-2 items-start">
                    <Icon icon="material-symbols:check-rounded" width="20" />
                    <h2>Learn how to remix your favorite games for learning</h2>
                </div>
            </div>
        </div>
    </div>
</template>