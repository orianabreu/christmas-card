import styled from 'styled-components';
import BackgroundImg from '../assets/backgroundimg.png';
import MerryXmas from '../assets/feliznavidad.png';
import Logo from '../assets/logo.png';

export const WinterWrapper = styled.div`
.xmas {
  height: 100%;
  width: 100%;
  position: relative;
  background: url(${BackgroundImg}) no-repeat 0 0/cover;
}

.from {
  position: absolute;
	bottom: 40px;
	width: 100%;
	z-index: 3;
  text-align: center;
  display:flex;
  justify-content: center;

  a{
    display:flex;
  }
}

.xmas .from .gc-link:hover {
  color: #1cff94;
}
.xmas #xmas {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
}
`;

export const LogoContainer = styled.div`
  background-image: url(${Logo});
  background-size: cover;
  background-position: center;
  height: 60px;
  width: 120px; 
`;

export const XmasMessage = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: ${({isMobile}) => isMobile ? '350px' : '550px'};
  height: ${({isMobile}) => isMobile ? '350px' : '550px'};
  margin: 0 auto;
  background: url(${MerryXmas}) no-repeat 50% 50%/contain;
`;

export const LoadSwitch = styled.div`
  opacity: ${({isLoading}) => isLoading ? 0 : 1};
  transition: all 0.5s;
`;