import React from 'react';
import axios from 'axios';
// import Header from './Header'

class Guides extends React.Component{
    constructor(){
        super()
        this.state ={
            Guides: []
        }
    }
    componentDidMount(){
        const headers = {
            authorization:localStorage.getItem('token'),
        }
        axios.get(`https://bw-how-to.herokuapp.com/guides` ,{headers})
        .then(res => {this.setState({Guides:res.data})})
        .catch(err => {console.log('error',err)})
    }
    render(){
        if(!this.state.Guides){
            return<div>Loading Guides</div>
        }
        return(
            <div>
                <br />
                {this.state.Guides.map((Guides,index)=>{
                    return(
                        
                    <div class="alert alert-success" role="alert" key={index}>
                    <div className="guide-header">
                        {/* <h2>{`id: ${Guides.id}`}</h2> */}
                        <h2 >{` ${Guides.title}`}</h2>
                        <h2 className="type">{` ${Guides.type}`}</h2>
                    </div>
                        <hr />
                        <h3> <span class="badge badge-success">Description</span> {Guides.description}</h3>
                        <div className="recipes__box">
                        <p class="jumbotron">{`step_1: ${Guides.step_1}`}</p>
                        <p class="jumbotron">{`step_2: ${Guides.step_2}`}</p>
                        <p  class="jumbotron">{`step_3: ${Guides.step_3}`}</p>
                        <p class="jumbotron">{`step_4: ${Guides.step_4}`}</p>
                        <p class="jumbotron">{`step_5: ${Guides.step_5}`}</p>
                        <a class="btn btn-dark" href= {`${Guides.link}`}>Watch Video</a>
                        <br></br>
                        </div>
                    </div>
                    )
              })}      
            </div>
        )
    }
}

export default Guides;