import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../../public/styles/utils/mediaQuery';

const { colors, paddings } = styleVariables;

interface FrontpageStyledParams {
  serveronline: string;
}

const FrontpageStyled = styled.div<FrontpageStyledParams>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: ${paddings.mobile};
  text-align: left;
  width: 100%;
  color: ${colors.dark};

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }

  .container {
    margin: 0 auto;
    padding: 50px 20px;
    max-width: 600px;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    font-weight: 900;

    ${mediaQuery['web']} {
      font-size: 36px;
      margin-bottom: 20px;
      font-weight: 900;
    }
  }

  img {
    width: 220px;
    height: 150px;

    ${mediaQuery['web']} {
      width: 430px;
      height: 270px;
    }
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;

    ${mediaQuery['web']} {
      font-size: 18px;
      margin-bottom: 30px;
    }
  }

  .cta-btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: ${colors.action};
    color: ${colors.light};
    text-decoration: none;
    border-radius: 5px;
    font-size: 18px;
    transition: background-color 0.3s ease;
  }
  .cta-btn:hover {
    background-color: ${colors.dark};
  }
  .status {
    span {
      color: ${(props) =>
        props.serveronline === 'Alive' ? '#32a852' : colors.error};
    }
  }
`;

export { FrontpageStyled };
