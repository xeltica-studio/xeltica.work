<template>
  <header class="jumbotron">
    <div class="jumbotron-inner">
      <h1>Xeltica</h1>
      <p>
        ソフトウェア開発、作曲、編曲、ゲーム、料理などいろいろやってはいるけれど、
        ひとことで言うならば創作が好き、そんな学生を営んでいます。
      </p>
      <sns-links :links="links" />
      <div class="buttons">
        <nuxt-link to="/contact.html" class="xd-button primary xd-slide-in">
          仕事を依頼する
        </nuxt-link>
        <nuxt-link to="/donation.html" class="xd-button xd-slide-in">
          寄付
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import SnsLinks from '@/components/sns-links.vue';

import { links } from '@/data/links';

@Component({
  components: {
    SnsLinks
  }
})
export default class Jumbotron extends Vue {
  private readonly links = links;
}
</script>

<style lang="scss" scoped>
.jumbotron {
  background: url('~assets/backdrop.jpg');
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

@media screen and (max-width: 900px) {
  .jumbotron {
    > .jumbotron-inner {
      padding: $barSize 32px;
    }
  }
}
</style>
