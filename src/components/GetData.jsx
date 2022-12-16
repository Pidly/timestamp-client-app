import axios from 'axios';
import React from "react";
import { useState } from 'react';

function GetData() {
    const [data, setData] = useState({});
    const [index, setIndex] = useState({});
    
    //app.get("/epoch", (req, res) => {

    const localUrl = "http://localhost:3001";
    const serverUrl = "https://timestamp-server-production.up.railway.app";
    const baseUri = localUrl;


    const handleChange = () => {
        console.log("Handle change");
    }
   function sendData() {
        console.log("Sending data");
        
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({url: 'http://www.google.com'})
        };
        axios.post('' + baseUri + '/api/shorturl', {body: JSON.stringify({url: data, index: parseInt(index)})})
            .then(response => console.log(response));
        
    }

    return (
        <div>
            <p>Index</p>
            <input value={index} onInput={e => setIndex(e.target.value)}></input>
            <p>URL</p>
            <input value={data} onInput={e => setData(e.target.value)}></input>
            <button onClick={sendData}>
                Button
            </button>
        </div>
    );
}

export default GetData;