import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../../public/styles/utils/mediaQuery';

const { colors, paddings, mediaBreakpoint } = styleVariables;

const NotFoundStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: ${paddings.mobile};
  text-align: center;

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }

  img {
    width: 150px;
    height: 150px;
    opacity: 0.4;
    z-index: -1;
    margin-bottom: 15px;

    ${mediaQuery['web']} {
      width: 250px;
      height: 250px;
      margin-bottom: 30px;
    }
  }

  .hero {
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    max-width: ${mediaBreakpoint};
    color: ${colors.dark};

    ${mediaQuery['web']} {
      font-size: 32px;
      line-height: 32px;
      max-width: 750px;
      margin-bottom: 30px;
    }
  }

  .error {
    color: ${colors.dark};
    font-size: 14px;
    line-height: 14px;
    font-weight: 200;

    ${mediaQuery['web']} {
      font-size: 18px;
      line-height: 18px;
      font-weight: 200;
    }
  }
`;

export { NotFoundStyled };
