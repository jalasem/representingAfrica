<template>
  <div class="layout default" :class="{ dark: $colorMode.value === 'dark' }">
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
.default {
  transition: background-color 0.3s ease-in-out;
  background-color: $dirty-white;

  @apply text-black;

  &.dark {
    @apply bg-gray-900 text-white;
  }
}
</style>
