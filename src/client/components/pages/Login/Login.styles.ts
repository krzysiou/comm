import { styled } from 'styled-components';

import type { AuthErrorObject } from '../../../../types';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../../public/styles/utils/mediaQuery';

const { colors, paddings, mediaBreakpoint } = styleVariables;

type LoginStyledProps = {
  errors: AuthErrorObject;
};

const LoginStyled = styled.div<LoginStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${paddings.mobile};
  width: 250px;
  margin: 0 auto;

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }

  .hero {
    font-size: 36px;
    line-height: 36px;
    font-weight: 900;
    margin-bottom: 15px;
    color: ${colors.dark};
    max-width: ${mediaBreakpoint};

    ${mediaQuery['web']} {
      max-width: 750px;
      margin-bottom: 30px;
    }
  }

  form {
    width: 100%;
  }

  .label {
    width: 100%;
    text-align: left;
    color: ${colors.dark};
    margin: 10px 0 0;
  }

  .label ~ .label {
    margin: 30px 0 0;
  }

  .clear {
    color: ${colors.accentDark};
    cursor: pointer;
  }

  .error {
    position: absolute;
    bottom: -30px;
    left: 0;
    font-size: 12px;
    color: ${colors.error};
    margin: 10px 0;
  }

  .input-frame {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: calc(100% - 20px);
    height: 30px;
    border: none;
    margin: 5px 0 5px;
    padding: 5px 10px;
    background-color: ${colors.semiLight};
    border-radius: 5px;

    ${mediaQuery['web']} {
      height: 20px;
    }

    .form-input {
      width: calc(100% - 20px);
      border: none;
      height: 30px;
      font-size: 16px;
      background-color: transparent;
      color: ${colors.accentDark};
      -webkit-tap-highlight-color: transparent;

      ${mediaQuery['web']} {
        height: 20px;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .input-username {
    border: ${(props) =>
      props.errors?.username
        ? `1px solid ${colors.error}`
        : `1px solid ${colors.dark}`};
  }

  .input-password {
    border: ${(props) =>
      props.errors?.password
        ? `1px solid ${colors.error}`
        : `1px solid ${colors.dark}`};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;

    .submit-button {
      width: 100px;
      margin: 30px 0 20px;
      padding: 10px 20px;
      background-color: ${colors.action};
      border: none;
      border-radius: 20px;
      transition: 0.2s;
      color: ${colors.light};

      &:hover {
        background-color: ${colors.dark};
        color: ${colors.light};
      }
    }

    .redirect {
      text-decoration: none;
      color: ${colors.accentDark};

      > span {
        color: ${colors.action};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export { LoginStyled };
