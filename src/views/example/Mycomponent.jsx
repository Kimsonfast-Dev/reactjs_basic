import React from 'react';
import './Mycomponent.scss'

class Mycomponent extends React.Component {

    state = {
        firstName: "",
        lastName: ""
    }


    handleOnChange_firstName = (event) =>{
        this.setState({
            firstName : event.target.value
        })
    }

    handleOnChange_lastName = (event) =>{
        this.setState({
            lastName : event.target.value
        })
    }

    handleClick_submit = (event) =>{
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <>
                <form>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname"
                    value={this.state.firstName}
                    onChange={(event)=>{this.handleOnChange_firstName(event)}}/>

                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname"
                    value={this.state.lastNameName}
                    onChange={(event)=>{this.handleOnChange_lastName(event)}}/>

                    <button onClick={(event)=>{this.handleClick_submit(event)}}>submit</button>
                </form>
            </>
        )
    }
}

export default Mycomponent;
