import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      title: string;
      contents: string;
      subTitle: string;
      paragraph: string;
    };

    colors: {
      gray: string;
      liteGray: string;
      mLiteGray: string;
      orange: string;
      plum: string;
    };
    common: {
      flexRow: string;
      flexColumn: string;
      flexCenter: string;
      noneLine: string;
    };
  }
}
