<template>
  <article class="products _article">
    <h1>Recent Products</h1>
    <div class="xd-cards">
      <div v-for="p in products" :key="p.title" class="xd-card">
        <div class="body">
          <h1 v-text="p.title" />
          <p v-text="p.description" />
        </div>
        <div class="footer">
          <nuxt-link v-if="p.link" :to="p.link" v-text="p.linkString || '詳しく見る…'" />
          <external-link v-if="p.externalLink" :href="p.externalLink" target="_blank">
            {{ p.linkString || '詳しく見る…' }}
          </external-link>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import ExternalLink from '@/components/external-link.vue';

@Component({
  components: {
    ExternalLink
  }
})
export default class Product extends Vue {
  private faExternalLinkAlt = faExternalLinkAlt;
  private products: IProduct[] = [
    {
      title: 'DotFeather',
      description: '2D ゲームに必要な機能、高い拡張性、シンプルな API を備えた C# と .NET の為のゲームエンジン。',
      link: '/product/dotfeather.html'
    },
    {
      title: 'BotBone',
      description: 'chatbot を気軽に作成できるフレームワーク。モジュールベースで、数種類のソーシャルメディアに展開。',
      link: '/product/botbone.html'
    },
    {
      title: 'Groundpolis',
      description: 'ActivityPub 準拠、楽しい機能に重きを置いた、次世代のマイクロブログ。新天地をこの目で体験しよう。',
      externalLink: 'https://groundpolis.app',
      linkString: '公式サーバーを見る'
    }

  ];
}

interface IProduct {
  title: string;
  description: string;
  link?: string;
  externalLink?: string;
  linkString?: string;
}
</script>

<style lang="scss" scoped>
.products {
  background: $md-light-blue-900;
  .xd-cards {
    .xd-card {
      width: 360px;
    }
  }
}
</style>
