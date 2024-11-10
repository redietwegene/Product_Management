
<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class=" flex gap-3 flex-col shadow-lg border border-gray-300 pb-8">
        <div>
            <img src="/images/girl.jpg " class="h-[250px] ">
        </div>

        <div class="pl-5 pr-5">
            <p class="text-[20px]">$44.99</p>
            <div class="flex items-center gap-4 ">
                <button
                    class=" h-[48px] mt-3 w-60 border-[1.3px] text-[10pt] font-extrabold bg-purple-500 text-white">Add
                    to
                    Cart</button>
                <Icon icon="fluent:heart-28-regular" class="border w-14 h-12" />
            </div>
            <p class="flex justify-center">30-Day Monkey-Back Guarantee</p>

            <div class="flex flex-col i mt-[10px] text-[9pt] gap-2">
                <p>1.5 hours on-demand videos</p>
                <p>2 practice tests</p>
                <p>Access on mobile and TV</p>
                <p>Full lifetime access</p>
                <p>Certificate of completion</p>

            </div>
            <div>
                <div class="flex justify-between font-extrabold mt-2 text-[11pt]">
                    <button class="border-purple-400 border-b-2 ">Share</button>
                    <button>Gift this course</button>
                    <button>Apply Coupon</button>

                </div>
                <button
                    class="relative border-dotted h-[48px] mt-3 w-full text-[#615e5e] border-black border-[1.3px] text-[10pt] text-left pl-3 pr-3 flex items-center">
                    <span class="mr-5">
                        <strong>KEEPLEARNING</strong> is applied Udemy coupon
                    </span>
                    <Icon icon="material-symbols:close-rounded" width="25" class="ml-auto text-blue-900" />
                </button>

                <div class="mt-4 w-full flex items-center">
                    <input class="border-black border-[1.3px] h-[42px] w-[75%]  text-slate-900 p-3 text-[10pt]"
                        placeholder="Enter Coupon" />
                    <button class="bg-slate-900 w-[25%] text-[11pt] font-extrabold h-[42px] text-white ">Apply</button>
                </div>

            </div>



        </div>
        <div>

        </div>

    </div>

</template>