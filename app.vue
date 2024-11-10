<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navigation from './components/Navigation.vue'; // The original header
import ScrolledHeader from './components/ScrolledHeader.vue'; // The new header when scrolled

const hasScrolled = ref(false);


const handleScroll = () => {
  console.log('Scroll Y:', window.scrollY);

  if (window.scrollY > 50) {
    hasScrolled.value = true;
  } else {
    hasScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div>
    <Navigation v-if="!hasScrolled" />
    <ScrolledHeader v-else />
    <Hero />
    <Learn/>
    <Explore/>
    <Course_Content />
    <Requirement/>
    <StudentBought/>
    <Frequently_Bought />
    <Instructor/>
    <CourseRating/>
    <MoreCourses/>
    <Footer/>


  </div>
</template>
