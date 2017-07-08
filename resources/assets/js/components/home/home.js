import React, { Component } from 'react'
import Layout from '../../layouts/MainLayout'
 import axios from "axios"
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); // 

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 'nick  naja',
            test :''
        }
        this.test = this.test.bind(this)
        this.chang =this.chang.bind(this)
        this.animate =this.animate.bind(this)
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
    animate(){
       
        this.setState({
          test  : 'animated bounceInDown'
        })
        
        setTimeout(()=>{
            this.setState({
          test  : ''
            })
        }, 1000);

    }
     render(){
         let {test} = this.state

         return(
             <Layout active="home">
             <button onClick={this.test}>test redux</button>
             <input value={this.state.name} onChange={(e)=>this.chang(e)}/>
                
                <div className={test} id="react-animate">
                    <div className="row text-center">
                        <h1 className="">Example</h1>  
                    </div>
                </div>
             <button onClick={this.animate}>test animate</button>
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


