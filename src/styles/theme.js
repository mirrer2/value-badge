const theme = {
  colors: {
    primary: '#ffffff',
  },
  calcRem: pxSize => {
    return `${pxSize / 16}rem`;
  },
  flexSet: (just = 'center', align = 'center') => {
    return `display: flex;
    justify-content: ${just};
    align-items: ${align};`;
  },
  flexColumnSet: (just = 'center', align = 'center') => {
    return `display: flex;
    flex-direction: column;
    justify-content: ${just};
    align-items: ${align};`;
  },
};

export default theme;
