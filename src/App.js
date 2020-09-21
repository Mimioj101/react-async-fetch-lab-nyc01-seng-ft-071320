// create your App component here
import React from "react"


class App extends React.Component {

    state = {
        pplInSpace: []
    }

    componentDidMount() {
        fetch ("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(data => this.setState({pplInSpace: data}))
    }
    
    render() {
        // console.log(this.state)
        return (
         <div>
             {this.state.pplInSpace.map((person) => <p>{person.name}</p>)}
         </div>
     );   

    }
}

export default App;