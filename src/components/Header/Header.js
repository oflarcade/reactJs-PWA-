import React, { Component } from 'react';
import DrawerMenu from '../DrawerMenu/DrawerMenu';
import LanguageMenu from '../LanguageMenu/LanguageMenu';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import './Header.css';


class Header extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
            isLeftOpen: false,
            isRightOpen: false,
        
      };
    };

    handleLeftDrawer = () =>  {
        this.setState((prevState) => {
            return {isLeftOpen: !prevState.isLeftOpen}
        })
     }
    handleRightDrawer = () =>  {
        this.setState((prevState) => {
            return { isRightOpen: !prevState.isRightOpen}
        })
     }
   
    render() {
        return (
            <header className='toolbar'>
                <nav className='toolbar__navigation'>
                    <div onClick={this.handleLeftDrawer}>
                        <img src={require('../../assets/images/menu.png')} className='side-button' alt='drawer-menu-icon' />
                        <DrawerMenu show={this.state.isLeftOpen} />
                    </div>
                    <div className='title-bar-header'>{this.props.headerTitle}</div>
                    <div onClick={this.handleRightDrawer}>
                        <img src={require('../../assets/images/lang.png')} className='side-button'  alt='language-menu-icon'/>
                        <LanguageMenu show={this.state.isRightOpen} />
                    </div>
                </nav>
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        lang: state.lang
    }
}




export default connect(mapStateToProps, null)(withRouter(Header));