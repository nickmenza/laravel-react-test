import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import cookie from 'react-cookies'
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            text : this.props.test.name
        }
        this.logout = this.logout.bind(this)
    }
    componentWillMount(){
        console.log("header", this.props)
    }
    changpage(e){
        let page = e.target.id
        if(page ==='login'){
            $('body').css('background','#673ab7')
        }else{
            $('body').css('background','')
        }
        document.getElementById(page).click();
        e.preventDefault();
        
    }
    isActive(componentName){
        if(componentName === this.props.active){
            return  "nav-item active"
        }else{
            return "nav-item"
        }

    }

    logout(){
       this.props.SET_USER('')
    }
   
     render(){
        let {text} = this.state
        text = this.props.test.name
        let user = this.props.user
        
        let div
        if(user.id){
            div =<div className="btn btn-info" onClick={this.logout}>
                     Logout</div>
        }else{
            div =  <div className="btn btn-info" id="login" onClick={(e)=>this.changpage(e)}>
                     Login</div>
        }
        
         return(
                     
                <nav className="navbar navbar-toggleable-md navbar-light fixed-top" style={{backgroundColor: '#e3f2fd'}}>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="">Fixed navbar</a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        
                        <li className={this.isActive('home')} onClick={(e)=>this.changpage(e)}>
                            <Link to='/home' id="home"/>
                            <Link to='/login' id="login"/>
                            <a className="nav-link" id="home" >Home <span className="sr-only">(current)</span></a>
                             
                        </li>
                        <li className={this.isActive('home1')} onClick={(e)=>this.changpage(e)}>  
                            <Link to='/home1' id="home1"/>
                            <a className="nav-link" id="home1" >Home1</a>
                        </li>
                        <li className='' onClick={(e)=>this.changpage(e)}> 
                        <a className="nav-link" >
                        {text}
                        </a>
                        </li>
                    </ul>
                     <form className="form-inline my-2 my-lg-0">
                     <label className="mr-sm-2">{user.name}</label>
                     {div}
                     
                     </form>
                     
                </div>
                </nav>  
         )
     }
}

const mapStateToProps = state => {
    // console.log('mapStateToProps',state.test1)
  return {
    test : state.test1,
    user : state.user
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
    SET_USER:(user)=>{
      dispatch({
        type: "SET_USER",
        user : user
      });
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);


