import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const headerStyle = css`
display: flex;
position: relative;
background: url('/bg.jpg');
width: 100vw;
height: 100vh;
align-items: center;
justify-content: center;
`;

export const parallaxBackgroundStyle = css`
padding: 64px 0;
background-size: cover;
background-attachment: fixed;
background-position: center;
* {
  color: var(--white);
}
`;

export const hitorisskeyStyle = css`
background: url('/hitorisskey.png');
`;

export const xelticaMcStyle = css`
background: url('/xelticamc.jpg');
`;

export const misshaiStyle = css`
background: url('/misshaialert.png');
`;

export const dotFeatherStyle = css`
background: url('/dotfeather.png');
`;

export const chevronKeyframe = keyframes`
    0%, 100% {
    transform: none;
    }
    50% {
    transform: translateY(32px);
    }
`;

export const Chevron = styled.i`
position: absolute;
bottom: 0;
left: 0;
right: 0;
margin: auto;
font-size: 96px;
animation: ${chevronKeyframe} 2s ease-in-out infinite;
`;

export const articleStyle = css`
max-width: 960px;
margin: 0 auto;
`;

export const profileCardStyle = css`
display: flex;
> .icon {
  width: 30%;
  padding: 32px;

  > img {
    width: 100%;
    border-radius: 100%;
    border: 6px solid var(--white);
    transform-origin: center;
    transition: 0.2s ease-out;

    &:hover {
      transform: rotate(30deg);
    }
  }
}

> .body {
  flex: 1;
}
`;

export const profileCardMobileStyle = css`
position: relative;
margin-top: 96px;
overflow: visible;
> .icon {
  width: 128px;
  padding: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: -80px;
  margin: 0 auto;

  > img {
    width: 100%;
    border-radius: 100%;
    border: 4px solid var(--white);
    transform-origin: center;
    transition: 0.2s ease-out;

    &:hover {
      transform: rotate(30deg);
    }
  }
}

> .profile {
  padding-top: 64px !important;
}

> .body {
  flex: 1;
}
`;

export const Header = styled.h1`
position: sticky;
top: 0px;
margin: 0;
width: 100%;
text-align: center;
padding: 16px 0;
height: fit-content;
background: var(--tone-0);
border: 1px solid var(--shadow-color);
z-index: 400;
`;

export const Article = styled.article(articleStyle);

export const Small = styled.small`
opacity: 0.9;
font-size: 0.85rem;
`;

export const Footer = styled.footer`
color: var(--tone-6);
font-size: 1.2rem;
text-align: center;
padding: 128px 0;
`;