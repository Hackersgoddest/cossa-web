<script setup>
import { RouterView, RouterLink } from "vue-router";
import DownArrow from "../assets/icons/DownArrow.vue";
import BrainSvg from "../assets/icons/BrainSvg.vue";
import CodiePieIcon from "../assets/icons/CodiePieIcon.vue";
import Carousel from "../components/Carousel.vue";
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

const scrollToMainContent = () => {
  const mainContentElement = document.getElementById("main");
  if (mainContentElement) {
    mainContentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

onMounted(() => {
  let tl = gsap.timeline(); // Create a main timeline

  ctx = gsap.context((self) => {
    const content = self.selector(".main-content");
    const image = self.selector(".image");
    const imageCover = self.selector(".image-cover");

    // Animation timeline for main content
    const contentTimeline = gsap.timeline({
      defaults: { opacity: 0, scale: 0.5 },
    });
    content.forEach((item) => {
      contentTimeline.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "bottom bottom",
          end: "top 50%",
          scrub: true,
        },
      });
    });

    // Animation timeline for image cover
    const imageCoverTimeline = gsap.timeline({
      defaults: { opacity: 0 },
    });
    imageCover.forEach((item) => {
      imageCoverTimeline.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "top 40%",
          scrub: true,
        },
      });
    });

    // Add the content timeline to the main timeline
    tl.add(contentTimeline);
    // tl.add(imageTimeline);
    tl.add(imageCoverTimeline);
  }, main.value);
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});

const carouselsArray = ref([
  {
    src: "/home_page_images/columbia-front.jpg",
    path: "/",
    description: "columbia front",
    hoverColor: "bg-[#1AB900]",
    content: {
      header: "HOW CAN I APPLY?",
      description: "You can apply to Valley View University in 3 simple steps.",
    },
  },
  {
    src: "/home_page_images/administration.jpg",
    path: "/",
    description: "administration",
    hoverColor: "bg-[#FAB400]",
    content: {
      header: "WHAT CAN I STUDY?",
      description:
        "Choose from over 20 programs and degrees. At Valley View University, you can change your major!",
    },
  },
  {
    src: "/home_page_images/columbia-back.jpg",
    path: "/",
    description: "columbia-back",
    hoverColor: "bg-[#2A2B6E]",
    content: {
      header: "WHAT WILL IT COST?",
      description:
        "You can afford a top-tier private education. Find out how tuition and financial aid work.",
    },
  },
]);
</script>

