<template>
  <article class="skills">
    <h1>Skills</h1>
    <ul class="cards">
      <li v-for="skill in skills" :key="skill.name" class="card" :class="{ expand: currentExpandCard === skill.name }" @click="currentExpandCard = currentExpandCard === skill.name ? null : skill.name">
        <img :src="skill.icon" :alt="skill.name">
        <div class="desc">
          <h1>{{ skill.name }}</h1>
          <div class="progress" :style="{ 'grid-template-columns': `${skill.percentage}% 1fr` }">
            <div class="fill" />
            <div class="backdrop" />
          </div>
        </div>
      </li>
    </ul>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { skills } from '@/data/skills';

@Component({
  components: {
  }
})
export default class Jumbotron extends Vue {
  private skills = skills;
  private currentExpandCard: string | null = null;
}
</script>

<style lang="scss" scoped>
.skills {
  background: $accent2;
  > .cards {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -8px;
    padding: 8px;

    > .card {
      display: flex;
      background: white;
      width: 96px;
      height: 96px;
      box-shadow: 0 0 16px #666;
      border-radius: 8px;
      padding: 16px;
      margin: 8px;
      color: black;
      cursor: pointer;
      transition: all 0.2s ease;
      user-select: none;
      > img {
        object-fit: contain;
        pointer-events: none;
        width: 64px;
        height: 64px;
      }
      > .desc {
        display: block;
        overflow: hidden;
        transition: all 0.2s ease;
        margin-left: 8px;
        > h1 {
          font-size: 24px;
          margin: 0;
        }
        > p {
          margin: 0;
          font-size: 16px;
        }
        > .progress {
          display: grid;
          margin: 8px 0;
          width: 100%;
          height: 4px;
          > .fill {
            background: $accent1;
          }
          > .backdrop {
            background: #999;
          }
        }
      }
      &.expand {
        width: 256px;
        > .desc {
          width: 100%;
          opacity: 1;
        }
      }
    }
  }
}
</style>
