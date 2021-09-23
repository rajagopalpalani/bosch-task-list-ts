import { useState, useEffect } from "react";

function useFetchData(action: any) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        async function loadData() {
            try {
                setIsLoaded(false);
                const actionData = await action();
                setData(actionData);
            } catch (error: any) {
                setError(error);
            }
            finally {
                setIsLoaded(true);
            }
        }
        loadData();
    }, [action]);

    return [data, isLoaded, error];
}

export default useFetchData;
