import { useState, useEffect } from 'react';

function GetData() {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch("/home")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div>
            <p>{data.unix}</p>
            <p>{data.date}</p>
        </div>
    );
}

export default GetData;