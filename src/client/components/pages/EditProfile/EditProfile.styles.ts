import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../../public/styles/utils/mediaQuery';

const { colors, paddings } = styleVariables;

const EditProfileStyled = styled.div`
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

  form {
    width: 100%;

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 15px;
      text-align: left;

      label {
        width: 100%;
        font-size: 14px;
      }

      input {
        margin-top: 4px;
        width: 100%;
        padding: 4px 0;
        height: 30px;
      }

      textarea {
        margin-top: 4px;
        width: 100%;
        padding: 4px 0;
        height: 70px;
      }
    }

    button {
      display: inline-block;
      padding: 8px 16px;
      background-color: ${colors.action};
      color: ${colors.light};
      text-decoration: none;
      border: none;
      border-radius: 5px;
      font-size: 12px;
      transition: background-color 0.3s ease;
    }

    button:hover {
      background-color: ${colors.dark};
    }
  }
`;

export { EditProfileStyled };
