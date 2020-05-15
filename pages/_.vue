<template>
  <div class="centerized">
    <div class="xd-slide-in">
      <h1>404 NOT <span class="burnt-out">FOUND</span></h1>
      <p class="my-5">
        この<span class="xd-blink">ページ</span>は
        <span class="xd-tilt-20">
          <span class="xd-big">存在</span>
          <span class="xd-tilt--40">しません！</span>
        </span>
      </p>
      <nuxt-link to="/">
        トップページへ戻る
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
@Component
export default class NotFound extends Vue {
  // リダイレクトすべきURLのマッピング
  // アクセス先のURL, リダイレクトすべきURL
  readonly legacyMap = [
    ['/char/guideline.html', '/guideline.html']
  ];

  created () {
    for (const [now, dest] of this.legacyMap) {
      if (this.$route.path === now) {
        this.$router.replace(dest);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .centerized {
    color: yellow;
    text-shadow: 0 0 4px yellow;

    .burnt-out {
      text-shadow: 0 0 3px gray;
      color: black;
    }

    .xd-big {
      color: red;
      text-shadow: 4px 0 8px red;
    }
  }
</style>
