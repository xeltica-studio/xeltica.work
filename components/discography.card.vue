<template>
  <div :id="discography.title" class="xd-card">
    <img :src="discography.imgsrc" :alt="'jacket of ' + discography.title" class="media">
    <div class="body">
      <h1 v-text="discography.title" />
      <p v-text="discography.description" />
    </div>
    <div class="footer">
      <external-link v-if="discography.tunecore" :href="'https://linkco.re/' + discography.tunecore">
        お使いのサービスで入手
      </external-link>
      <external-link v-if="discography.bandcamp" :href="'https://xeltica.bandcamp.com/' + discography.bandcamp">
        BandCampで購入
      </external-link>
      <external-link v-if="discography.soundcloud" :href="'https://soundcloud.com/' + discography.soundcloud">
        SoundCloudで視聴
      </external-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Discography } from '../data/discographies';
import ExternalLink from '@/components/external-link.vue';

@Component({
  components: {
    ExternalLink
  }
})
export default class Card extends Vue {
  @Prop({ required: true }) discography!: Discography;
}
</script>

<style lang="scss" scoped>
.xd-card {
  width: 320px;
  > .body {
    > h1 {
      font-size: 1.8rem;
    }
  }
  > .footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > a:not(:last-child) {
      display: inline;
    }
  }
  @media screen and (max-width: 640px) {
    width: 100%;
  }
}
</style>
