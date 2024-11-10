<template>
    <div class="container ml-24 w-[800px]" style="padding-left: 90px;">

        <h2 class="text-2xl font-bold mb-6">Requirements</h2>
        <ul class="list-disc pl-6 space-y-2">
            <li>A keen readiness to learn and put it into practice</li>

        </ul>

        <h2 class="text-2xl font-bold mt-8 mb-6">Description</h2>
        <p class="text-gray-700" v-if="!showMoreText">
            There is no question about the impact great customer service has on an organisation. How to understand
            customers' needs will give you the tools to make a connection and build a relationship with your customer
            base. Today we may be providing a service, tomorrow we may be a receiving one; it is the beauty of this that
            makes good customer service a truly human endeavour.
        </p>
        <div v-if="showMoreText">
            <p class="text-gray-700">
                Each lecture has been carefully selected so that you can explore relevant and meaningful strategies to
                create a truly customer centric workplace. Build a culture that values the importance of each customer
                interaction and empowers employees to provide the best service possible. This course is full of tips and
                tricks to use inside and out of your workplace. It will motivate you to really understand and support
                the environment you're trying to create.
            </p>
            <p class="text-gray-700 mt-4">
                Many people take part in creating these courses – from subject matter experts, to researchers and
                designers – to ensure you are provided with the best learning experience and the most up to date
                information. We're excited about education and want to give you the opportunity to be the best you can
                be.
            </p>
            <p class="text-gray-700 mt-4">
                This BITE SIZED course will take you approximately 30 to 45 minutes to complete and will cover all of
                the components required to understand customer needs. Our content will give you the opportunity to
                listen to experts and understand relevant models to use on your leadership journey when creating a truly
                human customer experience. Enjoy a collection of videos, interviews and engaging imagery used throughout
                our presentations.
            </p>
            <p class="text-gray-700 mt-4">
                This BITE SIZED course is also part of our Master Series - The Customer: Service At Its Best.
            </p>
            <p class="text-gray-700 mt-4">
                If you would like to really challenge yourself, join us for the entire journey.
            </p>
            <p class="text-gray-700 mt-4">
                So what are you waiting for? Start tonight and be on your way to providing amazing customer service
                tomorrow.
            </p>
            <h2 class="text-2xl font-bold mt-8 mb-6">Who this course is for:</h2>
            <ul class="list-disc pl-6 space-y-2">
                <li>Anyone looking to improve the experience of their customers</li>
                <li>Anyone with an interest in driving a strong customer focus within their organisation</li>
                <li>Anyone looking to develop their organisation into an environment that customers want to interact
                    with and develop loyalty to</li>
                <li>Anyone with frontline customer service experience, leadership or management experience, whether in a
                    junior to middle management level or those who wish to move into a middle/senior management role
                    within a customer focussed organisation</li>
                <li>Anyone from a small, medium or large organisation</li>
            </ul>
        </div>



        <button class= "text-violet-0 font-bold py-2 px-4 rounded mt-6"
            @click="toggleShowMoreText">
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