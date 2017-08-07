import React, { Component } from 'react'
import Layout from '../../layouts/MainLayout'
 

class Home1 extends Component {
    
     constructor(props){
         super(props)

         this.state = {
             numbers :[1, 2,3,4,5,6]
         }

         this.test = this.test.bind(this)
         this.handleScroll = this.handleScroll.bind(this)
     }
     test(){
         let {numbers} = this.state
         numbers.map((item,index)=>{
             numbers.push(numbers.length+1)
         })
        this.setState({
            numbers :numbers
        })
     }
     componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


     handleScroll(e) {
         
    let scrollTop  =  $('body').scrollTop()
    console.log(document.body.scrollHeight)
    // let scrollHeight  =  $('body').scrollHeight()
    let last_product = $('#product'+this.state.numbers.length)
    let height_body =  $(window).height()-160
    let last_product_top = last_product.offset().top
    let window_t = $(window).height()-140
    console.log(last_product.offset().top)
    console.log('scrollTop',scrollTop)
    
    if(scrollTop>300){
        // console.log("tr")
    }else{
        // console.log('fa')
    }
    
    }
     render(){
         const {numbers} = this.state
         
         
         return(
             <Layout active="home1">
                <div className="row">
                    <div className="row col-md-9">

                        {
                            numbers.map((item,index)=>
                                <div className="col-md-4 animated fadeIn" id={'product'+(index+1)} key={index}>
                                    <div className="card" style={{width: '15rem'}}>
                                        <img className="card-img-top" src="/images/product.jpg" style={{height:'15rem'}} alt="Card image cap"/>
                                        <div className="card-block">
                                            <h4 className="card-title">Card title</h4>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            
                                
                            )
                        }
                        
                    </div>
                    <div className="col-md-3">
                    <div className='btn btn-danger' onClick={this.test}>test</div>
                    list shopping
                    </div>
                </div>
             </Layout>
                 
         )
     }
}



export default Home1;


