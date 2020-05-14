<template>
  <div class="root">
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

<style lang="scss" scoped>
  .root {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: yellow;
    text-shadow: 0 0 4px yellow;
    width: 100vw;
    height: 100vh;

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
