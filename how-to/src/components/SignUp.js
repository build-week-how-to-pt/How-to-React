import React from 'react';
import axios from "axios";




class signUp extends React.Component{
    constructor(){
        super()
        this.state ={
            username: '',
            password: '',
            type: ''
        }
    }
    changeHandler = (evt) => {
		evt.preventDefault()

		this.setState({
			[evt.target.name]: evt.target.value,
		})
	}
    signUp = (e) => {
        e.preventDefault();
        const {username,password,type} = this.state
        const newUser = {username,password,type}
        axios.post(`https://bw-how-to.herokuapp.com/register`,newUser)
             .then((res)=> {
                 console.log('res',res)
                 localStorage.setItem('token',res.data.token)})
              .catch(err => {console.log(err)})
        this.setState({
            username: '',
            password: '',
            type: ''
        })  
    }
    render(){
        return(
            <div class="jumbotron">
                <h2>Sign up</h2>
                <form class="form-block" onSubmit={this.signUp}>
                <input className="form__input" type="text"
                      name="username"
                      value={this.state.username}
                      onChange={this.changeHandler}
                      placeholder="username" /> 
                      <br /> <br />
                <input className="form__input" type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                      placeholder="password" />
                      <br /> <br /> 
                  <input className="form__input" type="text"
                      name="type"
                      value={this.state.type}
                      onChange={this.changeHandler} 
                      placeholder="Type" /> <br /> 
                      <br /> 

                <button class="btn btn-success" type = "submit">SignUp</button>        
                </form>
            </div>
        )
    }
}

export default signUp