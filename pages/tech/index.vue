<template>
  <div class="page tech">
    <rep-aside title="Africans in Tech" :categories="filterRoles" />
    <main
      class="lg:pr-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-5 row-gap-8"
    >
      <african-pro
        v-for="africanPro in africanPros"
        :key="`portfolio-${africanPro.name.replace(' ', '-')}`"
        :pro="africanPro"
      />
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
  data() {
    return {
      africanPros: [
        {
          name: 'Abdulsamii Ajala',
          proPic: '/images/vuevocate.jpg',
          currentLocation: {
            city: 'Ilorin',
            country: 'Nigeria',
            countryCode: 'NG'
          },
          nationality: {
            country: 'Nigeria',
            countryCode: 'NG'
          },
          roles: [
            'UI Designer',
            'Frontend Engineer',
            'Technical Team Lead',
            'Manager'
          ],
          shortBio:
            'Self acclaimed Vue(ad)vocate, expert mentor and UI/UX hobbyist',
          socials: [
            {
              name: 'github',
              link: 'https://github.com/jalasem'
            },
            {
              name: 'facebook',
              link: 'https://facebook.com/jalasem'
            },
            {
              name: 'twitter',
              link: 'https://twiiter.com/vuevocate'
            },
            {
              name: 'linkedin',
              link: 'https://linkedin.com/in/jalasem'
            }
          ],
          website: 'https://abdulsamii.com'
        },
        {
          name: 'Ire Aderinokun',
          proPic: '/images/brenda.jpg',
          currentLocation: {
            city: 'Lagos',
            country: 'Nigeria',
            countryCode: 'NG'
          },
          nationality: {
            country: 'Nigeria',
            countryCode: 'NG'
          },
          roles: ['Lead Designer', 'Developer', 'Manager'],
          shortBio: 'Popularly referred to as the Nigerian Tech Queen',
          socials: [
            {
              name: 'github',
              link: 'https://github.com/jattoabdul'
            },
            {
              name: 'facebook',
              link: 'https://facebook.com/aminjatto'
            },
            {
              name: 'twitter',
              link: 'https://twiiter.com/jattorize'
            },
            {
              name: 'linkedin',
              link: 'https://linkedin.com/in/jattoade'
            }
          ],
          website: 'https://jatto.tech'
        },
        {
          name: 'Chris Nwamba',
          proPic: '/images/brenda.jpg',
          currentLocation: {
            city: 'New York',
            country: 'United State of America',
            countryCode: 'US'
          },
          nationality: {
            country: 'Nigeria',
            countryCode: 'NG'
          },
          roles: ['Lead Engineer', 'Developer', 'Manager'],
          shortBio: 'Popularly referred to as ....',
          socials: [
            {
              name: 'github',
              link: 'https://github.com/jattoabdul'
            },
            {
              name: 'facebook',
              link: 'https://facebook.com/aminjatto'
            },
            {
              name: 'twitter',
              link: 'https://twiiter.com/jattorize'
            },
            {
              name: 'linkedin',
              link: 'https://linkedin.com/in/jattoade'
            }
          ],
          website: 'https://jatto.tech'
        },
        {
          name: 'Brenda Apaokaji',
          proPic: '/images/brenda.jpg',
          currentLocation: {
            city: 'New York',
            country: 'United State of America',
            countryCode: 'US'
          },
          nationality: {
            country: 'Ghana',
            countryCode: 'GH'
          },
          roles: ['Lead Engineer', 'Developer', 'Manager'],
          shortBio: 'Popularly referred to as ....',
          socials: [
            {
              name: 'github',
              link: 'https://github.com/jattoabdul'
            },
            {
              name: 'facebook',
              link: 'https://facebook.com/aminjatto'
            },
            {
              name: 'twitter',
              link: 'https://twiiter.com/jattorize'
            },
            {
              name: 'linkedin',
              link: 'https://linkedin.com/in/jattoade'
            }
          ],
          website: 'https://jatto.tech'
        },
        {
          name: 'Prosper Otemuyiwa',
          proPic: '/images/brenda.jpg',
          currentLocation: {
            city: 'New York',
            country: 'United State of America',
            countryCode: 'US'
          },
          nationality: {
            country: 'Nigeria',
            countryCode: 'NG'
          },
          roles: ['Lead Engineer', 'Developer', 'Manager'],
          shortBio: 'Popularly referred to as ....',
          socials: [
            {
              name: 'github',
              link: 'https://github.com/jattoabdul'
            },
            {
              name: 'facebook',
              link: 'https://facebook.com/aminjatto'
            },
            {
              name: 'twitter',
              link: 'https://twiiter.com/jattorize'
            },
            {
              name: 'linkedin',
              link: 'https://linkedin.com/in/jattoade'
            }
          ],
          website: 'https://jatto.tech'
        },
        {
          name: 'Joseph Cobhams',
          proPic: '/images/brenda.jpg',
          currentLocation: {
            city: 'New York',
            country: 'United State of America',
            countryCode: 'US'
          },
          nationality: {
            country: 'Nigeria',
            countryCode: 'NG'
          },
          roles: ['Lead Engineer', 'Developer', 'Manager'],
          shortBio: 'Popularly referred to as ....',
          socials: [
            {
              name: 'github',
              link: 'https://github.com/jattoabdul'
            },
            {
              name: 'facebook',
              link: 'https://facebook.com/aminjatto'
            },
            {
              name: 'twitter',
              link: 'https://twiiter.com/jattorize'
            },
            {
              name: 'linkedin',
              link: 'https://linkedin.com/in/jattoade'
            }
          ],
          website: 'https://jatto.tech'
        }
      ]
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
