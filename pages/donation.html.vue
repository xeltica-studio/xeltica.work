<template>
  <div>
    <article class="_article _top">
      <h1>寄付</h1>
      <p>Xeltica は、自身の活動を全て趣味として続けています。また、サーバーの維持費や開発機材の購入など、多くのコストが発生しています。</p>
      <p>私の活動に感銘を受け、お金を落としたいという方の為に、いくつか寄付の手段があります。</p>
      <div class="xd-cards">
        <div class="xd-card">
          <img src="~assets/kyash.png" alt="kyash qr" class="media">
          <div class="body">
            <h1>Kyash</h1>
          </div>
          <div class="footer">
            <a href="kyash://qr/u/3702122165913462930">Kyash アプリを開く</a>
          </div>
        </div>
        <div class="xd-card">
          <div class="body">
            <h1>楽曲</h1>
            <p>
              <nuxt-link to="/">
                トップページ
              </nuxt-link>にある曲をご購入いただくと、いくらかの収入になります。
            </p>
          </div>
        </div>
        <div class="xd-card">
          <div class="body">
            <h1>欲しい物</h1>
            <p>Amazon 欲しい物リストを公開しています。</p>
          </div>
          <div class="footer">
            <div>
              <external-link href="https://www.amazon.jp/hz/wishlist/ls/12PXP20O6ALMA">
                リスト①
              </external-link>
            </div>
            <div>
              <external-link href="https://www.amazon.jp/hz/wishlist/ls/23CD9KAJC1GBM">
                リスト②
              </external-link>
            </div>
          </div>
        </div>
      </div>
    </article>
    <x-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';
import { generateMeta } from '../misc/generate-meta';
import XFooter from '@/components/footer.vue';
import ExternalLink from '@/components/external-link.vue';

@Component({
  components: {
    XFooter,
    ExternalLink
  }
})
export default class Donation extends Vue {
  public head (): MetaInfo {
    return {
      title: '寄付',
      meta: [...generateMeta('寄付')]
    };
  }
}
</script>

<style lang="scss" scoped>
.xd-card {
  width: 256px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
}
</style>
