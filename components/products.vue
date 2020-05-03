<template>
  <article class="skills">
    <h1>Skills</h1>
    <x-grid :data="skills" />
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SnsLinks from '@/components/sns-links.vue';

@Component({
  components: {
    SnsLinks
  }
})
export default class Product extends Vue { }
</script>

<style lang="scss" scoped>
.skills {
  background: $accent2;
  > h1 {
      font-size: 48px;
  }
}
</style>
