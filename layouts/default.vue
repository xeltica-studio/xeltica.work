<template>
  <div>
    <nav class="bar" :class="{ skeleton }">
      <h1>
        <nuxt-link v-if="$route.path !== '/'" to="/">
          Xeltica.work
        </nuxt-link>
        <span v-else>Xeltica.work</span>
      </h1>
    </nav>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Default extends Vue {
  skeleton = false;

  mounted () {
    if (this.$route.path === '/') {
      window.addEventListener('resize', this.updateState);
      window.addEventListener('scroll', this.updateState);
      this.$nextTick(() => {
        this.updateState();
      });
    }
  }

  beforeDestroy () {
    if (this.$route.path === '/') {
      window.removeEventListener('resize', this.updateState);
      window.removeEventListener('scroll', this.updateState);
    }
  }

  updateState () {
    this.skeleton = window.scrollY < window.innerHeight - 64;
  }
}
</script>

<style lang="scss" scoped>

.bar {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $barSize;
  padding: 0 64px;
  background: rgba($black, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  align-items: center;
  transition: background 0.5s ease;

  &.skeleton {
    background: transparent;
  }

  @media screen and (max-width: 640px) {
    padding: 0 16px;
  }

  a {
    color: $white;
    border-bottom: none;
  }

  > h1 {
      font-size: 1.5rem;
      margin: auto auto auto 0;
    }

  > .right {
    display: flex;
    list-style: none;
    > *:not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>
