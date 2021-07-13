import React,{useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  import Image from 'react-bootstrap/Image'
  import Card from 'react-bootstrap/Card'

export default function GameDetails() {
    let { id } = useParams();
    let [game,setGame]=useState(null)
    let [cssClass,setClass]=useState(null)
    let classes=null;
    useEffect(()=>{
        const lists=  JSON.parse(localStorage.getItem('values'))
       let obj=lists[parseInt(id)];
        setGame(obj)
        
    },[])
    return (
        <div>
           { game ? 
            <Card style={{ width: '80%', margin: 'auto' }}>
            <Card.Img className="cardImage"  variant="top" src={game['image-URL']} />
            <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>
                {game.desc}
                </Card.Text>
                <Image  fluid src="https://s3.us-west-2.amazonaws.com/kwcdn.kwalee.com/wp-content/uploads/2018/10/14154209/DownloadAppStore-600x177-300x89.png"  width="200" height="50" />
            <Image fluid src="https://s3.us-west-2.amazonaws.com/kwcdn.kwalee.com/wp-content/uploads/2018/10/14154202/google-play-badge-600x232-1-300x89.png"  width="200" height="50" />
            </Card.Body>
            <p></p>
            

    </Card>    : null}
        </div>
    )
}
