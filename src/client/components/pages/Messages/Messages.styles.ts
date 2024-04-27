import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../../public/styles/utils/mediaQuery';

const { colors, fontFamily } = styleVariables;

interface MessagesStyledProps {
  opened: string;
}

const MessagesStyled = styled.div<MessagesStyledProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 107px);
  padding: 60px 0 0;
  color: ${colors.dark};
  margin: 0 auto;

  ${mediaQuery['web']} {
    height: calc(100% - 137px);
    padding: 76px 0 0;
  }

  .people {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    width: calc(100% - (100% - 140px));
    border-right: 1px ${colors.dark} solid;
    border-left: ${(props) =>
      props.opened === 'no' ? `1px ${colors.dark} solid` : 'none'};

    ${mediaQuery['web']} {
      width: 180px;
    }

    > p {
      font-size: 16px;
      width: 100%;
      border-bottom: 1px ${colors.dark} solid;
      text-align: center;
      padding: 10px 0;

      ${mediaQuery['web']} {
        font-size: 20px;
      }
    }

    .users {
      overflow: scroll;
      width: 100%;

      &::-webkit-scrollbar {
        display: none;
      }

      > button {
        display: inline-block;
        padding: 10px 20px;
        background-color: transparent;
        color: ${colors.dark};
        text-decoration: none;
        font-size: 10px;
        width: 100%;
        transition: background-color 0.2s ease;
        border: none;

        ${mediaQuery['web']} {
          font-size: 14px;
        }

        &:hover {
          background-color: ${colors.semiLight};
        }
      }
    }
  }

  .conversation {
    width: calc(100% - 10px);
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
        font-size: 16px;
        font-weight: 200;
        transition: 0.2s;
        cursor: pointer;

        ${mediaQuery['web']} {
          font-size: 20px;
        }

        &:hover {
          color: ${colors.action};
        }
      }
    }

    .chat {
      height: calc(100% - 83px);
      overflow: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .bottom-bar {
      border-top: 1px solid ${colors.dark};
      height: 40px;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      input {
        height: 30px;
        margin-top: 5px;
        width: calc(100% - 40px);
        padding: 2px 10px;
        border-radius: 5px;
        border: none;
        background-color: ${colors.semiLight};
        -webkit-tap-highlight-color: transparent;
        margin-left: 10px;
        font-size: 16px;

        &:focus {
          outline: none;
        }

        ${mediaQuery['web']} {
          margin-top: 0;
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
        margin: 10px;
        margin: 4px 5px 0;

        ${mediaQuery['web']} {
          margin: 0 10px 0;
        }
      }

      button:hover {
        background-color: ${colors.dark};
      }
    }
  }
`;

interface VisibleMessageStyledParams {
  isMe: string;
}

const VisibleMessageStyled = styled.div<VisibleMessageStyledParams>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isMe === 'yes' ? 'flex-end' : 'flex-start'};

  .message-container {
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props) =>
      props.isMe === 'yes' ? 'flex-end' : 'flex-start'};

    .label {
      font-size: 12px;
      margin-bottom: 1px;

      .delete-msg {
        font-size: 12px;
        margin-bottom: 1px;
        font-family: ${fontFamily};
        background-color: transparent;
        border: none;
        color: ${colors.error};
      }

      .delete-msg:hover {
        color: ${colors.dark};
      }
    }

    .message {
      background-color: ${(props) =>
        props.isMe === 'yes' ? colors.action : colors.semiLight};
      color: ${(props) => (props.isMe === 'yes' ? colors.light : colors.dark)};
      padding: 5px;
      border-radius: 5px;
      overflow-wrap: anywhere;
    }
  }
`;

export { MessagesStyled, VisibleMessageStyled };
