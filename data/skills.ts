import { Skill } from './skill';

const s = (name: string, icon: string, percentage: number): Skill => ({ name, icon, percentage });

export const skills: Skill[] = [

  s('C#', require('@/assets/skills/csharp.svg'), 100),
  s('CSS', require('@/assets/skills/css.svg'), 60),
  s('HTML', require('@/assets/skills/html.svg'), 56),
  s('JavaScript', require('@/assets/skills/js.svg'), 50),
  s('Node.js', require('@/assets/skills/nodejs.png'), 70),
  s('Nuxt.js', require('@/assets/skills/nuxt.svg'), 68),
  s('Pixi.js', require('@/assets/skills/pixi.png'), 58),
  s('Pug', require('@/assets/skills/pug.svg'), 84),
  s('React', require('@/assets/skills/react.svg'), 40),
  s('Sass(SCSS)', require('@/assets/skills/sass.png'), 84),
  s('TypeScript', require('@/assets/skills/ts.svg'), 100),
  s('Unity', require('@/assets/skills/unity.svg'), 60),
  s('Vue', require('@/assets/skills/vue.svg'), 82),
  s('Xamarin', require('@/assets/skills/xamarin.svg'), 80)

].sort((a, b) => b.percentage - a.percentage);
