import React, { useEffect, useState } from 'react';
import { useMemo } from 'react';
import Typewriter from 'typewriter-effect';

import { hobbies } from './data/hobbies';
import { aboutMeHistory } from './data/history';

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
  profileCardStyle,
  Small,
  xelticaMcStyle
} from './styles';

import 'xeltica-ui/dist/css/xeltica-ui.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.scss';

const strings = hobbies.map(h => '趣味: ' + h);
const engineerAge = new Date().getFullYear() - 2011;

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
        <div className="hero container text-center">
          <h1>Xeltica Studio</h1>
          <h2>
            <Typewriter options={{
              strings,
              loop: true,
              autoStart: true,
            }}/>
          </h2>
          <p>広く浅く、時々深く。ものづくりから自堕落生活まで、様々な活動をしています。</p>
          <Chevron className="bi bi-chevron-down"/>
        </div>
      </header>
      <Header className="mt-4 shadow-3" id="about">ABOUT ME</Header>
      <Article className="container vstack">
        <div className="card shadow-3" css={isMobile ? profileCardMobileStyle : profileCardStyle}>
          <div className="icon clickable">
            <img src="/icon.png" alt="icon" className="shadow-3" />
          </div>
          <div className="body pa-4">
            <h1 style={{fontSize: '2.5rem'}}>Xeltica</h1>
            <p>横浜生まれ・横浜育ちのウェブエンジニア。エビフライ、焼きサーモンが好き。在宅でウェブエンジニアをしながら、スキマ時間にいろいろな活動をしている。</p>
            <p>エンジニア歴{engineerAge}年。</p>

            <div className="hstack" style={{lineHeight: 1}}>
              <a href="https://twitter.com/adxlw" target="_blank" rel="noopener noreferrer" className="btn primary social-icon" style={{'--primary': '#1DA1F2'} as any}>
                <i className="bi bi-twitter" />
              </a>
              <a href="https://github.com/Xeltica" target="_blank" rel="noopener noreferrer" className="btn primary social-icon" style={{'--primary': '#333'} as any}>
                <i className="bi bi-github" />
              </a>
              <a href="mailto://xeltica@gmail.com" className="btn social-icon">
                <i className="bi bi-envelope-fill" />
              </a>
            </div>
          </div>
        </div>
        <table className="table fluid shadow-3">
          <thead>
            <tr>
              <th>年</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            {
              aboutMeHistory.map(h => (
                <tr>
                  <td>{h.date}</td>
                  <td>{h.content}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Article>
      <Header className="mt-4 shadow-3" id="projects">
        PROJECTS
      </Header>
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
              はじめる <Small>外部サイトが開きます</Small>
            </a>
          </Article>
        </div>
        <div css={[xelticaMcStyle, parallaxBackgroundStyle]}>
          <Article className="container">
            <h1>XelticaMC</h1>
            <h2>集え、全てのマインクラフター。</h2>
            <p>建築、生活、バトル、ミニゲーム、収集、どんな遊び方も楽しめるMinecraftサーバー。独自プラグインで様々な楽しさを提供。期間限定イベントもあります。</p>
            <p>約10名のスタッフと共に運営中。</p>
            <a href="//craft.xeltica.work" target="_blank" rel="noreferrer noopener" className="btn primary">
              詳しく <Small>外部サイトが開きます</Small>
            </a>
          </Article>
        </div>
        <div css={[misshaiStyle, parallaxBackgroundStyle]}>
          <Article className="container">
            <h1>ミス廃あらーと</h1>
            <p>ついついSNSをやりすぎてしまう人もいるでしょう。ミス廃あらーとは、1日の投稿数、フォロー・フォロワー数の増減を確認できるMisskey用の連携サービスです。</p>
            <p>登録はカンタンなので、今すぐMisskey中毒になってないか確認しましょう！</p>
            <a href="//misshaialert.xeltica.work" target="_blank" rel="noreferrer noopener" className="btn primary">
              はじめる <Small>外部サイトが開きます</Small>
            </a>
          </Article>
        </div>
        <div css={[dotFeatherStyle, parallaxBackgroundStyle]}>
          <Article className="container">
            <h1>DotFeather</h1>
            <p>DotFeatherは、C#と2Dゲームのための、軽量で汎用的なゲームエンジンです。</p>
            <a href="//github.com/Xeltica/DotFeather" target="_blank" rel="noreferrer noopener" className="btn primary">
              詳しく <Small>GitHubが開きます</Small>
            </a>
          </Article>
        </div>
      </div>
      <Header className="mt-4 shadow-3" id="donate">
        DONATE
      </Header>
      <Article className="container pt-5">
        <p>Xelticaに寄付したい方のために、様々な手段を用意しています。</p>
        <p>頂いた寄付は、様々な活動のための支えとして使わせていただきます。</p>
        <div className="row mt-5 pt-5">
          <div className="col-12 tab-4 pa-2">
            <div className="card shadow-6" style={{height: '100%'}}>
              <div className="body">
                <h1>Kyash QR</h1>
              </div>
              <img src="kyash.png" alt="Kyash QR" className="fluid"/>
            </div>
          </div>
          <div className="col-12 tab-4 pa-2">
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
          <div className="col-12 tab-4 pa-2">
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
        (C)2021 Xeltica Studio. All rights reserved.
      </Footer>
    </>
  );
};