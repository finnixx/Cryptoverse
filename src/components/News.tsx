import React,{useState,useEffect} from 'react';
import {Select, Typography, Row, Col, Avatar, Card} from 'antd';
import Moment from 'moment';
import axios from 'axios';



function News({simplified}){
    const count = simplified ? 10 :40; 
    const [news , setNews] =useState([]);
    const updatedNews = news.slice(0,count);
    useEffect(()=>{
        const fetchNews = async()=>{ 
            const response = await axios.get(`https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk?count=10`,{
                headers: {
                    'X-RapidAPI-Key': 'ba5688f021msha0d796fca062bc0p17d3c2jsn460f3f5601a9',
                    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
                  }
                })
            console.log(response.data.data);
            setNews(response.data.data)
            }
        fetchNews()
    },[])
    
    return <>
    <Row gutter={[24,24]}>
        {updatedNews.slice(0,count).map(temp=>{
            <Col xs={24} sm={12} lg={8} >
                <Card hoverable className='news-card'>
                    <a href={temp.url} target = "_blank" ref="noreferrer">
                        <div className='news-image-container'>
                            <Title className = "news-title" level = {4}>{temp.title}</Title>
                            <img src={temp?.thumbnail} />
                            <p>
                                {temp.description>100
                                    ? `${temp.description.substring(0,100)}...`
                                }
                            </p>
                        </div>

                    </a>
                </Card>
            </Col>
        })}
    </Row>
    </>
}

export default News;