import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../../public/styles/utils/mediaQuery';

const { colors, paddings } = styleVariables;

const MessagesStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: ${paddings.mobile};
  color: ${colors.dark};
  margin: 0 auto;

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }
`;

export { MessagesStyled };
