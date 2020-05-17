<template>
  <div class="page tech py-5 px-5 lg:px-10">
    <rep-aside title="Africans in Tech" />
    <main>
      People
    </main>
  </div>
</template>

<script>
import RepAside from '~/components/partials/aside'
export default {
  name: 'Tech',
  components: {
    RepAside
  }
}
</script>

<style lang="scss" scoped>
.page {
  @apply py-5  h-screen grid col-gap-10;
  grid-template-columns: 15rem 1fr;
}
</style>
