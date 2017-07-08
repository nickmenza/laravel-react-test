import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    changpage(e){
        let page = e.target.id
        console.log(page)
        document.getElementById(page).click();
        console.log(this.isActive('home'))
    }
    isActive(componentName){
    if(componentName === this.props.active){
      return  "nav-item active"
    }else{
      return "nav-item"
    }
    }
     render(){
         return(
                     
                <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="">Fixed navbar</a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        
                        <li className={this.isActive('home')} onClick={(e)=>this.changpage(e)}>
                            <Link to='/home' id="home"/>
                            <a className="nav-link" id="home" >Home <span className="sr-only">(current)</span></a>
                             
                        </li>
                        <li className={this.isActive('home1')} onClick={(e)=>this.changpage(e)}>  
                            <Link to='/home1' id="home1"/>
                            <a className="nav-link" id="home1" >Home1</a>
                        </li>
                        
                    </ul>
                     
                     
                </div>
                </nav>  
         )
     }
}



export default Header;


