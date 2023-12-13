<script setup>
defineProps({
  department: Object
});
</script>

<template>
  <div class="w-full relative mt-14">
    <img
      :src="department.coverImageUrl"
      alt="graduates"
      class="object-cover w-full"
    />
    <div
      class="w-full h-full bg-black bg-opacity-30 absolute top-0 left-0"
    ></div>
  </div>
  <div class="max-w-screen-xl mx-auto flex justify-center px-4 pt-28 xl:px-0">
    <div class="flex justify-center items-center w-[90%]">
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
    class="max-w-screen-xl mx-auto flex flex-wrap-reverse justify-center px-4 xl:px-0 text-[#272224] relative mt-28"
  >
    <div
      class="flex flex-col flex-wrap gap-8 items-center justify-center font-['Lato'] w-full md:w-1/2 font-light p-2 sm:p-4 lg:p-8 bg-[#D9D9D9]"
    >
      <p
        class="text-base sm:text-lg md:text-xl lg:text-2xl w-full uppercase font-semibold"
      >
        {{ department.title }}
      </p>
      <p class="flex flex-col">
        <span class="font-medium text-base sm:text-lg md:text-xl lg:text-2xl"
          >Department Head Message (HOD)</span
        >
        <span class="text-justify text-sm sm:text-base md:text-lg lg:text-xl">
          {{ department.message }}
        </span>
      </p>
    </div>
    <div class="w-full md:w-1/2 z-0">
      <div class="w-full h-full relative">
        <img
          :src="department.hodImageUrl"
          alt="picture of student"
          class="object-cover"
        />
        <div
          class="w-full h-full bg-black bg-opacity-40 absolute top-0 left-0 flex items-end text-white font-['Lato'] p-2 sm:p-4 md:pb-8 lg:p-10"
        ></div>
      </div>
    </div>
  </div>
</template>
