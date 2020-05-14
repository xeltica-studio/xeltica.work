<template>
  <a>
    <slot />
    <font-awesome-icon :icon="faExternalLinkAlt" class="external-icon" />
  </a>
</template>

<script lang="ts">
import Vue from 'vue';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
export default Vue.extend({
  data () { return { faExternalLinkAlt }; }
});
</script>

<style lang="scss" scoped>
  .external-icon {
    font-size: 70%;
    // vertical-align: super;
  }
</style>
