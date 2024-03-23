type Colors = {
  main: string;
  light: string;
  semiLight: string;
  dark: string;
  action: string;
  accentLight: string;
  accentDark: string;
  accentDarker: string;
  error: string;
};

type Paddings = {
  mobile: string;
  web: string;
};

type StyleVariables = {
  fontFamily: string;
  mediaBreakpoint: string;
  colors: Colors;
  paddings: Paddings;
};

const styleVariables: StyleVariables = {
  fontFamily: `'Trebuchet MS', sans-serif`,
  mediaBreakpoint: '641px',
  colors: {
    main: '#11B5E4',
    light: '#ffffff',
    semiLight: '#f2f2f2',
    dark: '#2A2C35',
    action: '#007bff',
    accentLight: '#0CAADC',
    accentDark: '#034748',
    accentDarker: '#001021',
    error: '#d11f1f',
  },
  paddings: {
    mobile: '80px 0 0',
    web: '120px 0 0',
  },
};

export { styleVariables };
