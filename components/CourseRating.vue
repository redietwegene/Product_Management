<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";
</script>

<template>
    <div class="w-[750px] ml-44 py-4 mt-10 font-Zeitung">
        <div class="flex items-center">
            <Icon icon="ri:star-s-fill" width="24" class="text-yellow-800"></Icon>
            <h1 class="text-[17pt] font-extrabold">5 course rating .12 ratings</h1>
        </div>
        <div class="flex items-center my-5">
            <div class="flex-grow h-px bg-slate-400"></div>
            <span class="mx-2"></span>
            <div class="flex-grow h-px bg-slate-400"></div>
        </div>
        <div>
            <div class="flex flex-wrap gap-4">
                <div class="h-[40vh] w-[48%] p-1 flex flex-col gap-5 border-b-[1px] border-gray-300">
                    <div class="flex gap-4">
                        <div class="bg-black h-11 w-11 p-3 rounded-full"></div>
                        <div>
                            <h1 class="font-extrabold text-[13pt]">David W.</h1>
                            <div class="flex items-center font-normal text-[11pt]">
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <span class="ml-1 font-bold text-[#747272] text-[10pt]">a week ago</span>
                            </div>
                        </div>
                        <div class="ml-auto">
                            <Icon icon="majesticons:dots-vertical" width="25" />
                        </div>
                    </div>
                    <div>
                        <p class="pr-6 text-[13pt]">
                            Before this course, I had no clue about product management or what a product manager really
                            did. Now, I feel like a pro! The way they explained the product management life cycle was so
                            easy to understand.
                        </p>
                    </div>
                    <div class="flex gap-5">
                        <a href="#" class="text-[10pt] font-normal text-[#8f8e8e]">Helpful?</a>
                        <Icon icon="line-md:thumbs-up-filled" width="20"></Icon>
                        <Icon icon="line-md:thumbs-down-filled" width="20"></Icon>
                    </div>
                </div>

                <div class="h-[40vh] w-[48%] p-1 flex flex-col gap-5 border-b-[1px] border-gray-300">
                    <div class="flex gap-4">
                        <div class="bg-black h-11 w-11 p-3 rounded-full"></div>
                        <div>
                            <h1 class="font-extrabold text-[13pt]">Godwin O.</h1>
                            <div class="flex items-center font-normal text-[11pt]">
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <span class="ml-1 font-bold text-[#747272] text-[10pt]">3 week ago</span>
                            </div>
                        </div>
                        <div class="ml-auto">
                            <Icon icon="majesticons:dots-vertical" width="25" />
                        </div>
                    </div>
                    <div>
                        <p class="pr-6 text-[13pt]">
                            This course is perfect if you're looking to learn about the role of a product manager. It’s
                            straightforward, engaging, and makes learning about launching products super easy.
                        </p>
                    </div>
                    <div class="flex gap-5">
                        <a href="#" class="text-[10pt] font-normal text-[#8f8e8e]">Helpful?</a>
                        <Icon icon="line-md:thumbs-up-filled" width="20"></Icon>
                        <Icon icon="line-md:thumbs-down-filled" width="20"></Icon>
                    </div>
                </div>

                <div class="h-[40vh] w-[48%] p-1 flex flex-col gap-5">
                    <div class="flex gap-4">
                        <div class="bg-black h-11 w-11 p-3 rounded-full"></div>
                        <div>
                            <h1 class="font-extrabold text-[13pt]">Makinwa D.</h1>
                            <div class="flex items-center font-normal text-[11pt]">
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <span class="ml-1 font-bold text-[#747272] text-[10pt]">3 weeks ago</span>
                            </div>
                        </div>
                        <div class="ml-auto">
                            <Icon icon="majesticons:dots-vertical" width="25" />
                        </div>
                    </div>
                    <div>
                        <p class="pr-6 text-[13pt]">
                            I loved how this course emphasized understanding your customers as a product manager. It’s
                            packed with practical advice and real-world examples. Highly recommend to all aspiring
                            product managers!
                        </p>
                    </div>
                    <div class="flex gap-5">
                        <a href="#" class="text-[10pt] font-normal text-[#8f8e8e]">Helpful?</a>
                        <Icon icon="line-md:thumbs-up-filled" width="20"></Icon>
                        <Icon icon="line-md:thumbs-down-filled" width="20"></Icon>
                    </div>
                </div>

                <div class="h-[40vh] w-[48%] p-1 flex flex-col gap-5">
                    <div class="flex gap-4">
                        <div class="bg-black h-11 w-11 p-3 rounded-full"></div>
                        <div>
                            <h1 class="font-extrabold text-[13pt]">James k.</h1>
                            <div class="flex items-center font-normal text-[11pt]">
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <span class="ml-1 font-bold text-[#747272] text-[10pt]">3 weeks ago</span>
                            </div>
                        </div>
                        <div class="ml-auto">
                            <Icon icon="majesticons:dots-vertical" width="25" />
                        </div>
                    </div>
                    <div>
                        <p class="pr-6 text-[13pt]">
                            This course is a goldmine! It helped me finally understand what product management is all
                            about. If you're wondering who a product manager is and what they do, this is the course you
                            need.
                        </p>
                    </div>
                    <div class="flex gap-5">
                        <a href="#" class="text-[10pt] font-normal text-[#8f8e8e]">Helpful?</a>
                        <Icon icon="line-md:thumbs-up-filled" width="20"></Icon>
                        <Icon icon="line-md:thumbs-down-filled" width="20"></Icon>
                    </div>
                </div>
            </div>
        </div>
        <button class="border-[1.2px] border-black p-2 font-bold">
            Show all reviews
        </button>
    </div>
</template>