<template functional>
  <section class="xd-card xd-fluid feature">
    <div class="icon">
      <font-awesome-icon :icon="props.icon" />
    </div>
    <div class="text">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'FeatureCard',
  functional: true,
  props: {
    icon: {
      required: true,
      type: Object
    }
  }
});
</script>

<style lang="scss" scoped>
.feature {
  padding: 16px;
  display: grid;
  grid-auto-columns: 64px 1fr;
  grid-auto-flow: column;
  gap: 32px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  > .icon {
    font-size: 48px;
    margin: 0 auto;
    opacity: 0.7;
  }

  > .text {
    > h1 {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 640px) {
    display: block;
  }
}
</style>
