import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SideIcon from '../SideIcon/SideIcon';

import './DrawerMenu.css';

const styles = {
  width: 350,
  list: {
  },
  fullList: {
    width: 'auto',
  },
  sideBanner: {
    width: '100%',
    height: '90%',
  }
};

class DrawerMenu extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      left: open,
    });
  };






  render() {
    const { classes } = this.props;

    const sideList = (
      <div className='side-container'>
        <Link to='/'><div className='side-bar-logo'><img src={require('../../assets/images/logo.png')} alt='side-logo' style={{ width: '90px', height: '90px', borderRadius: 50 }} /></div> </Link>
        <img src={require('../../assets/images/promo.jpg')} alt='side-drawer__banner' className={classes.sideBanner} />
        <Divider />
        <div className='category-container'>
          <div className='category-pack'>
            <Link to='/category:Fruits'><SideIcon iconColor='#81DD20' iconSource={require('../../assets/images/carrot.png')} title={this.props.lang.fruitIconTitle} /></Link>
            <Link to='/category:Meat'><SideIcon iconColor='#D5212F' iconSource={require('../../assets/images/meat.png')} title={this.props.lang.meatIconTitle} /></Link>

          </div>
          <div className='category-pack'>
            <Link to='/category:Bread'><SideIcon iconColor='#E2CA16' iconSource={require('../../assets/images/bread.png')} title={this.props.lang.breadIconTitle} /></Link>
            <Link to='/category:Fish'><SideIcon iconColor='#3BB0CC' iconSource={require('../../assets/images/fish.png')} title={this.props.lang.fishIconTitle} /></Link>
          </div>
          <div className='category-pack'>
            <Link to='/category:Alimentation'><SideIcon iconColor='#FF5733' iconSource={require('../../assets/images/wine-bottle.png')} title={this.props.lang.alimentationIconTitle} /></Link>
            <Link to='/category:nonFood'><SideIcon iconColor='#D3C096' iconSource={require('../../assets/images/no-food.png')} title={this.props.lang.noFoodIconTitle} /></Link>
          </div>
        </div>


        <div className='side-footer'>
          <div className='side-footer-row'>
            <a href='tel:+3243410460'><div><img src={require('../../assets/images/landLine-icon.png')} className='side-footer__icon' alt='side-drawer-footer-icon' /></div></a>
            <a href='tel:+32472910917'><div><img src={require('../../assets/images/mobile-icon.png')} className='side-footer__icon' alt='side-drawer-footer-icon' /></div></a>
          </div>
          <div className='side-footer-row'>
            <a href='https://www.google.tn/maps/place/Avenue+de+Lille+2,+4020+Li%C3%A8ge,+Belgique/@50.6471802,5.60036,17z/data=!3m1!4b1!4m5!3m4!1s0x47c0f0bddce738dd:0xb2c6b6af1e289179!8m2!3d50.6471802!4d5.6025487?hl=fr'><div><img src={require('../../assets/images/location-icon.png')} className='side-footer__icon' alt='side-drawer-footer-icon' /></div></a>
            <a href='https://www.facebook.com/taaj.liege/'><div><img src={require('../../assets/images/facebook-icon.png')} className='side-footer__icon' alt='side-drawer-footer-icon' /></div></a>
          </div>
        </div>
      </div>
    );



    return (
      <div>

        <Drawer open={this.props.show} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

DrawerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    lang: state.lang
  }
}



export default connect(mapStateToProps, null)(withStyles(styles)(DrawerMenu));