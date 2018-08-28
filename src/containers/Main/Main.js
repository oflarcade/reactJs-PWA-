import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import {connect} from 'react-redux';
import {  setItem } from '../../actions'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import axios from 'axios';
import './Main.css';


class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
          poromotionList: [] ,
    }
  }
  
  componentDidMount() {
      this.getData();
  }


  getData = () => {
    switch(this.props.lang.defaultLang){
      case 'Fr':{
        axios.get("https://seedup.tn/promoapp/public/promo")
          .then(res => {
            
            this.setState({poromotionList: res.data})
            console.log('fetching/refreshing');
          })
      }
      break;
      case 'De':{
         axios.get("https://seedup.tn/promoapp/public/promode")
          .then(res => {
            
            this.setState({poromotionList: res.data})
            console.log('fetching/refreshing');
          })
      }
      break;
      default  :
          return null;
    }
  }

  

  componentDidUpdate = (nextProps) => {
    if(this.props.lang.headerTitle !== nextProps.lang.headerTitle){
        console.log("we should rerender");
        this.getData();
        console.log('this should contain  new loaded data ',this.props.lang.listDetails);
        this.renderCards()
    }
   }

   loadStore = (item) => {
     this.props.setItem(item);
   }


  renderCards =() =>{
    return this.state.poromotionList.map((item) => {
       return <Link to='/item' onClick={() => this.loadStore(item)}><Card item={item} key={item.idp} /></Link>
    })

  }




  render() {
    return (
      <div>
        <Header headerTitle={this.props.lang.headerTitle} />
      <main >
          <img src={require('../../assets/images/promo.jpg')} alt='screen-banner' className='banner' />
            {this.renderCards()}
          
      </main>
      </div>
      
    )
  }
}

function mapStateToProps(state) {
  return {
    lang: state.lang
  }
}

function mapDisptachToProps(dispatch) {
    return bindActionCreators({ setItem}, dispatch)
}

export default connect(mapStateToProps, mapDisptachToProps)(Main);