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
          <span v-if="p.footer" v-text="p.footer " />
          <span v-else-if="p.wip">ページは工事中です。</span>
          <nuxt-link v-else-if="p.link" :to="p.link" v-text="p.linkString || '詳しく見る…'" />
          <external-link v-else-if="p.externalLink" :href="p.externalLink" target="_blank">
            {{ p.linkString || '詳しく見る…' }}
          </external-link>
        </div>
      </div>
    </div>
    <p>
      他にも、
      <external-link href="https://github.com/Xeltica">
        GitHub
      </external-link>
      に詳しい活動があります。
    </p>
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
      description: '2D ゲームに必要な機能、高い拡張性、シンプルな API を備えたゲームエンジン。',
      link: '/product/dotfeather.html',
      wip: true
    },
    {
      title: 'BotBone',
      description: 'Chatbot を気軽に作成できるフレームワーク。少ないコードで、多くのSNSに展開。',
      link: '/product/botbone.html',
      wip: true
    },
    {
      title: 'Groundpolis',
      description: '楽しさ、新しさに重きを置いた、次世代のマイクロブログ。新天地を今すぐ体験。',
      externalLink: 'https://groundpolis.app',
      linkString: '公式サーバーを見る'
    },
    {
      title: 'RainyTune',
      description: '標準 MIDI 音源を読み込み、視覚的に再生。滴る雨粒に癒やされませんか？',
      link: '/product/rainytune.html',
      wip: true
    },
    {
      title: 'PaperStock',
      description: '組織向け、完全無料、オンプレミス型プライベート Wiki エンジン。',
      link: '/product/rainytune.html',
      footer: '鋭意開発中'
    }

  ];
}

interface IProduct {
  title: string;
  description: string;
  link?: string;
  externalLink?: string;
  linkString?: string;
  wip?: boolean;
  footer?: string;
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
