import { DefaultTheme } from 'styled-components';

const pixelToRem = (size: number) => `${size / 16}rem`;

const theme: DefaultTheme = {
  fontSize: {
    title: pixelToRem(45),
    contents: pixelToRem(27),
    subTitle: pixelToRem(22),
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
    flexRow: `
    box-sizing : border-box;
    display:flex;

  `,
    flexColumn: `
    box-sizing : border-box;
    display :flex;
    flex-direction :column;
  `,
    flexCenter: `
    align-items: center;
    justify-content: center;
  `,
    noneLine: `
    outline : none;
    border :none;
  `,
  },
};

export default theme;
