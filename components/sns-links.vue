<template>
  <div class="links">
    <a v-for="(link, i) in linksData" :key="i" class="_button primary" :class="{ active: link.__x_visibility__ }" :href="link.href"><font-awesome-icon :icon="link.icon" /></a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Link } from '@/data/link';
import { delay } from '@/misc/delay';

@Component
export default class SnsLinks extends Vue {
    @Prop({ required: true }) private readonly links!: Link[];
    private linksData: Link[] = [];

    mounted () {
      this.linksData = this.links.map(l => ({ ...l }));
      this.$nextTick(async () => {
        for (let i = 0; i < this.links.length; i++) {
          await delay(90);
          Vue.set(this.linksData[i], '__x_visibility__', true);
        }
      });
    }
}
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  > a {
    display: inline-flex;
    width: 48px;
    height: 48px;
    font-size: 24px;
    margin: 8px;
    transform: translateY(32px);
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
    &:hover {
    color: white;
    background-color: $accent1;
    border-color: $accent1;
    }
    &.active {
      opacity: 1;
      transform: none;
    }
  }
}
</style>
