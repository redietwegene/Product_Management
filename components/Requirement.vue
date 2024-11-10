<template>
    <div class="container ml-24 w-[800px]" style="padding-left: 90px;">

        <h2 class="text-2xl font-bold mb-6">Requirements</h2>
        <ul class="list-disc pl-6 space-y-2">
            <li>No Product Management Prior Knowledge or Experience is Needed</li>

        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-6">Description</h2>
        <p class="text-gray-700" v-if="!showMoreText">
            Are you ready to transform your passion for innovation into a rewarding career in product management?

            This Product Management Masterclass is designed for aspiring product managers like you, who want to learn
            the practical skills needed to excel in today’s competitive job market. You'll learn the skills that make up
            the entire Product Management job and process: from ideation to market research, to UX wireframing to
            prototyping, technology, metrics, and finally to building the product with user stories, project management,
            scoping, and leadership.
        </p>
        <div v-if="showMoreText">
            <p class="text-gray-700">
                The Product Manager role is one of the most promising and highest-paying careers today, offering an
                opportunity to dramatically improve your career and quality of life.<br />

                The demand for Product Management is increasing at an insane rate. More and more companies are finally
                figuring out how important this discipline and this role is to their success.
            </p>
            <p class="text-gray-700 mt-4">
                Are you eager to have a successful career in product management? Look no further! Product Management
                Masterclass: Become a Product Manager is designed to equip you with the core skills and knowledge needed
                to excel in the Product Management field.<br />

                This course will teach you the underlying values and principles of Product Management. And the practical
                portion will showcase how successful teams build products using approaches that minimize risk and
                maximize customer delight.
            </p>
            <p class="text-gray-700 mt-4">
                If you're seeking a job in Product Management or trying to transition into a new career, this course
                will help prepare you for success. You'll be able to identify and avoid unproductive workplace
                practices, and confidently use the latest Product Management tools and techniques that are so essential
                to success.
            </p>
            <p class="text-gray-700 mt-4">
                This BITE SIZED course is also part of our Master Series - The Customer: Service At Its Best.
            </p>
            <p class="text-gray-700 mt-4">
                And if you work as a Product Manager in the software development space, this course will accelerate your
                career and open new doors.
            </p>
            <p class="text-gray-700 mt-4">
                You don’t have to just dream it; you can live it. Our Product Management Masterclass is your gateway to
                a fulfilling career, guiding you step-by-step toward becoming the product manager you've always wanted
                to be.
            </p>
            <p>Don’t let this opportunity slip by. See you on the other side!</p>

            <h2 class="text-2xl font-bold mt-8 mb-6">Who this course is for:</h2>
            <ul class="list-disc pl-6 space-y-2">
                <li>Aspiring Product Manager</li>
                <li>Founders of Startups</li>

            </ul>
        </div>



        <button class="text-violet-0 font-bold py-2 px-4 rounded mt-6" @click="toggleShowMoreText">
            {{ showMoreText ? 'Show less ^' : 'Show more v' }}
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMoreText: false
        }
    },
    methods: {
        toggleShowMoreText() {
            this.showMoreText = !this.showMoreText
        }
    }
}
</script>