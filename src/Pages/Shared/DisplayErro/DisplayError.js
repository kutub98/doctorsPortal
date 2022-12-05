import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div>
            <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>

        </div>
    );
};

export default DisplayError;