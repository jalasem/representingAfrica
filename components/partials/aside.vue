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
            class="font-medium text-gray-800 dark:text-gray-300"
            v-text="category"
          />
        </div>
      </div>
      <div class="my-4 max-w-xs">
        <p class="font-medium mb-1">From</p>
        <div
          class="max-w-sm box-shadow rounded bg-white dark:bg-gray-800 px-2 py-1"
        >
          <input
            list="nationality"
            class="w-full bg-transparent capitalize"
            name="select"
            :value="nationality"
            @change="chooseNationality($event)"
          />
          <datalist id="nationality" class="form-control">
            <option value="Africa">Africa</option>
            <option
              v-for="country in africanCountries"
              :key="`from-country-${country.alpha3Code}`"
              :value="country.name"
            />
          </datalist>
        </div>
      </div>
    </div>
    <div class="grid row-gap-5">
      <div class="my-4 max-w-xs">
        <div
          class="w-40 text-sm rounded bg-white dark:bg-gray-800 px-2 py-1 flex items-center"
        >
          <label
            for="theme-mode"
            class="theme-mode__label w-5 h-5 mr-2"
            :class="`${displayMode}-mode ${$colorMode.value}-theme`"
            v-text="''"
          />
          <select
            id="theme-mode"
            v-model="displayMode"
            class="bg-transparent w-full"
            @change="changeDisplayMode"
          >
            <option value="system">
              System Default
            </option>
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
          </select>
        </div>
      </div>
      <!-- <div class="flex items-center capitalize">
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
      </div> -->
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
import africanCountries from '~/assets/data/africa.json'
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
    countries,
    displayMode: '',
    africanCountries,
    nationality: 'africa',
    selectedCategories: []
  }),
  mounted() {
    this.displayMode = this.$colorMode.value
  },
  methods: {
    toggle() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
    },
    changeDisplayMode(e) {
      this.$colorMode.preference = e.target.value
    },
    chooseNationality(e) {
      console.log(e.target.value)
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

.theme-mode__label {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &.dark-theme {
    filter: invert(1);
  }
  &.system-mode {
    background-image: url('/vectors/system.svg');
  }
  &.dark-mode {
    background-image: url('/vectors/moon.svg');
  }
  &.light-mode {
    background-image: url('/vectors/sun.svg');
  }
}
</style>
