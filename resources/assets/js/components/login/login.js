import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from "axios"
import Layout from '../../layouts/MainLayout'
import { Router} from 'react-router-dom'
import cookie from 'react-cookies'
// import './login.css'
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:{
                username: '',
                password: ''
            },
            loading : false
        }
        this.submit =this.submit.bind(this)
        this.handlechange = this.handlechange.bind(this)
    }
    componentWillMount(){
        console.log(this)
       $('body').css('background','#673ab7')
    }
    
    submit(e){
        let self = this
        self.setState({
            loading :true
        })
        
        axios.post('api/login',self.state.user).then(function(response,re){
            console.log('login',response.data.data)
            if(response.data.status ===200){
                self.props.SET_USER(response.data.data)
                $('body').css('background','')
                self.props.history.push('/home')
            }else{
                alert("Username or Password incorrect")
                self.setState({
                loading :false
                })
            }
            
        }).catch(function(error){
            console.log(error)
        })
        e.preventDefault();
    }
    handlechange(e){
        let name = e.target.name
        this.setState({
            user: {
                ...this.state.user,
                [name] : e.target.value
            }
        })
    }

     render(){
         let {user} = this.props
         let {loading} = this.state
         if(user.id){
             this.props.history.push('/home')
         }
         return(
            <Layout active="">
            <div className="col-md-12">

                <div className="nb-login">
                    <h3 className="scenter">Sign In</h3>
                    <form onSubmit={(e)=>this.submit(e)}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Email" value={this.state.user.username} name='username' onChange={(e)=>this.handlechange(e)} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Enter Password" value={this.state.user.password} name="password"  onChange={(e)=>this.handlechange(e)}/>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/> Remember Me
                            </label>
                        </div>
                        {loading ?
                            <div className="text-center">
                            <i className="fa fa-spinner fa-spin fa-2x fa-fw" aria-hidden="true"></i>
                            </div>
                             :
                             <input type="submit" className="btn btn-block" value='Sign In'/>
                        }
                        
                    </form>
                    <div className="center or">OR</div>
                    <h3 className="center">Sign In Using</h3>
                    <div className="social">
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i> &nbsp; Login with Facebook</a>
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i> &nbsp; Login with Twitter</a>
                        <a href="#" className="google-plus"><i className="fa fa-google-plus"></i> &nbsp; Login with Google Plus</a>
                    </div>
                </div>

                </div>
            </Layout>
         )
     }
}


const mapStateToProps = state => {
   
  return {
    user : state.user
  }
}

const mapDispatchToProps = dispatch => {
   return{
    SET_USER:(user)=>{
      dispatch({
        type: "SET_USER",
        user : user
      });
    },
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);


