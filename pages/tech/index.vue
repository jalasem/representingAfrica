<template>
  <div class="page tech">
    <rep-aside title="Africans in Tech" :categories="filterRoles" />
    <main class="lg:pr-10 pt-10 pb-20">
      <div
        class="pro__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-5 row-gap-8"
      >
        <african-pro
          v-for="africanPro in africanPros"
          :key="`portfolio-${africanPro.name.replace(' ', '-')}`"
          :pro="africanPro"
        />
      </div>
    </main>
  </div>
</template>

<script>
import RepAside from '~/components/partials/aside'
import AfricanPro from '~/components/africanPro'

import africanPros from '~/assets/data/africanPros'
export default {
  name: 'Tech',
  components: {
    RepAside,
    AfricanPro
  },
  data() {
    return {
      africanPros
    }
  },
  computed: {
    filterRoles() {
      return [...new Set(this.africanPros.map((pro) => pro.roles).flat(1))]
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  @apply grid col-gap-12 mx-auto;
  grid-template-columns: 15rem 1fr;
  max-width: 1700px;

  main {
    @apply h-screen overflow-y-auto;
  }
}
</style>
