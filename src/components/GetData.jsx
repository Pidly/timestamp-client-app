import { useState, useEffect } from 'react';

function GetData() {
    const [data, setData] = useState({})
    const baseUri = "https://timestamp-server-production.up.railway.app";

    useEffect(() => {
        fetch(baseUri + "/home")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
        <div>
            <p>Data Info</p>
            <p>{data.unix}</p>
            <p>{data.date}</p>
        </div>
    );
}

export default GetData;