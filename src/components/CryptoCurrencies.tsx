import { useEffect,useState } from "react";
import axios from 'axios';
import { Link} from 'react-router-dom';
import {Row, Col,Card, Input} from 'antd';
import millify from 'millify';

function CryptoCurrencies({simplified}){
    const count = simplified ? 10 :100; 
    const [coins, setCoins] = useState([]);
    const [filterCoins, setFilterCoins] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(()=>{
        
        const fetchCoins = async()=>{
            const response = await axios.get(`https://coinranking1.p.rapidapi.com/coins`,{
                params: {
                    referenceCurrencyUuid: 'yhjMzLPhuIDl',
                    timePeriod: '24h',
                    'tiers[0]': '1',
                    orderBy: 'marketCap',
                    orderDirection: 'desc',
                    limit: `${count}`,
                    offset: '0'
                  },
                  headers: {
                    'X-RapidAPI-Key': 'ba5688f021msha0d796fca062bc0p17d3c2jsn460f3f5601a9',
                    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                  }  
            })
            
            setCoins(response.data.data.coins);
            setFilterCoins(response.data.data.coins);
            
        }
        fetchCoins();
    },[])

    useEffect(()=>{
        const filterData = coins?.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilterCoins(filterData);
    },[searchTerm,coins])
    
    
    return <>
        {!simplified &&(
            <div className = 'search-crypto'>
            <Input 
                placeholder="Search Cryptocurrency"
                onChange = {(e)=>{
                    setSearchTerm(e.target.value);
                }}
            />
        </div>
        )}
        
        <Row gutter = {[32,32]}span={24} sm={12} lg={6} className = "crypto-card-container" >
            {filterCoins.map((currency)=>{
                return(
                <Col xs={32} sm={12} lg={6} className="crypto-card" key = {currency.id}>
                    <Link to = {`/crypto/${currency.id}`}>
                        <Card
                            title={`${currency.rank}.${currency.name}`}
                            extra = {<img className ='crypto-image' src = {currency.iconUrl}/>}
                            hoverable
                        >
                            <p>Price: {millify(currency.price)}</p>
                            <p>Market Cap: {millify(currency.marketCap)}</p>
                            <p>Daily Change: {millify(currency.change)}</p>

                        </Card>
                    </Link>
                </Col>
            )})}

        </Row>
    </>
}
export default CryptoCurrencies;