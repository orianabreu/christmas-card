import React, {useEffect, useState} from 'react';
import './App.css';
import { WinterWrapper, LogoContainer, XmasMessage, LoadSwitch } from './components/WinterWrapper';
import CongratName from './components/CongratName';
import initLetItSnow from './utils/initLetItSnow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import axios from 'axios';

export default function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    const getEmployee = async() => {
      setIsLoading(true)
      try{
      // const response = await axios.get('http://dummy-url.com');
        setTimeout(() => {
          setIsLoading(false);
          setData({
            name: 'Oriana Abreu'
          });
        }, 2000)
      }
      catch(err){
        console.log(err)
      }
    }

    useEffect(() => {
      initLetItSnow();
      getEmployee();
    },[]);

    const isMobile = useMediaQuery('(max-width:484px)');

    return (
      <WinterWrapper >
        <section className="xmas">

        <LoadSwitch isLoading={isLoading}>
        
        <CongratName data={data} />
  
        <XmasMessage isMobile={isMobile}/>

        <div className="from">
          <a href="https://becloud.es/">
            <LogoContainer />
          </a>
        </div>
        </LoadSwitch>
        <canvas id="xmas"></canvas>
        </section>
      </WinterWrapper>
    );
}


