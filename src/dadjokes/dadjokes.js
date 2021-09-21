import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';

const DadJokes = () => {
    const [facts, setFacts] = useState([]);
    // let baseurl="https://cat-fact.herokuapp.com/";
    let baseurl="https://icanhazdadjoke.com/";
    // let baseurl="https://the-one-api.dev/v2/";


    const fetchFact = async ()=>{
        // const res = await axios.get(`${baseurl}`,{ headers: { "Accept": "application/json" } }).then((response)=>{
        //     console.log(response);
        //     setFacts(facts.concat(response.data.joke));
        // });

        // or 
        console.log("hi");
        const res = await axios.get(`${baseurl}`,{ headers: { "Accept": "application/json" } });
        console.log(res);
        setFacts(facts.concat(res.data.joke));
    }
    const Items = styled.h1`
        padding:2rem;
        // margin-top:1rem;
        // background-color:teal;
        background-color: rgba(0,50, 190, 0.2);
        width:50%;
        margin:2rem auto;
        border-radius: 15px;
    //     box-shadow:
    //   0 1px 1px hsl(0deg 0% 0% / 0.075),
    //   0 2px 2px hsl(0deg 0% 0% / 0.075),
    //   0 4px 4px hsl(0deg 0% 0% / 0.075),
    //   0 8px 8px hsl(0deg 0% 0% / 0.075),
    //   0 16px 16px hsl(0deg 0% 0% / 0.075);
      box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.1),
      0 2px 2px hsl(0deg 0% 0% / 0.1),
      0 4px 4px hsl(0deg 0% 0% / 0.1),
      0 8px 8px hsl(0deg 0% 0% / 0.1),
      0 16px 16px hsl(0deg 0% 0% / 0.1);
      color:rgba(0, 0, 0, 0.8);
    `;
    const Container= styled.div`
    // margin-x:auto;
    text-align:center;
    `; 

    const Requestbtn = styled.button`
    background-color: rgba(95, 132, 255, 0.781);
    border-radius:10px;
    padding:4px 7px;
    font-size: 1rem;
    border-style: none;
    box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.1),
      0 2px 2px hsl(0deg 0% 0% / 0.1),
      0 4px 4px hsl(0deg 0% 0% / 0.1),
      0 8px 8px hsl(0deg 0% 0% / 0.1),
      0 16px 16px hsl(0deg 0% 0% / 0.1);
     &:hover{
        box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.1),
      0 2px 2px hsl(0deg 0% 0% / 0.1),
      0 4px 4px hsl(0deg 0% 0% / 0.1);
    }
`;

    return (
        <div>
            <Container>
                <h1>Dad Jokes v1.0</h1>
                <Requestbtn onClick={fetchFact} >get jokes</Requestbtn>
                {/* <Requestbtn onClick={fetchFact}>
                    hello
                </Requestbtn> */}
                {facts.map((v,i)=>{
                    return(<Items key={i}>{v}</Items>);
                })}
            </Container>
            
        </div>
    )
}



export default DadJokes;
