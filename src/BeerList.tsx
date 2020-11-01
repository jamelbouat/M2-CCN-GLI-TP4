import React from 'react';
import Beer from './Beer';
import AddBeer from "./AddBeer";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

interface Props {
    beers: string[]
}

interface State {
    beers: string[];
}

class BeerList extends React.Component<Props, State> {

    state = {
        beers : JSON.parse(localStorage.getItem('beers') as string) || this.props.beers
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="display-4">
                    <Link to="/about">About me</Link>
                </div>
                <hr/>
                <ul className='list-group'>
                    {
                        this.state.beers.map( (beer: string, index: number) =>
                            <Beer key = { index }
                                  name = { beer }
                                  beerToRemove = { () => this.removeBeer(index) }
                            />
                        )
                    }
                </ul>
                { !this.state.beers.length && <h4 className='text-danger'>No beer to drink 😔 !</h4> }
                <AddBeer addThisBeer = { this.handleAddThisBeer }/>
            </div>
    )}

    removeBeer = (index: number) => {
        const beersList = [...this.state.beers];
        beersList.splice(index, 1);

        this.updateBeersList(beersList);
    }

    handleAddThisBeer = (value: string) => {
        const beersList = [...this.state.beers];
        beersList.push(value);

        this.updateBeersList(beersList);
    }

    updateBeersList(beersList: string[]) {
        this.setState({ beers : beersList }, () => {
            localStorage.setItem('beers', JSON.stringify(this.state.beers))
        });
    }
}

export default BeerList;
