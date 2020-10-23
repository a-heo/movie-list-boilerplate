import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this); 
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        // console.log('typed', event.target.value);
        this.setState({
            value: event.target.value
        })
    }

    handleClick(event) {
        event.preventDefault(); 
        console.log(this.props);
        // console.log('submit', this.state.value);
        this.props.handleSearch(this.state.value); 
    }

    render() {
        const value = this.props.value; 
        return (
            <form type='text'>
                <input type="text" value={this.props.value} onChange={this.handleChange}></input>
                <button type="submit" onClick={this.handleClick}>Submit</button>
            </form>
        )
    }
}



export default Search; 