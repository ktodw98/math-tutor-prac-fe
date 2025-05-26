import axios from "axios";
import { useState, useEffect } from 'react';

function useGetMessage ( url:string ) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get(url).then((res) => setMessage(res.data));
    }, [url]);

    return message
}

export default useGetMessage