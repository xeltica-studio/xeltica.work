<template>
  <article class="_article _top">
    <h1>楽曲配布</h1>
    <p>Xeltica Music の楽曲を続々、無料配布しています。</p>
    <article id="tos">
      <h1>利用規約</h1>
      <p>
        なお、この規約に加えて、
        <nuxt-link to="/guideline.html">
          二次創作ガイドライン
        </nuxt-link>
        にも従う必要があります。本規約とガイドラインに矛盾する内容がある場合、許可事項・禁止事項どちらとも、こちらの本規約に従ってください。
      </p>
      <section id="allow">
        <h2>許可事項</h2>
        <p>以下に定める用途で使用することを、楽曲製作者であるXelticaの名前を併記する場合に限り許可します。</p>
        <ul>
          <li>私的に聞いて楽しむための複製</li>
          <li>再配布</li>
          <li>本楽曲を素材として用いたコンテンツの作成, 公開, 販売</li>
          <li>ゲームや動画のメインコンテンツとしての使用</li>
          <li>ゲームや動画のBGMに使用</li>
          <li>DJ プレイ</li>
        </ul>
      </section>
      <section id="deny">
        <h2>禁止事項</h2>
        <p>以下に定める用途は禁止致します。</p>
        <ul>
          <li>楽曲そのものの有料販売</li>
          <li>楽曲のクレジット無しに使用すること</li>
          <li>風評を激しく損なうような用途での使用</li>
          <li>反社会的勢力や政治家、宗教団体などによる使用</li>
          <li>アダルトコンテンツへの使用</li>
          <li>その他、Xelticaが不適切と判断する使用法</li>
        </ul>
      </section>
      <section id="other">
        <h2>その他</h2>
        <ul>
          <li>楽曲を使用したことによって発生した諸問題や紛争につきましては、Xelticaは一切責任を負いかねます。</li>
          <li>楽曲の著作権は放棄していません。</li>
          <li>本規約への違反を確認した場合、著作者である Xeltica は違反者に対し、法的措置を取ります。</li>
          <li>楽曲配布は、事前の予告無しに変更・停止することがございます。</li>
          <li>本規約は、事前の予告なしに変更することがございます。</li>
        </ul>
      </section>
      <section id="changelog">
        <h2>更新履歴</h2>
        <ul>
          <li>2020/5/15 改訂</li>
          <li>2019/12/24 初版</li>
        </ul>
      </section>
    </article>
    <article id="download">
      <div class="stack">
        <button v-if="!confirmed" class="primary mt-4" @click="confirmed = true">
          利用規約に同意する
        </button>
        <button v-if="!confirmed" class="mt-4" @click="$router.push('/')">
          同意しない
        </button>
      </div>
      <p v-if="confirmed">
        <external-link href="https://drive.google.com/open?id=1djTKdwtje1IhUJt-nYIjh-oZ-i4l5led">
          Google Driveからダウンロードする
        </external-link>
      </p>
    </article>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';
import { generateMeta } from '../misc/generate-meta';
import ExternalLink from '@/components/external-link.vue';

@Component({
  components: { ExternalLink }
})
export default class Songs extends Vue {
  data () {
    return {
      confirmed: false
    };
  }

  meta (): MetaInfo {
    return {
      title: '楽曲配布',
      meta: [...generateMeta('楽曲配布', 'Xeltica Music の楽曲を続々、無料配布しています。')]
    };
  }
}
</script>

<style lang="scss" scoped>
section {
  margin-top: 16px;
}
.stack {
  display: flex;
  > *:not(:last-child) {
    margin-right: 16px;
  }
}
</style>
