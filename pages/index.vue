<template>
  <div>
    <x-jumbotron />
    <x-skills />
    <x-products />
    <x-discography />
    <x-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';
import XJumbotron from '@/components/jumbotron.vue';
import XSkills from '@/components/skills.vue';
import XProducts from '@/components/products.vue';
import XDiscography from '@/components/discography.vue';
import XFooter from '@/components/footer.vue';

@Component({
  components: {
    XJumbotron,
    XSkills,
    XProducts,
    XDiscography,
    XFooter
  }
})
export default class Index extends Vue {
}
</script>
