import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors, paddings, mediaBreakpoint } = styleVariables;

const FrontpageStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: ${paddings.mobile};
  text-align: center;
  color: ${colors.main};

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }

  .hero {
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    max-width: ${mediaBreakpoint};

    ${mediaQuery['web']} {
      font-size: 32px;
      line-height: 32px;
      margin-bottom: 30px;
    }
  }

  .server-status {
    margin-bottom: 15px;
  }
`;

export { FrontpageStyled };
