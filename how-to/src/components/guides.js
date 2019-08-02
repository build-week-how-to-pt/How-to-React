import React from 'react';
import axios from 'axios';
import header from './Header'

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
                {this.state.Guides.map((Guides,index)=>{
                    return(
                    <div key={index}>
                    <header />
                        <h2>{`id: ${Guides.id}`}</h2>
                        <h2>{`title: ${Guides.title}`}</h2>
                        <h2>{`type: ${Guides.type}`}</h2>
                        <h3>{`description: ${Guides.description}`}</h3>
                        <p>{`step_1: ${Guides.step_1}`}</p>
                        <p>{`step_2: ${Guides.step_2}`}</p>
                        <p>{`step_3: ${Guides.step_3}`}</p>
                        <p>{`step_4: ${Guides.step_4}`}</p>
                        <p>{`step_5: ${Guides.step_5}`}</p>
                        {/* <link>{`link: ${Guides.link}`}</link> */}
                    </div>
                    )
              })}      
            </div>
        )
    }
}

export default Guides;