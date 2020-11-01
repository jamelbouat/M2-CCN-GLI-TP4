import React from "react";
import { Link } from "react-router-dom";

class Author extends React.Component<any, any> {
    render() {
        return (
            <div className="container mt-5 display-4">
                <Link to="/">Back to beers list</Link>
                <hr/>
                <div>
                    Author : Bouatmane Djamel
                </div>
                <div>
                    M2 CCN
                </div>
            </div>
        );
    }
}

export default Author;