<template>
  <div class="relative">
    <img
      src="/home_page_images/home-cover-pic.jpg"
      alt="home cover pic"
      class="object-cover h-screen w-full object-center"
    />
    <div class="w-screen z-10 absolute bottom-2 left-0 flex justify-center">
      <DownArrow
        @click="scrollToMainContent"
        class="w-14 h-14 fill-white cursor-pointer animate-bounce"
      />
    </div>
  </div>
  <div class="relative" ref="main" id="main">
    <div class="max-w-screen-xl mx-auto flex justify-end px-4 xl:px-0">
      <div
        class="flex flex-col my-20 gap-8 max-w-screen-sm items-start relative"
      >
        <p
          class="main-content text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-['sans-serif'] text-[#272224]"
        >
          Welcome to<br />the
          <span class="text-[#FAB400]">FACULTY OF SCIENCE</span>
        </p>
        <div class="flex flex-col gap-8 main-content">
          <p
            class="text-sm md:text-base lg:text-lg xl:text-xl text-[#272224] font-['Lato'] whitespace-normal font-light text-justify"
          >
            The Faculty of Science (FOS) has a firm belief that students should
            have impeccable educational experience that encourages scholarship
            through the application of scientific knowledge in teaching,
            learning, and research. At FOS we devote our time to promoting
            top-notch programmes, to develop highly skilled and
            globally-employable graduates. Our holistic education empowers our
            students in solving real-life problems and fulfilling the will of
            God.
          </p>
          <button
            class="w-fit font-sans font-bold px-3 py-2 bg-[#3F51B5] text-white text-sm md:text-base transition-transform transform hover:scale-105"
          >
            ABOUT US
          </button>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto flex justify-end relative px-4 xl:px-0">
      <div class="w-2/3 z-0">
        <img
          src="/home_page_images/vsc.jpg"
          alt="picture of student"
          class="image object-cover"
        />
        <div
          class="image-cover w-[54%] h-3/5 bg-[#D9D9D9] absolute top-1/2 left-0 -translate-y-1/2 flex flex-col justify-center items-center gap-4 ml-4 sm:ml-0"
        >
          <p
            class="text-[#272224] font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          >
            BECOME A STUDENT
          </p>
          <hr class="w-20 h-0.5 border-b-0.5 border-solid border-[#272224]" />
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto flex justify-center px-4 xl:px-0">
      <div class="flex flex-col gap-8 justify-center items-center py-28">
        <p
          class="main-content font-['sans-serif'] text-[#3F51B5] font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
        >
          ACCREDITATION
        </p>
        <p
          class="main-content text-sm md:text-base lg:text-lg xl:text-xl text-[#272224] font-['Lato'] whitespace-normal font-light text-justify"
        >
          Our degrees are recognized for meeting specific educational standards,
          which have been set by a peer review board made up of members from
          faculties of various accredited institutions. These standards for our
          accreditation evaluate our programmes and determine if applicable
          standards are met. Choosing a programme at the Faculty of Science
          gives you the assurance of receiving quality education and gaining
          recognition by the world, other universities and colleges, and
          employers.
        </p>
      </div>
    </div>
    <div class="relative my-20 font-sans">
      <img
        src="/home_page_images/group1.jpg"
        alt="group picture"
        class="object-cover w-screen h-[500px]"
      />
      <div class="w-full h-full bg-black bg-opacity-60 absolute top-0 left-0">
        <div
          class="max-w-screen-xl h-full mx-auto px-4 xl:px-0 flex justify-end items-center relative"
        >
          <div
            class="w-fit absolute inset-y-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:right-0 flex flex-col text-white items-center justify-evenly h-3/5 lg:h-4/5 m-auto mr-4 xl:mr-0"
          >
            <div class="flex flex-col items-center">
              <span class="font-extrabold text-2xl lg:text-3xl xl:text-4xl"
                >MAKE</span
              >
              <span
                class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:7xl font-normal tracking-[0.3em]"
                style="color: #ff0000; -webkit-text-stroke: 1px #ffffff"
                >POSSIBLE</span
              >
            </div>
            <div class="flex jutify-center items-center">
              <hr class="w-16 h-0.5 border-1 border-solid border-white" />
            </div>
            <div
              class="flex flex-col items-center justify-center font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            >
              <span class="text-center">THE CAMPAIGN FOR</span>
              <span class="text-center">VALLEY VIEW UNIVERSITY</span>
            </div>
            <RouterLink
              to="/"
              class="bg-[#3F51B5] px-2 py-2 font-semibold text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-transform transform hover:scale-105"
              >Explore What's Possible >></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto flex justify-center px-4 xl:px-0">
      <div
        class="flex flex-col gap-8 justify-center items-center py-28 w-[90%]"
      >
        <BrainSvg />
        <p
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#4D5051] font-['sans-serif'] whitespace-normal font-medium text-center max-w-4xl"
        >
          Bridging the Gap Between
          <span
            class="text-[#FAB400] underline underline-offset-8 decoration-2 decoration-[#FAB400]"
            >Ideas</span
          >
          and
          <span
            class="text-[#FAB400] underline underline-offset-8 decoration-2 decoration-[#FAB400]"
            >Innovation</span
          >
        </p>
      </div>
    </div>
    <div
      class="max-w-screen-xl mx-auto flex justify-start relative px-4 xl:px-0"
    >
      <div class="w-2/3 z-0">
        <img
          src="/home_page_images/flyer.jpg"
          alt="picture of student"
          class="image object-cover obj"
        />
        <div
          class="image-cover w-[54%] h-3/5 bg-[#D9D9D9] absolute top-1/2 right-0 -translate-y-1/2 flex flex-col justify-center items-center gap-4 mr-4 sm:mr-0"
        >
          <div class="max-w-[80%] mx-auto flex justify-center items-center">
            <div class="w-fit flex flex-col items-start gap-8">
              <p class="flex flex-col">
                <span
                  class="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#272224]"
                  >BE PART OF VVU</span
                >
                <span
                  class="capitalize text-[#FAB400] text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium tracking-tight -mt-2"
                  >faculty of science student</span
                >
              </p>
              <RouterLink
                to="/"
                class="bg-[#3F51B5] w-fit px-2 sm:px-4 py-2 font-semibold text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl uppercase text-start"
                >Apply Today</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto flex justify-center px-4 xl:px-0">
      <div class="flex flex-col gap-8 justify-center items-center py-28">
        <div class="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div class="w-full flex justify-center">
            <CodiePieIcon />
          </div>
          <div class="w-[80%] sm:w-[60%] text-center">
            <p
              class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#4D5051] font-['sans-serif'] whitespace-normal font-medium"
            >
              Unleashing Creativity Through
              <span
                class="text-[#FAB400] underline underline-offset-8 decoration-2 decoration-[#FAB400]"
                >Code</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <Carousel :carousels="carouselsArray" />
  </div>
  <RouterView />
</template>

<style></style>
