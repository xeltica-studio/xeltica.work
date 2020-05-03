<template>
  <div class="container">
    <nav class="bar">
      <h1>Xeltica.work</h1>
    </nav>
    <x-jumbotron />
    <x-skills />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import XJumbotron from '@/components/jumbotron.vue';
import XSkills from '@/components/skills.vue';

@Component({
  components: {
    XJumbotron,
    XSkills
  }
})
export default class Index extends Vue { }
</script>

<style lang="scss" scoped>

.bar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $barSize;
  padding: 16px 64px;
  background: rgba(#222, 0.7);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  align-items: center;

> h1 {
    font-size: 18px;
    margin-right: auto;
  }

  > a {
    margin: 0 8px;
    text-decoration: none;
    text-transform: uppercase;
    color: inherit;
    opacity: 0.6;
    &:hover {
      color: $accent1;
    }

  }
}
</style>
