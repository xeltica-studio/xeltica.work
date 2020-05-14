<template>
  <div class="links">
    <a
      v-for="(link, i) in linksData"
      :key="i"
      class="xd-button primary"
      :class="{ active: link.__x_visibility__ }"
      :href="link.href"
    >
      <font-awesome-icon :icon="link.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { delay } from '@/misc/delay';
import { Link } from '@/data/links';

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
    margin: 8px;
    font-size: 24px;
    transform: translateY(32px);
    border-radius: 24px;
    opacity: 0;
    transition: opacity 1s ease, transform 1s ease;
    &:hover {
    color: $white;
    background-color: $primary;
    border-color: $primary;
    }
    &.active {
      opacity: 1;
      transform: none;
    }
  }
}
</style>
