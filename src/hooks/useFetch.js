import { useState, useEffect } from "react";

const useFetch = (url) => { //because our hook needs to receive the API URL. URL is important part here
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reponse = await fetch(url);
                const result = await reponse.json();
                setData(result);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false)
            }

        };
        fetchData();

    }, [url]); // Use of url is Because if the URL changes, we want the hook to fetch the new data.

    return { data, loading, error };

};

export default useFetch;