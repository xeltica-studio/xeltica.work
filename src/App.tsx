import styled from '@emotion/styled';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useEffect, useMemo, useState } from 'react';
import 'xeltica-ui/dist/css/xeltica-ui.min.css';
import './style.scss';
import {
  Article,
  Chevron,
  dotFeatherStyle,
  Footer,
  Header,
  headerStyle,
  hitorisskeyStyle,
  misshaiStyle,
  parallaxBackgroundStyle,
  profileCardMobileStyle,
  profileCardStyle, xelticaMcStyle
} from './styles';
import XelticaSymbol from './XelticaSymbol';

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  gap: 12px;

  > li {
    padding: 4px 8px;
    border-radius: var(--radius);
    background: var(--panel);
    box-shadow: 0 1px 4px var(--shadow-color);
  }
`;

export const App = () => {
  const [ width, setWidth ] = useState(document.documentElement.clientWidth);
  const isMobile = useMemo(() => width <= 600, [width]);

  // 幅の取得
  useEffect(() => {
    const ro = new ResizeObserver((e) => {
      setWidth(e[0].contentRect.width);
    });
    ro.observe(document.documentElement);
    return () => {
      ro.disconnect();
    }
  }, []);

  return (
    <>
      <header css={[headerStyle, parallaxBackgroundStyle]}>
        <div className={`hero ${isMobile ? '' : 'container'} text-center`}>
          <XelticaSymbol style={{fontSize: '6rem', fill: 'var(--white)', filter: 'drop-shadow(0 2px 8px var(--black))', marginBottom: '24px'}} />
          <h1>Xeltica Studio</h1>
          <p>Xelticaにしか作れないものを。</p>
          <div className="flex f-center" style={{flexWrap: 'wrap', gap: 12}}>
            <a href="https://twitter.com/xeltica" target="_blank" rel="noopener noreferrer" className="btn primary" style={{'--primary': '#1DA1F2'} as any}>
              <i className="bi bi-twitter mr-1" />
              Twitter
            </a>
            <a href="https://blog.xeltica.work" target="_blank" rel="noopener noreferrer" className="btn primary" style={{'--primary': '#21759b'} as any}>
              <i className="bi bi-newspaper mr-1" />
              Blog
            </a>
            <a href="https://www.youtube.com/channel/UCEJpWNY5kqXLREmX7FjLzyg" target="_blank" rel="noopener noreferrer" className="btn primary" style={{'--primary': '#CD201F'} as any}>
              <i className="bi bi-youtube mr-1" />
              YouTube
            </a>
          </div>
          <Chevron className="bi bi-chevron-down"/>
        </div>
      </header>
      <Header className="mt-4 shadow-3" id="about">MEMBER</Header>
      <Article className="container vstack">
        <div className="card shadow-3" css={isMobile ? profileCardMobileStyle : profileCardStyle}>
          <div className="icon clickable">
            <img src="/icon.png" alt="icon" className="shadow-3" />
          </div>
          <div className="body pa-4 profile">
            <h1>海老瀬るちか</h1>
            <p>
              横浜生まれ・横浜育ちのウェブエンジニア。
              エビフライ、焼きサーモンが好き。在宅でウェブエンジニアをしながら、スキマ時間にいろいろな活動をしている。
            </p>
            <p>エンジニア歴{new Date().getFullYear() - 2011}年。</p>

            <div className="hstack" style={{lineHeight: 1}}>
              <a href="https://twitter.com/adxlw" target="_blank" rel="noopener noreferrer" className="btn primary social-icon" style={{'--primary': '#1DA1F2'} as any}>
                <i className="bi bi-twitter" />
              </a>
              <a href="https://github.com/Xeltica" target="_blank" rel="noopener noreferrer" className="btn primary social-icon" style={{'--primary': '#333'} as any}>
                <i className="bi bi-github" />
              </a>
              <a href="mailto:xeltica@gmail.com" className="btn primary social-icon">
                <i className="bi bi-envelope-fill" />
              </a>
            </div>
          </div>
        </div>
      </Article>
      <Header className="mt-4 shadow-3" id="projects">PROJECTS</Header>
      <div className="bg-black vstack">
        <div css={[hitorisskeyStyle, parallaxBackgroundStyle]}>
          <Article className="container">
            <h1>ひとりすきー</h1>
            <h2>一人は好きですか？</h2>
            <p>
              SNS疲れが叫ばれる中、ネットにもリアルにも居場所が無いと思った方はいませんか？
              それは、昨今のネットは、リアルと大差ない空間になっているからだと私は考えています。
            </p>
            <p>
              何かを発信したいけれど、邪魔はされたくない。もしあなたがそう思うなら、ひとりすきーは、きっとあなたの「居場所」になるでしょう。
            </p>
            <a href="//hitorisskey.xeltica.work" target="_blank" rel="noreferrer noopener" className="btn primary">
              はじめる <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </Article>
        </div>
        <div css={[xelticaMcStyle, parallaxBackgroundStyle]}>
          <Article className="container">
            <h1>XelticaMC</h1>
            <h2>集え、全てのマインクラフター。</h2>
            <p>建築、生活、バトル、ミニゲーム、収集、どんな遊び方も楽しめるMinecraftサーバー。独自プラグインで様々な楽しさを提供。期間限定イベントもあります。</p>
            <p>約20名のスタッフと共に運営中。</p>
            <a href="//craft.xeltica.work" target="_blank" rel="noreferrer noopener" className="btn primary">
              詳しく <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </Article>
        </div>
        <div css={[misshaiStyle, parallaxBackgroundStyle]}>
          <Article className="container">
            <h1>Misskey Tools</h1>
            <p>Misskeyをもっと効果的に。様々な機能を持った、Misskeyのためのオールインワンツール。</p>
            <p>いますぐ登録して、Misskeyアカウントを管理しましょう。</p>
            <a href="//misskey.tools" target="_blank" rel="noreferrer noopener" className="btn primary">
              はじめる <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </Article>
        </div>
        <div css={[dotFeatherStyle, parallaxBackgroundStyle]}>
          <Article className="container">
            <h1>DotFeather</h1>
            <p>DotFeatherは、C#と2Dゲームのための、軽量で汎用的なゲームエンジンです。</p>
            <a href="//github.com/Xeltica/DotFeather" target="_blank" rel="noreferrer noopener" className="btn primary">
              詳しく <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </Article>
        </div>
      </div>
      <Header className="mt-4 shadow-3" id="skill-map">SKILL</Header>
      <Article className="container pt-5 text-125">
        <aside className="mb-2">
          <div className="text-green">● プログラミング言語</div>
          <div className="text-orange">● フレームワーク</div>
          <div className="text-skyblue">● その他</div>
        </aside>
        <SkillList>
          <li className="text-green">TypeScript</li>
          <li className="text-orange">React.js</li>
          <li className="text-orange">Vue.js</li>
          <li className="text-green">SCSS</li>
          <li className="text-green">C#</li>
          <li className="text-orange">Unity</li>
          <li className="text-green">Kotlin</li>
          <li className="text-green">Java</li>
          <li className="text-orange">Spigot</li>
          <li className="text-orange">MinecraftForge</li>
          <li className="text-skyblue">ドット絵</li>
          <li className="text-skyblue">UIデザイン</li>
        </SkillList>
      </Article>
      <Header className="mt-4 shadow-3" id="donate">DONATE</Header>
      <Article className="container pt-5">
        <p>Xelticaに寄付したい方のために、様々な手段を用意しています。</p>
        <p>頂いた寄付は、様々な活動のための支えとして使わせていただきます。</p>
        <div className="row mt-5 pt-5">
          <div className="col-4 col-12-sm">
            <div className="card shadow-6" style={{height: '100%'}}>
              <div className="body">
                <h1>Kyash QR</h1>
              </div>
              <img src="kyash.png" alt="Kyash QR" className="fluid"/>
            </div>
          </div>
          <div className="col-4 col-12-sm">
            <div className="card shadow-6" style={{height: '100%'}}>
              <div className="body">
                <h1>Patreon</h1>
                <p>継続的に寄付していただける方はこちらからどうぞ。</p>
                <a href="https://www.patreon.com/Xeltica" target="_blank" rel="noopener noreferrer" className="btn primary">
                  Patreonを開く
                </a>
              </div>
            </div>
          </div>
          <div className="col-4 col-12-sm">
            <div className="card shadow-6" style={{height: '100%'}}>
              <div className="body">
                <h1>欲しい物リスト</h1>
                <p>贈り物をしていただける方はこちらからどうぞ。</p>
                <a href="https://www.amazon.jp/hz/wishlist/ls/12PXP20O6ALMA?ref_=wl_share" target="_blank" rel="noopener noreferrer" className="btn primary">
                  Amazonで開く
                </a>
              </div>
            </div>
          </div>
        </div>
      </Article>
      <Footer>
        (C)2021-2022 Xeltica Studio. All rights reserved.
      </Footer>
    </>
  );
};