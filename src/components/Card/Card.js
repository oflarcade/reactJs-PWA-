import React,  { Component } from 'react';
import { connect } from 'react-redux';
import cardColor from '../../const/cardColor';
import Divider from '@material-ui/core/Divider';

import './Card.css';

class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cardColor: '',
        }
    }

    componentWillMount() {
        console.log(this.props.item)
    }
    

    cardHelper = (item) => {
        switch (item.nomt) {
            case 'reduction': {
                var url = `http://seedup.tn/promoapp/public${item.image}`
            } return (
                <div className='card-container' style={{ backgroundColor: cardColor[item.nomcat] }}>
                    <div className='card-title'>{item.nomcat}</div>

                    <div className="card-content">
                        <div className='card-text'>  {item.produit} </div>
                        <div> <img src={url} className='card-image' alt='card-title' /> </div>
                    </div>

                    <Divider  className='spacer' />
                    <div className='card-footer'>
                        <div className='card-text__reduction' style={{textDecorationLine: 'line-through'  }}>{item.ancienprix}€/{item.unite}</div>
                        <div className='card-text'>{item.nouveauprix}€/{item.unite}</div>
                    </div>
                </div>
            )
            case 'promotion libre': {
                var url = `http://seedup.tn/promoapp/public${item.image}`
            } return (
                <div className='card-container' style={{ backgroundColor: cardColor[item.nomcat] }}>
                    <div className='card-title'>{item.nomcat}</div>

                    <div className="card-content">
                        <div className='card-text'>  {item.produit} </div>
                        <div> <img src={url} className='card-image' alt='card-title' /> </div>
                    </div>

                      {item.ancienprix === null? (<Divider />) : (<Divider  className='spacer' />) }  
                    <div className='card-footer__libre'>
                        {
                            item.ancienprix === null ? (<div className='card-text__libre'></div>) : (<div className='card-text__libre'>{item.ancienprix}€/{item.unite}</div>)
                        }
                        <div className='card-text_libre'>{item.libre}</div>
                    </div>
                </div>
            )
            case 'gratuite': {
                var url = `http://seedup.tn/promoapp/public${item.image}`

            } return (
                <div className='card-container' style={{ backgroundColor: cardColor[item.nomcat] }}>
                    <div className='card-title'>{item.nomcat}</div>

                    <div className="card-content">
                        <div className='card-text'>  {item.produit} </div>
                        <div> <img src={url} className='card-image' alt='card-title' /> </div>
                    </div>

                    <Divider  className='spacer' />
                    <div className='card-footer'>
                        <div className='card-text'>Product promotion</div>
                        <div className='card-text'>/Product Price</div>
                    </div>
                </div>
            )
            case 'solde': {
                var url = `http://seedup.tn/promoapp/public${item.image}`
            } return (
                <div className='card-container' style={{ backgroundColor: cardColor[item.nomcat] }}>
                    <div className='card-title'>{item.nomcat}</div>

                    <div className="card-content">
                        <div className='card-text'>  {item.produit} </div>
                        <div> <img src={url} className='card-image' alt='card-title' /> </div>
                    </div>

                    <Divider  className='spacer' />
                    <div className='card-footer'>
                        <div className='card-text'>Product promotion</div>
                        <div className='card-text'>/Product Price</div>
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
                {this.cardHelper(this.props.item)}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        lang: state.lang

    }
}

export default connect(mapStateToProps, null)(Card);
