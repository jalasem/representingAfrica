<template>
  <div class="page tech">
    <rep-aside title="Africans in Tech" :categories="filterRoles" />
    <main class="lg:pr-10 pt-10 pb-20">
      <div v-if="filteredPros.length <= 0">
        <p>No result found</p>
      </div>
      <div
        v-else
        class="pro__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-5 row-gap-8"
      >
        <african-pro
          v-for="africanPro in filteredPros"
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

export default {
  name: 'Tech',
  components: {
    RepAside,
    AfricanPro
  },
  async asyncData({ app }) {
    try {
      const pros = await app.flamelink.content.get({
        schemaKey: 'africanTechPros',
        populate: true
      })
      const africanPros = Object.keys(pros).map((proKey) => {
        const proObj = pros[proKey]
        proObj.id = proKey
        proObj.proPic = proObj.proPic && proObj.proPic[0].url
        delete proObj._fl_meta_
        return proObj
      })
      return { africanPros, filteredPros: africanPros }
    } catch (err) {
      return { africanPros: [] }
    }
  },
  data() {
    return {
      searchTerm: null,
      roleFilterTerm: null,
      countryFilterTerm: 'Africa',
      filteredPros: [],
      options: {
        threshold: 0.3,
        minMatchCharLength: 2,
        // defaultAll: true,
        tokenize: true,
        findAllMatches: true,
        keys: ['name', 'bio', 'shortBio']
      }
    }
  },
  computed: {
    filterRoles() {
      if (!this.africanPros || this.africanPros.length < 1) return []
      return [...new Set(this.africanPros.map((pro) => pro.roles).flat(1))]
    }
  },
  mounted() {
    this.$eventBus.$on('clear', () => {
      this.searchTerm = null
      this.filterPros(
        this.searchTerm,
        this.roleFilterTerm,
        this.countryFilterTerm
      )
    })
    this.$eventBus.$on('search', (payload) => {
      this.searchTerm = payload
      this.filterPros(
        this.searchTerm,
        this.roleFilterTerm,
        this.countryFilterTerm
      )
    })
    this.$eventBus.$on('filterRoles', (payload) => {
      this.roleFilterTerm = payload
      this.filterPros(
        this.searchTerm,
        this.roleFilterTerm,
        this.countryFilterTerm
      )
    })
    this.$eventBus.$on('filterNation', (payload) => {
      this.countryFilterTerm = payload
      this.filterPros(
        this.searchTerm,
        this.roleFilterTerm,
        this.countryFilterTerm
      )
    })
  },
  beforeDestroy() {
    this.$eventBus.$off('clear')
    this.$eventBus.$off('search')
    this.$eventBus.$off('filterRoles')
    this.$eventBus.$off('filterNation')
  },
  methods: {
    async reFetchPros() {
      try {
        const pros = await this.$root.context.app.flamelink.content.get({
          schemaKey: 'africanTechPros',
          populate: true
        })
        const africanPros = Object.keys(pros).map((proKey) => {
          const proObj = pros[proKey]
          proObj.id = proKey
          proObj.proPic = proObj.proPic && proObj.proPic[0].url
          delete proObj._fl_meta_
          return proObj
        })
        this.africanPros = africanPros
      } catch (err) {
        this.africanPros = []
      }
    },
    async filterPros(searchTerm, roleFilterTerm, countryFilterTerm) {
      this.filteredPros = this.africanPros

      if (searchTerm) {
        // perform search
        await this.$search(
          this.searchTerm,
          this.africanPros,
          this.options
        ).then((results) => {
          this.filteredPros = results
        })
      }

      if (roleFilterTerm && roleFilterTerm.length > 0) {
        // filter africanPros by roles
        this.filteredPros = this.filteredPros.filter((pro) => {
          return pro.roles.some((role) => roleFilterTerm.includes(role))
        })
      }

      if (countryFilterTerm !== 'Africa') {
        await this.$search(countryFilterTerm, this.filteredPros, {
          ...this.options,
          ...{ keys: ['nationality.country', 'currentLocation.country'] }
        }).then((results) => {
          this.filteredPros = results
        })
      }

      return this.filteredPros
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
