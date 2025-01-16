<template>
    <a href="" class="p-2 px-6 border-2 border-[#C4C4C4] rounded-xl">
    {{title}}
    </a>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>