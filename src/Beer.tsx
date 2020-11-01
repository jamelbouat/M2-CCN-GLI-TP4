import React from "react";

export  default class Beer extends React.Component<any, any> {

    render() {
        return (
            <li className='list-group-item'>
                <span className='h3'>{ this.props.name }</span>
                <button onClick={this.props.beerToRemove}
                        className="btn btn-outline-info float-right">
                        <span className="glyphicon glyphicon-remove"/>
                </button>
            </li>
        )
    }
}
