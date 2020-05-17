<template>
  <div
    class="layout default text-black bg-dirty-white dark:bg-gray-900 dark:text-white"
  >
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
.default {
  transition: background-color 0.3s ease-in-out;
  // background-color: $dirty-white;
  // @apply text-black;

  // &.dark {
  //   @apply bg-gray-900 text-white;
  // }
}
</style>
