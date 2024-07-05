<script setup lang="ts">
  defineProps<{
    isActive: boolean;
  }>();
</script>

<template>
  <button>
    <div :class="{ 'tham-active': isActive }" class="tham tham-e-squeeze tham-w-6">
      <div class="tham-box">
        <div class="tham-inner rounded-none bg-white before:rounded-none after:rounded-none" />
      </div>
    </div>
  </button>
</template>

<style scoped></style>
