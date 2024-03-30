import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../../public/styles/utils/mediaQuery';

const { colors, paddings } = styleVariables;

interface MessagesStyledProps {
  opened: string;
}

const MessagesStyled = styled.div<MessagesStyledProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 600px;
  padding: ${paddings.mobile};
  color: ${colors.dark};
  margin: 0 auto;

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }

  .people {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    width: 180px;
    border-right: 1px ${colors.dark} solid;
    border-left: ${(props) =>
      props.opened === 'no' ? `1px ${colors.dark} solid` : 'none'};

    > p {
      font-size: 20px;
      width: 100%;
      border-bottom: 1px ${colors.dark} solid;
      text-align: center;
      padding: 10px 0;
    }

    .users {
      overflow: scroll;

      > button {
        display: inline-block;
        padding: 10px 20px;
        background-color: transparent;
        color: ${colors.dark};
        text-decoration: none;
        font-size: 14px;
        width: 100%;
        transition: background-color 0.2s ease;
        border: none;

        &:hover {
          background-color: ${colors.semiLight};
        }
      }
    }
  }

  .conversation {
    width: 420px;
    height: 100%;

    .top-bar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-size: 20px;
      padding: 10px 0;
      text-align: center;
      color: ${colors.dark};
      text-decoration: none;
      border-bottom: 1px solid ${colors.dark};

      > p {
        font-size: 20px;
        font-weight: 200;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
          color: ${colors.action};
        }
      }
    }

    .chat {
      height: 520px;
    }

    .bottom-bar {
      border-top: 1px solid ${colors.dark};
      height: 40px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      input {
        height: 26px;
        width: 380px;
        padding: 2px 10px;
        border-radius: 5px;
        border: none;
        background-color: ${colors.semiLight};
        margin-left: 10px;
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
        margin: 10px;
      }

      button:hover {
        background-color: ${colors.dark};
      }
    }
  }
`;

export { MessagesStyled };
