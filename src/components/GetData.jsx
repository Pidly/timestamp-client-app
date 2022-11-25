import { useState, useEffect } from 'react';

function GetData() {
    const [data, setData] = useState({});
    const [epochData, setEpochData] = useState({});
    //app.get("/epoch", (req, res) => {

    const localUrl = "http://localhost:3001";
    const serverUrl = "https://timestamp-server-production.up.railway.app";
    const baseUri = localUrl;

    useEffect(() => {
        fetch(baseUri + "/home")
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

    useEffect(() => {
        console.log("Epoch use effect");
        fetch(baseUri + "/epoch")
        .then(res => res.json())
        .then(epochData => setEpochData(epochData))
    }, []);

    return (
        <div>
            <>
                <h2>Input</h2>
                <p>1453708800</p>
                <p>2015-12-25</p>
            </>
            <div>
                <h2>Output Date</h2>
                <p>{data.unix}</p>
                <p>{data.date}</p>
                <h2>Output Epoch</h2>
                <p>{epochData.unix}</p>
                <p>{epochData.date}</p>
            </div>
        </div>
    );
}

export default GetData;