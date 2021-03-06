import React from "react";
import Helmet from "react-helmet";

const Secret = () => (
    <div>
        <h2>This is the secret page</h2>
        <Helmet>
            <title>Secret Page</title>
            <meta name="description" content="This is a proof of concept for React SSR" />
        </Helmet>
    </div>
);

export default Secret;
