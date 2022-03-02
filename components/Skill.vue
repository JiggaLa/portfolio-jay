<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="flex items-center justify-center m-4 py-6 px-10 text-[2.2rem] text-center rounded-[40px] border border-[#343434] lg:text-[1.8rem] lg:py-[18px] lg:px-[34px] lg:rounded-[27px] md:m-2 md:text-[1.2rem] md:rounded-[22px]"
  >
    {{ props.name }}
  </div>
</template>
