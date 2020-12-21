import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { WinterWrapper, LogoContainer, XmasMessage, LoadSwitch } from '../../components/WinterWrapper';
import CongratName from '../../components/CongratName';
import initLetItSnow from '../../utils/initLetItSnow';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import axios from 'axios';

export default function Home() {

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    const getEmployee = async({id}) => {
      setIsLoading(true);
      try{
        const response = await axios.get(`http://tarjetadigital.becloud.es:8080/td-0/api/td/get/${id}`);
        setData(response);
        setIsLoading(false);
      }
      catch(err){
        setData({error: 'Esta tarjeta no está disponible'});
        setIsLoading(false);
        setTimeout(() => {
          window.location.replace(`https://BeCLOUD.es`);
        }, 3000)
      }
    }

    useEffect(() => {
      initLetItSnow();
      if(id){
        getEmployee({id});
      } else {
        setData({error: 'Esta tarjeta no está disponible'});
        setIsLoading(false);
        setTimeout(() => {
          window.location.replace(`https://BeCLOUD.es`);
        }, 3000)
      }
    },[id]);

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
                <canvas id="xmas" />
            </section>
        </WinterWrapper>
    )
}