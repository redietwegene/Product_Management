<template>
    <div class="p-14 ml-36">
        <div>
            <h4 class="font-bold text-2xl pb-5">Course content</h4>
            <div class="flex gap-72 ">
                <p class="">
                    {{ sections.length }} sections • {{ totalLectures }} lectures • {{ formattedTotalTime }} Total
                    length
                </p>
                <div>
                    <button @click="toggleCollapse" class="text-violet-0 font-bold p-2 rounded">
                        {{ showAll ? 'Collapse all sections' : 'Expand all sections' }}
                    </button>

                </div>
            </div>


        </div>

        <div class="border pb-3 pr-2 w-[750px]">
            <transition name="fade">
                <div class="mt-4">
                    <div v-for="(section, index) in (showAll ? sections : limitedSections)" :key="index"
                        class="section">
                        <div class="collapsible cursor-pointer p-2 mt-2 rounded flex justify-between pr-6 bg-gray-0"
                            @click="toggleSection(index)">
                            <div>
                                <span class="pr-3 font-bold">{{ section.isActive ? 'v' : '^' }}</span>
                                <span class="font-bold">{{ section.title }}</span>
                            </div>
                            <span>
                                {{ section.contents.length }} lectures • {{ formatTime(section.contents.reduce((total,
                                item) => total + item.duration, 0)) }}
                            </span>
                        </div>

                        <transition name="fade">
                            <div v-if="section.isActive" class="content mt-2 p-2 rounded">
                                <div v-for="(content, i) in section.contents" :key="i"
                                    class="flex justify-between pr-6 ">
                                    <p class="font-light">{{ content.title }}</p>
                                    <p class="text-neutral-500  font-thin">{{ formatTime(content.duration) }}</p>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CollapsableCard',
    data() {
        return {
            showAll: false, // Controls if all sections are shown or only the first two
            sections: [
                {
                    title: 'Introduction to Product Management',
                    contents: [
                        { title: 'Lecture 1.1: Overview', duration: 330 }, // duration in seconds
                        { title: 'Lecture 1.2: Basics', duration: 620 },
                        { title: 'Lecture 1.3: Getting Started', duration: 900 },
                        { title: 'Lecture 1.4: First Steps', duration: 480 },
                    ],
                    isActive: false,
                },
                {
                    title: 'The Product Management Life Cycle',
                    contents: [
                        { title: 'Lecture 2.1: Deep Dive', duration: 1200 },
                        { title: 'Lecture 2.2: Advanced Techniques', duration: 900 },
                        { title: 'Lecture 2.3: Optimization', duration: 1500 },
                        { title: 'Lecture 2.4: Case Studies', duration: 600 },
                        { title: 'Lecture 2.5: Conclusion', duration: 300 },
                    ],
                    isActive: false,
                },
                {
                    title: 'The Product Management Life Cycle Phases',
                    contents: [
                        { title: 'Lecture 3.1: Summary', duration: 600 },
                        { title: 'Lecture 3.2: Final Thoughts', duration: 720 },
                        { title: 'Lecture 3.3: Q&A', duration: 420 },
                    ],
                    isActive: false,
                },
            ],
        };
    },
    computed: {
        limitedSections() {
            return this.sections.slice(0, 2);
        },
        totalLectures() {
            return this.sections.reduce((total, section) => total + section.contents.length, 0);
        },
        totalTime() {
            return this.sections.reduce((total, section) => {
                return total + section.contents.reduce((sectionTotal, content) => sectionTotal + content.duration, 0);
            }, 0);
        },
        formattedTotalTime() {
            return this.formatTime(this.totalTime);
        },
    },
    methods: {
        toggleSection(index) {
            this.sections[index].isActive = !this.sections[index].isActive;
        },
        toggleCollapse() {
            this.showAll = !this.showAll;
            this.sections.forEach(section => {
                section.isActive = this.showAll;
            });
        },
        formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        },
    },
};
</script>
