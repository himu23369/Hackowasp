import React, { Component } from 'react'

export default class UserDetails extends Component{
    componentDidMount(){
        fetch("http://localhost:5000/userData",{
            method:"Post",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                token:window.localStorage.getItem("token"),
            }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userData");
        }
        );
    }
    render(){
    return(
            <div className="container">
                Name <br />
                <h3>Chirag</h3>
                <br />
                email <br />
                <h3>chirag@gmail.com</h3>
            </div>
    )
}
}