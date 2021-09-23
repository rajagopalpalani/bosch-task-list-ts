import React from "react";

import useFetchData from "./../actions/CustomUseFetch";
import ErrorContainer from "./ErrorContainer";
import LoaderContainer from "./LoaderContainer";

interface IFetchProps {
    action: any,
    children: any
}

const FetchContainer = ({ action, children }: IFetchProps) => {

    const [data, isLoaded, error] = useFetchData(action);

    if (error) {
        return <ErrorContainer />;
    }

    if (!isLoaded) {
        return <LoaderContainer />;
    }

    if (!data) return null;

    return children(data);
}

export const FetchMemoContainer = React.memo(FetchContainer);
