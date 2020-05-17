<template>
  <div
    class="aside flex flex-col h-full"
    :class="{ dark: $colorMode.value === 'dark' }"
  >
    <div class="flex-grow">
      <h1 class="page__title text-4xl font-bold leading-10" v-text="title" />
      <div
        class="aside__search flex items-center h-10 bg-white dark:bg-gray-800 px-2 mb-3"
      >
        <img src="/vectors/search.svg" alt="search" />
        <input
          class="self-stretch flex-grow bg-transparent focus:outline-none font-medium"
          spellcheck="false"
          placeholder="Search"
          type="search"
        />
      </div>
      <div class="my-4">
        <div
          v-for="(category, categoryIndex) in categories"
          :key="`aside-category-${categoryIndex}`"
          class="flex items-center mb-2"
        >
          <div
            class="flex box-shadow bg-white dark:bg-gray-800 mr-3 rounded w-5 h-5 flex flex-shrink-0 justify-center items-center focus-within:border-blue-500"
          >
            <input
              :id="`aside-category-${categoryIndex}`"
              v-model="selectedCategories"
              class="opacity-0 absolute"
              :name="`aside-category-${categoryIndex}`"
              type="checkbox"
              :value="category"
            />
            <svg
              class="fill-current hidden w-4 h-4 text-gray-600 dark:text-gray-400 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          </div>
          <label
            :for="`aside-category-${categoryIndex}`"
            class="font-medium"
            v-text="category"
          />
        </div>
      </div>
      <div class="my-4">
        <p class="font-medium mb-1">Nationality</p>
        <select class="max-xs">
          <option value="all">African</option>
          <option
            v-for="(country, countryIndex) in africanCountries"
            :key="`from-country-${countryIndex}`"
            :value="country"
            v-text="country"
          />
        </select>
      </div>
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
import countries from '~/assets/data/countries'
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      default: () => [
        'Executive',
        'Founder',
        'Graphic Designer',
        'UI/UX Designer',
        'Product Designer',
        'Data Analyst',
        'Machine Learning',
        'Artificial Intelligence',
        'Cyber Security',
        'Animator',
        'Fintech',
        'Devops',
        'Writer',
        'Entrepreneur'
      ]
    }
  },
  data: () => ({
    selectedCategories: []
  }),
  computed: {
    africanCountries() {
      return countries
        .filter(
          (country) =>
            country.continent && country.continent.toLowerCase() === 'africa'
        )
        .map(({ country }) => country)
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
.page__title {
  @apply mb-8;
}
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

.aside__search {
  box-shadow: 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.169894);
  border-radius: 0.5rem;

  img {
    @apply mr-2;
  }
}

input:checked + svg {
  display: block;
}
</style>
