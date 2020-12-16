import React, {useEffect} from 'react';
import './App.css';
import { WinterWrapper } from './components/WinterWrapper';
import initLetItSnow from './utils/initLetItSnow';

export default function App() {

    useEffect(() => {
      initLetItSnow();
    },[])

    return (
      <WinterWrapper >
        <section class="xmas">

        <div class="to">
          <div>Beste</div>
          <div>Klant</div>
        </div>
  
        <div class="xmas-message"></div>

        <div class="from">
          <a href="https://becloud.es/">
            <div class="gc-link small-title from-name"></div>
          </a>
        </div>

        <canvas id="xmas"></canvas>
        </section>
      </WinterWrapper>
    );
}


