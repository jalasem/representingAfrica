<template>
  <div
    class="pro-card box-shadow px-2 bg-white dark:bg-gray-800"
    :class="{ dark: $colorMode.value === 'dark' }"
  >
    <div class="pro-pic__wrapper">
      <div :style="`background-image: url(${pro.proPic})`" class="pro-pic" />
    </div>
    <div class="flex flex-col">
      <div class="px-1 flex-grow">
        <p class="text-xl font-semibold cursor-pointer">
          {{ pro.name }}
          {{ countryFlag }}
        </p>
        <p class="text-xs mb-2 uppercase">{{ pro.roles.join(', ') }}</p>
        <p class="text-sm" v-text="pro.shortBio" />
      </div>
      <div class="flex items-center justify-between py-2">
        <div class="social__icons dark:social__icons--dark">
          <a v-if="pro.socials.facebook" :href="pro.socials.facebook">
            <img src="/vectors/facebook.svg" alt="facebook" />
          </a>
          <a v-if="pro.socials.twitter" :href="pro.socials.twitter">
            <img src="/vectors/twitter.svg" alt="Twitter" />
          </a>
          <a v-if="pro.socials.linkedin" :href="pro.socials.linkedin">
            <img src="/vectors/linkedin.svg" alt="Linkedin" />
          </a>
          <a v-if="pro.socials.github" :href="pro.socials.github">
            <img src="/vectors/github.svg" alt="Github" />
          </a>
        </div>
        <a
          v-if="pro.website"
          :href="pro.website"
          target="_blank"
          class="pro__action"
          >website</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pro: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    countryFlag() {
      return this.pro.nationality.countryCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    }
  }
}
</script>

<style lang="scss" scoped>
.pro-card {
  border-radius: 0.625rem;
  padding: 0.3125rem;

  .pro-pic__wrapper {
    @apply relative w-full cursor-pointer;
    overflow: hidden;
    border-radius: 0.625rem;
    height: 25rem;
    top: -1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  .pro-pic {
    @apply absolute left-0 right-0 top-0 w-full h-full;
    background-position: 50% 30%;
    background-size: cover;
    filter: saturate(0%) contrast(109%);
    transition: all 0.3s ease-in;
    overflow: hidden;

    &:hover {
      filter: saturate(110%) contrast(120%);
      transform: scale(1.15);
      // width: calc(100% - 0.625rem);
    }
  }
}
.social__icons {
  @apply flex items-center;

  a {
    @apply px-1;

    img {
      @apply h-5 w-5;
    }
  }
}

.pro__action {
  @apply py-1 px-3 text-sm mr-1 rounded-sm;
  border: 0.7px solid black;
}

.dark-mode {
  .social__icons.dark\:social__icons--dark {
    a img {
      filter: invert(1);
    }
  }
  .pro__action {
    border-color: white;
  }
}
</style>
