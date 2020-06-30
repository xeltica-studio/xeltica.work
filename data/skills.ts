const programmingSkill = (name: string, icon: string, percentage: number): Skill => ({ name, icon, percentage });
const otherSkill = (name: string, icon: string, desc = ''): Skill => ({ name, icon, desc });

export interface Skill {
  name: string;
  icon: string;
  percentage?: number;
  desc?: string;
}

export const programmingSkills: Skill[] = [

  programmingSkill('C#', require('@/assets/skills/csharp.svg'), 100),
  programmingSkill('CSS', require('@/assets/skills/css.svg'), 42),
  programmingSkill('HTML', require('@/assets/skills/html.svg'), 87),
  programmingSkill('JavaScript', require('@/assets/skills/js.svg'), 38),
  programmingSkill('Node.js', require('@/assets/skills/nodejs.png'), 72),
  programmingSkill('Nuxt.js', require('@/assets/skills/nuxt.svg'), 75),
  programmingSkill('Firebase', require('@/assets/skills/firebase.png'), 67),
  programmingSkill('Pixi.js', require('@/assets/skills/pixi.png'), 60),
  programmingSkill('Pug', require('@/assets/skills/pug.svg'), 57),
  programmingSkill('React', require('@/assets/skills/react.svg'), 40),
  programmingSkill('Sass(SCSS)', require('@/assets/skills/sass.png'), 84),
  programmingSkill('TypeScript', require('@/assets/skills/ts.svg'), 100),
  programmingSkill('Unity', require('@/assets/skills/unity.svg'), 60),
  programmingSkill('Vue', require('@/assets/skills/vue.svg'), 72),
  programmingSkill('Xamarin', require('@/assets/skills/xamarin.svg'), 71)

].sort((a, b) => (b.percentage || 0) - (a.percentage || 0));

export const otherSkills: Skill[] = [

  otherSkill('Logic Pro X', require('@/assets/skills/logicx.png')),
  otherSkill('Aseprite', require('@/assets/skills/aseprite.png')),
  otherSkill('Visual Studio Code', require('@/assets/skills/vscode.png')),
  otherSkill('Adobe CC', require('@/assets/skills/cc.png'))

].sort((a, b) => (b.percentage || 0) - (a.percentage || 0));
