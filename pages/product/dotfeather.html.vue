<template>
  <div class="root">
    <header class="jumbotron">
      <div class="jumbotron-inner">
        <h1>DotFeather</h1>
        <p>
          パワフルを、シンプルに。令和時代の2Dゲームエンジン。
        </p>
        <div class="buttons">
          <external-link href="https://www.nuget.org/packages/DotFeather/" class="xd-button primary xd-slide-in">
            ダウンロード
          </external-link>
          <external-link href="https://xeltica.github.io/DotFeather/docs/ja" class="xd-button xd-slide-in">
            ドキュメント
          </external-link>
        </div>
      </div>
    </header>
    <article id="main" class="_article ">
      <img src="~assets/products/df-example1.png" class="display-block mx-auto" style="width: 752px; margin-top: -14rem">
      <p>
        DotFeather は、2D グラフィックのゲームを作る為の、最も良いアプローチです。
        グラフィック、オーディオ、インプットと、ゲームを作るのに必要最低限な機能を、わかりやすくシンプルな API で用意しました。
      </p>
      <h2>DotFeather の特徴</h2>
      <div class="cards">
        <div class="xd-card">
          <div class="body">
            <h1>軽量</h1>
            <p>
              ゲームエンジンに求められるのは、やはり速度です。DotFeatherは毎秒 20000 スプライトを 60 fpsで表示できます。ウィンドウ範囲外の描画は行わないカリング処理も予め組み込まれているので、自前でプログラミングする必要がありません。
            </p>
          </div>
        </div>
        <div class="xd-card">
          <div class="body">
            <h1>拡張性</h1>
            <p>
              DotFeather に備えている機能は、ゲームを作るという目的に汎用的で、最低限のものに留めています。独自の音声フォーマットや、タイルマップ用の特殊なタイルの実装など、プラグインを用いて機能を拡張できます。
            </p>
          </div>
        </div>
        <div class="xd-card">
          <div class="body">
            <h1>フリー</h1>
            <p>
              巷の多くのゲームエンジンは有料、あるいはプロプライエタリなフリーソフトであることが多いです。DotFeather は、完全に無料でご利用いただけます。ソースコードも公開しています。
            </p>
          </div>
          <div class="footer">
            <external-link href="https://github.com/Xeltica/DotFeather">
              ソースコードを見る
            </external-link>
          </div>
        </div>
      </div>
    </article>

    <article id="features" class="_article">
      <h1>機能</h1>
      <x-feature-card :icon="faPaintBrush">
        <h1>Drawable</h1>
        <p>DotFeather では、画面上の描画要素を Drawable という概念で表現しています。Drawable にはいくつかの種類があります。</p>
        <dl>
          <dt>スプライト</dt>
          <dd>1枚のテクスチャを表す Drawable</dd>
          <dt>タイルマップ</dt>
          <dd>タイルを縦横に敷き詰めて表示する Drawable</dd>
          <dt>グラフィック</dt>
          <dd>線分、矩形、円などの図形を自由に描画できる Drawable</dd>
          <dt>テキスト</dt>
          <dd>文字列を描画できる Drawable。自前のフォントを使うこともできる</dd>
          <dt>コンテナー</dt>
          <dd>他の Drawable を格納する Drawable。指定した領域からはみ出た子要素をクリッピングする機能もある</dd>
        </dl>
      </x-feature-card>
      <x-feature-card :icon="faVolumeUp">
        <h1>オーディオ</h1>
        <p>Audio API は強力なオーディオ制御機能を提供します。標準で .wav .ogg 形式をサポート。プラグインを用いて、対応するフォーマットを増やすこともできます。もちろん、<strong>イントロ付きループ音楽</strong>にも対応。</p>
      </x-feature-card>
      <x-feature-card :icon="faFilm">
        <h1>シーン管理</h1>
        <p>ゲームは普通、タイトル、ゲームパート、エンディングといった、シーンに分けられます。DotFeather では、シーンをクラス定義し、シーン切り替えを制御する機能が標準装備されています。</p>
      </x-feature-card>
      <x-feature-card :icon="faStar">
        <h1>その他</h1>
        <p>他にも、キーボード/マウス、スクリーンショット撮影、コルーチン、補完移動の演算など、便利機能が揃っています。</p>
      </x-feature-card>
    </article>
    <article id="work" class="_article">
      <h1>採用事例</h1>
      <p>DotFeather 開発チームは、DotFeather を用いて作られた作品を募集しています！あなたの作品をこのページに掲載しませんか？</p>
    </article>
    <article id="donation" class="_article">
      <h1>開発者へのサポート</h1>
      <p>
        DotFeather は永久に無料で、ロイヤリティフリーでご利用頂ける、自由なソフトウェアです。
        開発者に月イチのチョコレートを恵んでくれたら...もっと素敵なゲームエンジンに成長するかもしれません。
      </p>
      <external-link class="xd-button display-inline-flex primary" href="https://www.patreon.com/Xeltica">
        Pateron で寄付する
      </external-link>
    </article>
    <article id="download" class="_article">
      <h1>ダウンロード</h1>
      <p>DotFeather は、NuGet パッケージマネージャを用いてすぐにダウンロードできます。.NET CLIなら次のコマンドを実行してください。</p>
      <pre><code>dotnet add package DotFeather</code> </pre>
      <p>
        または...
        <external-link href="https://nuget.org/packages/DotFeather">
          NuGetから入手する
        </external-link>
      </p>
    </article>
    <x-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { faPaintBrush, faVolumeUp, faFilm, faStar } from '@fortawesome/free-solid-svg-icons';
import ExternalLink from '@/components/external-link.vue';
import XFooter from '@/components/footer.vue';
import XFeatureCard from '@/components/products/dotfeather/feature-card.vue';

@Component({
  components: {
    ExternalLink,
    XFooter,
    XFeatureCard
  }
})
export default class Jumbotron extends Vue {
  private faPaintBrush = faPaintBrush;
  private faVolumeUp = faVolumeUp;
  private faFilm = faFilm;
  private faStar = faStar;
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background: linear-gradient($md-blue-500, $md-blue-100);
  background-size: cover;
  height: 100vh;
  > .jumbotron-inner {
    display: flex;
    flex-direction: column;
    padding: $barSize 192px;
    text-align: center;
    height: 100%;
    background: rgba(#212121, 0.45);
    justify-content: center;

    h1 {
      font-size: 3em;
    }

    > .buttons {
      display: flex;
      margin-top: 32px;
      justify-content: center;
      > *:not(:first-child) {
        margin-left: 8px;
      }
    }
  }
}

.root {
  background: $md-grey-900;
}

article {
  text-align: left;
}

dd {
  margin-left: 2rem;
}

.cards {
  display: flex;
  justify-content: space-between;
  >* {
    flex: 1;
    margin: 8px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
}

@media screen and (max-width: 900px) {
  .jumbotron {
    > .jumbotron-inner {
      padding: $barSize 32px;
    }
  }
}
</style>
