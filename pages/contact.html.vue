<template>
  <div>
    <article class="_article _top">
      <h1>仕事上の連絡先</h1>
      <p>この度は、私 Xeltica を見つけて頂き、ありがとうございます。</p>
      <h2>御挨拶</h2>
      <p>まず始めに、軽い自己紹介をさせてください。</p>
      <p>私は横浜市に住む、現役の大学4年生です。就職活動の傍ら、COVID-19 の影響によってオンラインで授業を受講しつつ、仕事探しに明け暮れているといった現状です。</p>
      <p>
        できることはトップページに書いたとおりですが、基本的に学習するお時間を頂ければ勉強します。
        このウェブサイトも Nuxt.js で作りましたが、Nuxt.js の知見は、殆ど何もわからないうちに実務案件を引き受けることになったときに身に着けました。
      </p>
      <h2>連絡先</h2>
      <p>お仕事の打ち合わせは、基本的にメールなどによって、オンラインにて一対一で行っています。次の連絡先のいずれかでお願いします。</p>
      <dl>
        <dt>メール</dt>
        <dd><a href="mailto:xeltica@gmail.com">xeltica@gmail.com</a></dd>
        <dt>Twitter</dt>
        <dd><a href="https://twitter.com/Xeltica">@Xeltica</a></dd>
      </dl>
    </article>
    <x-footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta';
import { generateMeta } from '../misc/generate-meta';

import XFooter from '@/components/footer.vue';

@Component({
  components: {
    XFooter
  }
})
export default class Contact extends Vue {
  head (): MetaInfo {
    return {
      title: '仕事上の連絡先',
      meta: [...generateMeta('仕事上の連絡先')]
    };
  }
}
</script>
