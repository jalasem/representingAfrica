<template>
  <div class="aside flex flex-col h-full">
    <div class="flex-grow">
      <h1 class="text-4xl font-bold leading-10" v-text="title" />
    </div>
    <div class="grid row-gap-5">
      <div class="flex items-center capitalize">
        <span
          :class="
            $colorMode.value === 'light'
              ? 'aside__toggle--light'
              : 'aside__toggle--dark'
          "
          class="aside__toggle"
          @click="toggle"
        />
        {{ $colorMode.value }} mode
      </div>
      <p class="flex items-center">
        <nuxt-link class="aside__link" to="/">About</nuxt-link>
        <span class="bar" />
        <nuxt-link class="aside__link" to="/">Nominate</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style lang="scss" scoped>
.bar {
  @apply h-5 bg-gray-600 mr-3;
  width: 1px;
}

.aside__link {
  @apply mr-3 font-medium;
}

.aside__toggle {
  @apply relative w-10 h-5 mr-2 rounded-full cursor-pointer;
  background: #c5cee0;

  &:before {
    @apply absolute top-0 left-0 w-6 h-6 bg-white rounded-full;
    background-image: url('/vectors/moon.svg');
    background-size: cover;
    border: solid 5px white;
    top: -2px;
    content: '';
  }

  &.aside__toggle--dark {
    &::before {
      left: calc(100% - 1.5rem);
      background-image: url('/vectors/sun.svg');
    }
  }
}
</style>
