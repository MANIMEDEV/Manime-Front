import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };
    colors: {
      primary: string;
      primaryBG: string;
      secondary: string;
      secondaryBG: string;
      gray600: string;
      gray300: string;
      gray150: string;
      gray100: string;
      gray0: string;
      white: string;
      green: string;
      feedback: {
        negative: string;
        warning: string;
        sucess: string;
        information: string;
      };
    };
  }
}
