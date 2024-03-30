import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../../public/styles/utils/mediaQuery';

const { colors, paddings } = styleVariables;

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${paddings.mobile};
  margin: 0 auto;
  color: ${colors.dark};

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;
  padding: ${paddings.mobile};
  margin: 0 auto;

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }

  .main-info {
    display: flex;
    padding: 20px 0;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
    font-size: 24px;
    border-bottom: 1px ${colors.dark} solid;
  }

  .table {
    display: flex;
    padding: 20px 0;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
    font-size: 14px;
    border-bottom: 1px ${colors.dark} solid;
  }

  .bio {
    display: flex;
    padding: 20px 0;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    width: 100%;
    font-size: 14px;
  }

  .btn-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;

    a {
      display: inline-block;
      padding: 8px 16px;
      background-color: ${colors.action};
      color: ${colors.light};
      text-decoration: none;
      border-radius: 5px;
      font-size: 12px;
      transition: background-color 0.3s ease;
    }
    a:hover {
      background-color: ${colors.dark};
    }
  }
`;

export { ProfileStyled };
