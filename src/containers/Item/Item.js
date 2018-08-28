import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import './Item.css';
import Divider from '@material-ui/core/Divider';

class Item extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         item : {}
      }
    }

    cardHelper = (item) => {
        switch (item.nomt) {
            case 'reduction': {
                var url = `http://seedup.tn/promoapp/public${item.image}`
            } return (
                <div className='item-container' >
                       <div className='item-title'>{item.nomcat}</div>
                    <div className="item-content">
                        <div> <img src={url} className='item-image' alt='item-title' /> </div>
                    </div>

                    <Divider  className='spacer' />
                    <div className='item-footer'>
                        <div className='item-text__reduction' style={{textDecorationLine: 'line-through'  }}>{item.ancienprix}€/{item.unite}</div>
                        <div className='item-text'>{item.nouveauprix}€/{item.unite}</div>
                    </div>
                    <div className='item-text'>
                        {this.props.lang.product} :  {item.produit}
                    </div>
                </div>
            )
            case 'promotion libre': {
                var url = `http://seedup.tn/promoapp/public${item.image}`
            } return (
                <div className='item-container' >
                       <div className='item-title'>{item.nomcat}</div>
                    <div className="item-content">
                        <div> <img src={url} className='item-image' alt='item-title' /> </div>
                    </div>

                    <Divider  className='spacer' />
                    <div className='item-footer__libre'>
                    {
                            item.ancienprix === null ? (<div className='item-text__libre'></div>) : (<div className='item-text__libre'>{item.ancienprix}€/{item.unite}</div>)
                        }
                        <div className='card-text_libre'>{item.libre}</div>
                    </div>
                    <div className='item-text'>
                        {this.props.lang.product} :  {item.produit}
                    </div>
                </div>
            )
            case 'gratuite': {
                var url = `http://seedup.tn/promoapp/public${item.image}`

            } return (
               <div className='item-container' >
                       <div className='item-title'>{item.nomcat}</div>
                    <div className="item-content">
                        <div> <img src={url} className='item-image' alt='item-title' /> </div>
                    </div>

                    <Divider  className='spacer' />
                    <div className='item-footer'>
                        <div className='item-text__reduction' style={{textDecorationLine: 'line-through'  }}>{item.ancienprix}€/{item.unite}</div>
                        <div className='item-text'>{item.nouveauprix}€/{item.unite}</div>
                    </div>
                    <div className='item-text'>
                        {this.props.lang.product} :  {item.produit}
                    </div>
                </div>
            )
            case 'solde': {
                var url = `http://seedup.tn/promoapp/public${item.image}`
            } return (
                <div className='item-container' >
                       <div className='item-title'>{item.nomcat}</div>
                    <div className="item-content">
                        <div> <img src={url} className='item-image' alt='item-title' /> </div>
                    </div>

                    <Divider  className='spacer' />
                    <div className='item-footer'>
                        <div className='item-text__reduction' style={{textDecorationLine: 'line-through'  }}>{item.ancienprix}€/{item.unite}</div>
                        <div className='item-text'>{item.nouveauprix}€/{item.unite}</div>
                    </div>
                    <div className='item-text'>
                        {this.props.lang.product} :  {item.produit}
                    </div>
                </div>
            )
            case 'information':
            default:
        }
    }
    

    render() {
        return (
            <div>
                <Header headerTitle={this.props.item.itemDetail.nomcat} />
                <main>
                    {this.cardHelper(this.props.item.itemDetail)}
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.item,
        lang: state.lang
    }
}

export default connect(mapStateToProps,null)(Item);