<template>
  <div class="page tech">
    <rep-aside title="Africans in Tech" />
    <main
      class="lg:pr-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-5 row-gap-8"
    >
      <african-pro
        :countries="['NG', 'US']"
        name="Abdulsamii Ajala"
        pro-role="Senior Frontend Developer"
        short-bio="Self acclaimed Vue(ad)vocate, expert mentor and UI/UX hobbyist"
        pro-pic="/images/vuevocate.jpg"
      />
      <african-pro v-for="i in 79" :key="i" />
    </main>
  </div>
</template>

<script>
import RepAside from '~/components/partials/aside'
import AfricanPro from '~/components/africanPro'
export default {
  name: 'Tech',
  components: {
    RepAside,
    AfricanPro
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
