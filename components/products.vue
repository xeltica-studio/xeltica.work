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
          <nuxt-link v-else-if="p.link" :to="p.link" v-text="p.linkString || '詳しく見る'" />
          <external-link v-else-if="p.externalLink" :href="p.externalLink" target="_blank">
            {{ p.linkString || '詳しく見る' }}
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
      description: '2D ゲームに必要な機能、高い拡張性、シンプルな API を備えた次世代のゲームエンジン。',
      link: '/product/dotfeather.html'
    },
    {
      title: 'BotBone',
      description: 'Chatbot を気軽に作成できるフレームワーク。対応する全ての SNS で、同じモジュールが動作します。',
      link: '/product/botbone.html',
      wip: true
    },
    {
      title: 'ひとりすきー',
      description: 'SNS に疲れたあなたへ。独り言を気兼ねなく書ける、まったくあたらしい匿名マイクロブログ。',
      externalLink: 'https://hitorisskey.xeltica.work',
      linkString: '試してみる'
    },
    {
      title: 'Groundpolis',
      description: 'Misskey ベースの、楽しさ、新しさに重きを置いた、次世代のマイクロブログ。新天地を今すぐ体験しよう。',
      externalLink: 'https://groundpolis.app',
      linkString: '公式サーバーを見る'
    },
    {
      title: 'PaperStock',
      description: '組織向け、完全無料のオンプレミス型 プライベート Wiki エンジン。知見を書き溜め、共有しよう。',
      link: '/product/rainytune.html',
      footer: '鋭意開発中'
    },
    {
      title: 'RainyTune',
      description: '標準 MIDI 音源を読み込み、視覚的に再生。滴る雨粒が奏でる音色に、あなたも癒やされませんか。',
      link: '/product/rainytune.html',
      wip: true
    },
    {
      title: 'みす廃あらーと',
      description: '1日の Misskey での活動を集計、深夜0時に自動投稿する Misskey 連携アプリ。',
      externalLink: 'https://misshaialert.xeltica.work',
      linkString: '試してみる'
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
