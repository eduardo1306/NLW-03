import styled from 'styled-components';

import landingImg from '../../images/landing.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`;

export const Content = styled.div`  
  position: relative;
  height: 100%;
  max-height: 680px;
  
  width: 100%;
  max-width: 1100px;
  
  background: url(${landingImg}) no-repeat 80% center;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    width: 80px;
    height: 80px;

    right: 0;
    bottom: 0;  

    background: #ffdd66;
    border-radius: 30px;
    transition: background-color 0.4s;

    &:hover {
      background: #96feff;
      transition: background-color 0.4s;
    }
  }

  main {
    max-width: 350px;
    h1 {
      font-size: 76px;
      font-weight: 900;

      line-height: 70px;      
    }

    p {
      margin-top: 40px;
      font-size: 24px;

      line-height: 34px;
    }
        
  }
`;

export const Location = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  top: 0;  

  font-size: 24px;
  line-height: 34px;
  text-align: right;

  strong {
    font-weight: 800;
  }
`;

