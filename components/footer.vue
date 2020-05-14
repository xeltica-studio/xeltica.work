<template>
  <footer>
    <p>(C)2020 Xeltica.work All rights reserved.</p>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component({
  components: {
  }
})
export default class Product extends Vue { }
</script>

<style lang="scss" scoped>
footer {
  background: transparent;
  text-align: center;
  color: $disabled-gray;
}
</style>
