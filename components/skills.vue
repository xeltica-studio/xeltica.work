<template>
  <article class="skills _article">
    <h1>Skills</h1>
    <ul class="xd-cards">
      <li
        v-for="(skill, i) in programmingSkills"
        :key="i"
        class="xd-card pa-2"
        :class="{ expand: (currentExpandCard === skill.name), 'hide-on-mobile': i > 5 && collapsed }"
        @click="cardClicked(skill)"
      >
        <img :src="skill.icon" :alt="skill.name">
        <div class="desc">
          <h1>{{ skill.name }}</h1>
          <div
            v-if="skill.percentage"
            class="progress"
            :style="{ 'grid-template-columns': `${skill.percentage}% 1fr` }"
          >
            <div class="fill" />
            <div class="backdrop" />
          </div>
          <p v-if="skill.desc">
            {{ skill.desc }}
          </p>
        </div>
      </li>
    </ul>
    <button v-if="isMobile && collapsed" class="display-inline" @click="collapsed = false">
      もっと見る
    </button>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { programmingSkills, Skill } from '@/data/skills';

@Component({
  components: {
  }
})
export default class Jumbotron extends Vue {
  private currentExpandCard: string | null = null;
  private programmingSkills = programmingSkills;

  private isMobile = false;
  private collapsed = true;

  mounted () {
    if (!this.$isServer) {
      window.addEventListener('resize', this.resized);
      this.resized();
    }
  }

  beforeDestroy () {
    if (!this.$isServer) {
      window.removeEventListener('resize', this.resized);
    }
  }

  cardClicked (skill: Skill) {
    if (this.isMobile) { return; }
    this.currentExpandCard = this.currentExpandCard === skill.name ? null : skill.name;
  }

  resized () {
    this.isMobile = window.innerWidth < 640;
    if (this.isMobile) { this.currentExpandCard = null; }
  }
}
</script>

<style lang="scss" scoped>
.skills {
  background: $md-light-blue-700;
  > .xd-cards {
    > .xd-card {
      display: flex;
      width: 96px;
      height: 96px;
      cursor: pointer;
      transition: width 0.2s ease;
      user-select: none;

      &:hover {
        border-color: $md-grey-700;
      }

      > img {
        object-fit: contain;
        width: 64px;
        height: 64px;
        pointer-events: none;
      }
      > .desc {
        display: block;
        overflow: hidden;
        transition: all 0.2s ease;
        opacity: 0;
        width: 0;
        margin: 0;
        > h1 {
          font-size: 1.2rem;
          margin: 0;
        }
        > p {
          margin: 0;
        }
        > .progress {
          display: grid;
          margin: 8px 0;
          width: 100%;
          height: 4px;
          > .fill {
            background: $primary;
          }
          > .backdrop {
            background: $disabled-gray;
          }
        }
      }
      &.expand {
        width: 256px;
        > .desc {
          margin-left: 8px;
          width: 100%;
          opacity: 1;
        }
      }

      @media screen and (max-width: 640px) {
        cursor: default;
        width: 100%;
        margin-left: 48px;
        margin-right: 48px;
        text-align: left;
        > .desc {
          margin-left: 8px;
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
}
</style>
