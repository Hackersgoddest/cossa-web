<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";

const dotRefs = ref([]);
const svgRefs = ref([]);
let ctx = ref();
let intervalId = ref(0);

const props = defineProps({
  carousels: Object,
});

let slideIndex = ref(1);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex.value += n));
  clearInterval(intervalId.value);
  intervalId.value = setInterval(() => plusSlides(1), 1000 * 10);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex.value = n));
}

function showSlides(n) {
  let i;
  if (n > svgRefs.value.length) {
    slideIndex.value = 1;
  }
  if (n < 1) {
    slideIndex.value = svgRefs.value.length;
  }
  for (i = 0; i < svgRefs.value.length; i++) {
    gsap.set(svgRefs.value[i], { display: "none" });
  }
  for (i = 0; i < dotRefs.value.length; i++) {
    dotRefs.value[i].classList.remove("active");
  }
  gsap.set(svgRefs.value[slideIndex.value - 1], { display: "block" });
  dotRefs.value[slideIndex.value - 1].classList.add("active");
  gsap.fromTo(
    svgRefs.value[slideIndex.value - 1],
    { opacity: 0 },
    { opacity: 1, duration: 3 }
  );
  ctx.value = gsap.context((self) => {
    const title = self.selector(".title");
    const subtitle = self.selector(".subtitle");

    // Individual animations for other elements
    gsap.from(title, {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "bounce.out",
    });

    gsap.from(subtitle, {
      y: -100,
      opacity: 0,
      duration: 2,
      ease: "bounce.out",
    });
  }, svgRefs.value[slideIndex.value - 1]);
}



onMounted(() => {
  showSlides(slideIndex.value);
  intervalId.value = setInterval(() => plusSlides(1), 1000 * 10);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
  ctx.value.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <div class="relative">
    <template v-for="item in carousels" :key="item.src">
      <a :to="item?.link" class="hidden fade" ref="svgRefs">
        <img :src="item?.src" class="object-cover h-[500px]" />
        <div
          class="w-full h-full absolute top-0 left-0 z-10 bg-opacity-50 flex flex-col justify-center items-center text-white gap-4"
          :class="`${item.hoverColor}`"
        >
          <p
            class="title text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold font-sans"
          >
            {{ item.content.header }}
          </p>
          <p
            class="subtitle text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center font-medium font-['Lato'] px-10"
          >
            {{ item.content.description }}
          </p>
        </div>
      </a>
    </template>

    <a
      class="cursor-pointer z-20 absolute top-1/2 left-0 -translate-y-1/2 text-white font-bold px-3 py-2 text-lg rounded transition ease-in duration-700 select-none hover:bg-[rgba(0,0,0,0.5)]"
      @click="plusSlides(-1)"
      >&#10094;</a
    >
    <a
      class="cursor-pointer absolute z-20 top-1/2 right-0 -translate-y-1/2 text-white font-bold px-3 py-2 text-lg rounded transition ease-in duration-700 select-none hover:bg-[rgba(0,0,0,0.5)]"
      @click="plusSlides(1)"
      >&#10095;</a
    >

    <!-- The dots/circles -->
    <div style="text-align: center" class="absolute bottom-2 w-full">
      <span
        ref="dotRefs"
        v-for="item in carousels"
        :key="item.description"
        class="cursor-pointer w-4 h-4 mx-1 bg-[#bbb] rounded-full inline-block transition-colors ease duration-700 hover:bg-[#717171]"
        @click="currentSlide(carousels.indexOf(item) + 1)"
      ></span>
    </div>
  </div>
</template>

<style scoped>
svg {
  display: none;
  opacity: 0;
}

.active {
  background-color: #717171;
}
</style>
