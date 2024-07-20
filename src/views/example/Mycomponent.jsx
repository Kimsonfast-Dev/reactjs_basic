import React from 'react';
import './Mycomponent.scss'

class Mycomponent extends React.Component {

    state = {
        name: "",
        channel: "Hoi dan IT"
    }

    handleOnChangeName = (event) =>{
        this.setState({
            name: event.target.value,
            channel:"ac"
        })
    }

    handleAlert = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    render(){
        // let a = "hello men1";
        console.log(this.state)
        return(
            <>
                <div>{this.state.name}</div>
                <div>{this.state.channel}</div>
                <input type="text" value={this.state.name}
                onChange={(event)=>this.handleOnChangeName(event)}
                />

                <div>
                    <button onClick={(event)=>{this.handleAlert(event)}} value="hello">oke</button>
                </div>
            </>
        )
    }
}

export default Mycomponent;
