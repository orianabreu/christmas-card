import React, {useEffect} from 'react';
import './App.css';
import { WinterWrapper, LogoContainer, XmasMessage } from './components/WinterWrapper';
import CongratName from './components/CongratName';
import initLetItSnow from './utils/initLetItSnow';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function App() {

    useEffect(() => {
      initLetItSnow();
    },[])

    const isMobile = useMediaQuery('(max-width:484px)');

    return (
      <WinterWrapper >
        <section className="xmas">

        <CongratName />
  
        <XmasMessage isMobile={isMobile}/>

        <div className="from">
          <a href="https://becloud.es/">
            <LogoContainer />
          </a>
        </div>

        <canvas id="xmas"></canvas>
        </section>
      </WinterWrapper>
    );
}


