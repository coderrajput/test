import React,{useEffect,useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';

import { useHistory } from "react-router-dom";
const Image = React.lazy(() => import('react-bootstrap/Image'));

export default function Home() {
    let history = useHistory();
    const [lists, setList]= useState([]);

    useEffect(()=>{
      if(localStorage.getItem('values')==null){
        console.log('prat')
        axios.get('https://api.npoint.io/3d06d2ffe703b6c20a3a').then((res)=>{
            let data= [];
            data=res.data;
            setList(data);  
            localStorage.setItem('values',JSON.stringify(data));             
        })
      }else{
        const lists=  JSON.parse(localStorage.getItem('values'))
        setList(lists)
      }
    },[])


   
    return (
      
      <React.Suspense fallback={<div>loading...</div>}  >
       
       <Carousel fade  className="home bg-info" >
           {
               lists.length>0 ? lists.map((el,index)=>(
                <Carousel.Item  key={index} className="" onClick={()=>history.push(`/game/${index}`)}>
                    <p>{el.name}</p>
             
               
               
               
                <Carousel.Caption className="w-20">
                  <small  className="text-primary bg-gradient-primary ">{el.intro}</small>
                 
                </Carousel.Caption>
                <Image fluid
                  className="d-block w-100 imgC  rounded"
                    src={el["image-URL"]}  
                />
              </Carousel.Item>))
                : <p>loading...</p>
           }
       
        </Carousel>
        </React.Suspense>
     
    )
}
