type Colors = {
  main: string;
  light: string;
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
  fontFamily:
    'Brandon Text, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
  mediaBreakpoint: '641px',
  colors: {
    main: '#11B5E4',
    light: '#ffffff',
    dark: '#1f1f1f',
    action: '#1481BA',
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
