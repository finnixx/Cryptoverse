import millify from 'millify';
import {Typography, Row, Col, Statistic } from 'antd';
import { Link} from 'react-router-dom'
import axios from 'axios';
import React,{useState, useEffect} from 'react';
import CryptoCurrencies from './CryptoCurrencies';
import News from './News';


function Homepage(){
    const [volume, setVolume] = useState();
    const [markets, setMarkets] = useState();
    const [marketCap, setMarketCap] = useState();
    const [exchanges,setExchanges]  = useState();
    const [coins,setCoins]= useState('');

    
    useEffect(()=>{
        const fetchCoins = async ()=>{
            try{
                const response = await axios.get('https://coinranking1.p.rapidapi.com/stats',{
                    params: {
                        referenceCurrencyUuid: 'yhjMzLPhuIDl'
                      },
                      headers: {
                        'X-RapidAPI-Key': 'ba5688f021msha0d796fca062bc0p17d3c2jsn460f3f5601a9',
                        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                      }
                })
                if(response){
                    
                    setVolume(response.data.data.total24hVolume);
                    setMarkets(response.data.data.totalMarkets);
                    setMarketCap(response.data.data.totalMarketCap);
                    setExchanges(response.data.data.totalExchanges);
                    setCoins(response.data.data.totalCoins);
                    // setCoins(response.data);
                }
            }
            catch(error){
                console.error(error);
            }
        }
        fetchCoins();
        
    },[]);
    
    
    return <>
        <Typography.Title className='heading'>Global Crypto Stats</Typography.Title>
        <Row>
            <Col span = {12}><Statistic title = "Total Cryptocurrencies" value = {coins}/></Col>
            <Col span = {12}><Statistic title = "Total Exchanges" value = {millify(exchanges)}/></Col>
            <Col span = {12}><Statistic title = "Total Market Cap" value = {millify(marketCap)}/></Col>
            <Col span = {12}><Statistic title = "Total 24h volume" value = {millify(volume)}/></Col>
            <Col span = {12}><Statistic title = "Total Markets" value = {millify(markets)}/></Col>
        </Row>
        <CryptoCurrencies simplified></CryptoCurrencies>
        <News simplified></News>
    </>
}

export default Homepage;
