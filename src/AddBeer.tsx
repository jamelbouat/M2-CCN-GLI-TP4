import React from "react";

interface Props {
    addThisBeer: (e: string) => void
}

interface State {
    value: string
}

class AddBeer extends React.Component<Props, State> {

    state: State = {
        value : ''
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.addThisBeer(this.state.value);
        this.setState({ value : '' });
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       this.setState({ value : e.target.value })
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input type="text"
                       value={ this.state.value }
                       onChange={ this.handleChange }
                       placeholder="Add a beer"
                       required
                />
                <input type="submit" value = 'Add a beer'/>
            </form>

        );
    }

}

export default AddBeer;
