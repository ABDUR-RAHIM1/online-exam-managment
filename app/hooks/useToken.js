
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const useToken = () => {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = Cookies.get('userToken');
        setToken(token);
    }, []);

    return token;
}

export default useToken;
