import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors, mediaBreakpoint, paddings } = styleVariables;

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${paddings.mobile};
  margin: 0 auto;

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }

  .hero {
    font-size: 36px;
    line-height: 36px;
    font-weight: 900;
    margin-bottom: 15px;
    max-width: 350px;
    color: ${colors.dark};
    text-align: center;
    max-width: ${mediaBreakpoint};

    ${mediaQuery['web']} {
      margin-bottom: 30px;
    }
  }
`;

export { ProfileStyled };
