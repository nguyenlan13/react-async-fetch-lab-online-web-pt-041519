// create your App component here
import React from 'react'

export default class App extends React.Component{

    state = {
        pplInSpace: []
    }

    componentDidMount(){
        fetch( 'http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(json => this.setState({pplInSpace: json}))
    }

    render(){
        return(
            this.state.pplInSpace.map(person => person.name)
        )
    }

}