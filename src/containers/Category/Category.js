import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import Header from '../../components/Header/Header';
import { connect } from 'react-redux';
import axios from 'axios';
import Card from '../../components/Card/Card';
import './Category.css';

class Category extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       headerTitle: '',
       poromotionList: []
    };
  };
  

  componentWillMount() {
    this.headerTitleHelper();
    this.getData();
  }



  bannerRenderHelper() {
    const TYPE = this.props.match.params.cat;


    switch(TYPE) {
      case ':Fruits': 
          return <img src={require('../../assets/images/fl.jpg')} className='banner'   alt='category-banner'/>
      case ':Meat':    
          return <img src={require('../../assets/images/v.jpg')} className='banner'   alt='category-banner'/>

      case ':Bread': 
          return <img src={require('../../assets/images/b.jpg')} className='banner'   alt='category-banner'/>

      case ':Fish': 
          return <img src={require('../../assets/images/p.jpg')} className='banner'  alt='category-banner' />    
      case ':Alimentation': 
          return <img src={require('../../assets/images/a.jpg')} className='banner'   alt='category-banner'/>    
      case ':nonFood': 
          return <img src={require('../../assets/images/nf.png')} className='banner'   alt='category-banner'/>    
      default: return null;    
      } 
  }

  headerTitleHelper () {
    const TYPE = this.props.match.params.cat;
    console.log('language is :',this.props.lang.defaultLang)
    if(this.props.lang.defaultLang === 'Fr'){
      switch(TYPE) {
        case ':Fruits': 
            return 'Fruits et légumes';
        case ':Meat':    
        return 'Boucherie';
        case ':Bread': 
        return 'Boulangerie';
        case ':Fish': 
        return 'Poissonnerie';
        case ':Alimentation': 
        return 'Alimentation';
        case ':nonFood': 
        return 'Non food';
        default: 
          return null;
        } 
    } else if(this.props.lang.defaultLang === 'De') {
      switch (TYPE) {
        case ':Fruits':
          return 'Obst und Gemüse';
        case ':Meat':
          return 'Schlächterei';
        case ':Bread':
          return 'Bäckerei';
        case ':Fish':
          return 'Fisch';
        case ':Alimentation':
          return 'Versorgung';
        case ':nonFood':
          return 'Nicht essen';
        default: 
          return null;  
      } 
    }
    

  }

  
  getData = () => {
    switch(this.props.lang.defaultLang){
      case 'Fr':{
        axios.get("https://seedup.tn/promoapp/public/promo")
          .then(res => {
            this.setState({poromotionList: res.data})
            console.log('fetching/refreshing from cat');
          })
      }
      break;
      case 'De':{
        axios.get("https://seedup.tn/promoapp/public/promode")
          .then(res => {
            
            this.setState({poromotionList: res.data})
            console.log('fetching/refreshing from cat');
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

  renderCards =() =>{
    var res = this.state.poromotionList.filter(el => el.nomcat === this.headerTitleHelper())
    return res.map((item) => {
          return  <Card item={item} key={item.idp} />
    })

  }





  render() {
    return (
      <div>
        <Header headerTitle={this.headerTitleHelper()} />
        <main>
          {this.bannerRenderHelper()}
          {/* <p>We are here in Category {this.props.match.params.cat}</p> */}
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


export default connect(mapStateToProps,null)(withRouter(Category));