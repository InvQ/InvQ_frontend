import { css } from '@emotion/react';

import { pretendardFont } from './font';
import { reset } from './reset';
import { colors } from './colors';

export const globalStyle = css`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    color: ${colors.black};
    background-color: ${colors.background};
    font-family: Pretendard;
  }

  #app,
  #root,
  #__next {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    letter-spacing: -0.03em;
  }
`;
