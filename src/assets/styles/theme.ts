import styled, { DefaultTheme } from 'styled-components';

const pixelToRem = (size: number) => `${size / 16}rem`;

const theme: DefaultTheme = {
  fontSize: {
    title: pixelToRem(50),
    contents: pixelToRem(27),
    subTitle: pixelToRem(20),
    paragraph: pixelToRem(18),
  },
  colors: {
    gray: '#cccccc',
    liteGray: '#dcdcdc',
    mLiteGray: '#e6e6e6',
    orange: '#ff105f',
    plum: '#ffad06',
  },
  common: {
    flexCenter: `
    box-sizing : border-box;
    display:flex;

  `,
    flexCenterColumn: `
    box-sizing : border-box;
    display :flex;
    flex-direction :column;
  `,
    noneLine: `
    outline : none;
    border :none;
  `,
  },
};

export default theme;
