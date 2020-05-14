<template>
  <article class="discography _article">
    <h1>Discography</h1>
    <div class="xd-cards">
      <x-card v-for="(d, i) in discographies" :key="d.title" :class="{ 'hide-on-mobile': i > 1 && collapsed }" :discography="d" />
      <div class="xd-card free">
        <img src="~assets/discography/drive.png" alt="ドライブの画像" class="media">
        <div class="body">
          <h1>無料配布中</h1>
          <p>ほぼ全曲、無料で配信中です。二次創作にもお使いいただけます。</p>
        </div>
        <div class="footer">
          <nuxt-link to="/songs.html">
            詳しく見る...
          </nuxt-link>
        </div>
      </div>
    </div>
    <button v-if="collapsed" class="hide-on-pc hide-on-tablet ma-1 display-inline" @click="collapsed = false">
      もっと見る
    </button>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import XCard from './discography.card.vue';
import { discographies } from '@/data/discographies';

@Component({
  components: {
    XCard
  }
})
export default class Discography extends Vue {
  private discographies = discographies;
  private collapsed = true;
}
</script>

<style lang="scss" scoped>
.discography {
  background: $md-grey-900;
  > .xd-cards {
    display: flex;
    > .free {
      width: 320px;
    }
  }
}
</style>
