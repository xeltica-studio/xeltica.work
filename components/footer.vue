<template>
  <footer>
    <p>(C)2020 Xeltica.work All rights reserved.</p>
    <ul>
      <li>
        <external-link href="https://github.com/Xeltica/xeltica.work">
          リポジトリ
        </external-link>
      </li>
      <li>
        <nuxt-link to="guideline.html">
          利用規約
        </nuxt-link>
      </li>
    </ul>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ExternalLink from '@/components/external-link.vue';

@Component({
  components: {
    ExternalLink
  }
})
export default class Product extends Vue { }
</script>

<style lang="scss" scoped>
footer {
  background: transparent;
  text-align: center;
  color: $disabled-gray;
  a {
    color: inherit;
    border: none;
  }
  > ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    > li {
      &:not(:last-child):after {
        content: '・';
        margin-left: 4px;
        margin-right: 4px;
      }
    }
  }
}
</style>
