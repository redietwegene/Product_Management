<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";
</script>

<template>
    <div class="w-[750px] ml-44 py-4 mt-10 font-Zeitung">
        <div class="flex items-center">
            <Icon icon="ri:star-s-fill" width="24" class="text-yellow-800"></Icon>
            <h1 class="text-[17pt] font-extrabold">4.4 course rating 54K ratings</h1>
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
                            <h1 class="font-extrabold text-[13pt]">Karen C.</h1>
                            <div class="flex items-center font-normal text-[11pt]">
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <span class="ml-1 font-bold text-[#747272] text-[10pt]">2 days ago</span>
                            </div>
                        </div>
                        <div class="ml-auto">
                            <Icon icon="majesticons:dots-vertical" width="25" />
                        </div>
                    </div>
                    <div>
                        <p class="pr-6 text-[13pt]">
                            Informative as it provides guidance on transitioning from
                            identifying a problem, formulating possible solutions to
                            implementation and feedback.
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
                            <h1 class="font-extrabold text-[13pt]">John D.</h1>
                            <div class="flex items-center font-normal text-[11pt]">
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <span class="ml-1 font-bold text-[#747272] text-[10pt]">1 week ago</span>
                            </div>
                        </div>
                        <div class="ml-auto">
                            <Icon icon="majesticons:dots-vertical" width="25" />
                        </div>
                    </div>
                    <div>
                        <p class="pr-6 text-[13pt]">
                            This guide helped me understand the entire process from problem
                            identification to solution implementation. Great content!
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
                            <h1 class="font-extrabold text-[13pt]">Heather F.</h1>
                            <div class="flex items-center font-normal text-[11pt]">
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <span class="ml-1 font-bold text-[#747272] text-[10pt]">5 days ago</span>
                            </div>
                        </div>
                        <div class="ml-auto">
                            <Icon icon="majesticons:dots-vertical" width="25" />
                        </div>
                    </div>
                    <div>
                        <p class="pr-6 text-[13pt]">
                            Very insightful. It offers a comprehensive approach to tackling
                            complex challenges in business.
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
                            <h1 class="font-extrabold text-[13pt]">Udemy User</h1>
                            <div class="flex items-center font-normal text-[11pt]">
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                                <span class="ml-1 font-bold text-[#747272] text-[10pt]">1 month ago</span>
                            </div>
                        </div>
                        <div class="ml-auto">
                            <Icon icon="majesticons:dots-vertical" width="25" />
                        </div>
                    </div>
                    <div>
                        <p class="pr-6 text-[13pt]">
                            I really wish I knew the questions I answered wrong. That is an important part of learning.
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