import styled from 'styled-components';
import BackgroundImg from '../assets/backgroundimg.png';
import MerryXmas from '../assets/feliznavidad.png';

export const WinterWrapper = styled.div`
.xmas {
  height: 100%;
  width: 100%;
  position: relative;
  background: url(${BackgroundImg}) no-repeat 0 0/cover;
}
.xmas .to {
  position: absolute;
  top: 30px;
  width: 100%;
  text-align: center;
  z-index: 3;
}
.xmas .to div {
  font-family: "quimby-mayoral", sans-serif;
  color: #ffffff;
  font-size: 40px;
  line-height: 1em;
  margin-bottom: 5px;
}
.xmas .to .to-name {
  font-size: 24px;
}
.xmas .to .client-logo {
  display: block;
  width: auto;
  max-height: 100px;
  max-width: 250px;
  margin: 10px auto 0;
}
.xmas .xmas-message {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: calc(90% - 6rem);
  height: calc(100% - 12rem);
  margin: 0 auto;
  background: url(${MerryXmas}) no-repeat 50% 50%/contain;
}
.xmas .from {
  position: absolute;
  bottom: 40px;
  width: 100%;
  z-index: 3;
  text-align: center;
}
.xmas .from div {
  font-family: "quimby-mayoral", sans-serif;
  color: #ffffff;
  font-size: 40px;
  margin-bottom: 10px;
}
.xmas .from .gc-link {
  display: inline-block;
  font-family: "brandon-grotesque", sans-serif;
  font-size: 24px;
  color: #ffffff;
  -webkit-transition: 400ms ease;
  transition: 400ms ease;
  text-decoration: none;
  text-transform: uppercase;
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