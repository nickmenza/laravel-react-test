import React, { Component } from 'react'
import Layout from '../../layouts/MainLayout'
import axios from "axios"
import {connect} from 'react-redux';


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 'nick  naja',
            test :'',
            text : this.props.test.name
        }
        this.test = this.test.bind(this)
        this.chang =this.chang.bind(this)
        this.animate =this.animate.bind(this)
    }
    componentWillMount(){
        axios.get('api/user').then(function(response,re){
            console.log('home',response)
        }).catch(function(error){
            console.log(error)
        })
    }
    test(){
        this.props.SET(this.state.name)
        
        console.log('home > props',this.props)
        

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
         let {text} =this.state
         text = this.props.test.name
         return(
             <Layout active="home">
             <button onClick={this.test}>test redux</button>
             <input value={this.state.name} onChange={(e)=>this.chang(e)}/>
                <label>{text}</label>
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
    },
    
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);


