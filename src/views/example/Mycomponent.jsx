import React from 'react';
import './Mycomponent.scss'

class Mycomponent extends React.Component {

    state = {
        name: "pandanlab",
        channel: "Hoi dan IT"
    }

    handleOnChangeName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    render(){
        // let a = "hello men1";
        return(
            <>
                <div>{this.state.name}</div>
                <div>{this.state.channel}</div>
                <input type="text" value={this.state.name}
                onChange={(event)=>this.handleOnChangeName(event)}
                />
            </>
        )
    }
}

export default Mycomponent;
