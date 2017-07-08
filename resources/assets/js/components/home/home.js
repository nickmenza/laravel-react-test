import React, { Component } from 'react'
import Layout from '../../layouts/MainLayout'
 import axios from "axios"
import {connect} from 'react-redux';


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 'nick  naja'
        }
        this.test = this.test.bind(this)
        this.chang =this.chang.bind(this)
    }
    componentWillMount(){
        axios.get('api/user').then(function(response,re){
            console.log(response)
        }).catch(function(error){
            console.log(error)
        })
    }
    test(){
        console.log(this.props)
        this.props.SET(this.state.name)
    }
    chang(e){
        this.setState({
            name :e.target.value
        })
    }
     render(){
         return(
             <Layout active="home">
             <button onClick={this.test}>test redux</button>
             <input value={this.state.name} onChange={(e)=>this.chang(e)}/>
             </Layout>
                 
         )
     }
}


const mapStateToProps = state => {
    console.log(state)
  return {
    test : state.test1
  }
}

const mapDispatchToProps = dispatch => {
   return{
    SET:(name)=>{
      dispatch({
        type: "SET",
        name : name
      });
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);


