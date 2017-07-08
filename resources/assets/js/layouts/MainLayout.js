import React, { Component } from 'react'
import Footer from '../includes/footer'
import Header from '../includes/header'
 

class MainLayout extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 'hello nick'
        }
    }
     render(){
         return(
             
                 <div>
                        <Header active={this.props.active}/> 
                        <div className="container" style={{paddingTop:'80px'}}>
                         {this.props.children}
                        </div>
                        <Footer />
                </div>
                
         )
     }
}



export default MainLayout;


