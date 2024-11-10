<script setup>
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';

// Array of students with their details
const students = [
    { id: 1, imageSrc: "/images/course3.png", name: "Design Thinking in 3 Steps", rating: "4.4", reviews: "126,180", price: "$89", hours: "1.5 total hours", updateDate: "6/2020" },
    { id: 2, imageSrc: "/images/course3.png", name: "Creative Problem Solving", rating: "4.6", reviews: "150,200", price: "$89", hours: "2 hours", updateDate: "8/2020" },
    { id: 3, imageSrc: "/images/course3.png", name: "Innovative Thinking Techniques", rating: "4.3", reviews: "100,150", price: "$89", hours: "3 hours", updateDate: "5/2020" },
    { id: 4, imageSrc: "/images/course3.png", name: "Business Strategy Mastery", rating: "4.7", reviews: "200,300", price: "$89", hours: "4 hours", updateDate: "7/2020" },
    { id: 5, imageSrc: "/images/course3.png", name: "Marketing Basics", rating: "4.5", reviews: "180,250", price: "$89", hours: "2.5 hours", updateDate: "9/2020" },
    { id: 6, imageSrc: "/images/course3.png", name: "Data Analytics for Beginners", rating: "4.8", reviews: "300,000", price: "$89", hours: "5 hours", updateDate: "10/2020" },
    { id: 7, imageSrc: "/images/course3.png", name: "Advanced Design Thinking", rating: "4.6", reviews: "220,500", price: "$89", hours: "3.5 hours", updateDate: "11/2020" },
    { id: 8, imageSrc: "/images/course3.png", name: "Leadership Development", rating: "4.9", reviews: "400,000", price: "$89", hours: "6 hours", updateDate: "12/2020" },
    { id: 9, imageSrc: "/images/course3.png", name: "Team Building Essentials", rating: "4.2", reviews: "75,000", price: "$89", hours: "1 hour", updateDate: "1/2021" }
];

const showMore = ref(false);

const displayedStudents = computed(() => {
    return showMore.value ? students : students.slice(0, 7);
});

const toggleShowMore = () => {
    showMore.value = !showMore.value;
};
</script>

<template>
    <div class=" pl-20 mt-10 w-[850px] m-24">
        <h1 class="text-[17pt] font-extrabold">Students also bought</h1>

        <div class="grid grid-cols-1 gap-4 w-[100%]">
            <div v-for="student in displayedStudents" :key="student.id"
                class="grid grid-cols-[1fr,4fr,1fr,1fr,1fr,1fr] gap-4 py-[5px] items-center w-full pb-3 border-b-[1.3px] border-gray-200">

                <div class="h-20 w-20">
                    <img src="/images/course3.png" alt="student-image" class="w-full h-full object-cover" />
                </div>

                <div class=" text-[13pt]">
                    <a>{{ student.name }}</a>
                    <div class="flex text-gray-900 gap-1 text-[12pt]">
                        <span class="text-green-900 font-extrabold">{{ student.hours }}</span>
                        <span class="font-normal">Updated {{ student.updateDate }}</span>
                    </div>
                </div>

                <div class="flex items-center gap-1">
                    <span class="font-extrabold text-[12pt] text-yellow-900">{{ student.rating }}</span>
                    <Icon icon="ri:star-s-fill" class="text-yellow-500" />
                </div>

                <div class="text-[12pt] font-normal flex items-center text-gray-700">
                    <Icon icon="material-symbols:person-2-outline" width="20" />
                    {{ student.reviews }}
                </div>

                <div class="text-[12pt] font-normal text-gray-700">
                    {{ student.price }}
                </div>

                <div class="flex justify-center items-center">
                    <div
                        class="border-[1.2px] border-black p-3 flex items-center justify-center h-10 w-10 rounded-full">
                        <Icon icon="fluent:heart-28-regular" />
                    </div>
                </div>
            </div>
        </div>

        <button @click="toggleShowMore" class="mt-4 border-[1.32px]  border-black w-[100%] py-2 font-bold">
            {{ showMore ? "Show Less" : "Show More" }}
        </button>
    </div>
</template>