import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {changeLanguage} from '../../actions'
import './LanguageMenu.css';
const styles = {
  list: {
    width: 150,
  },
  
};

class DrawerMenu extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      right: false,
    lan: 'Fr',   
    };
    this.handelLanguage = this.handelLanguage.bind(this);
  };
  

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handelLanguage = (event) => {

        if(event.target.id === 'Fr') {
          this.props.changeLanguage('Fr');
         
        } else if (event.target.id === 'De') {
          this.props.changeLanguage('De');
         
        }

        console.log(this.props.lang.defaultLang);


        //console.log(event.target.id)
       /* if(text === 'Francais' ) {
        this.setState((prevState) => {
          if(prevState.lan === 'De')
            return {lan : 'Fr'}
        })
       
      } else if (text === 'Deutsh'){
        this.setState((prevState) => {
          if(prevState.lan === 'Fr')
            return {lan : 'De'}
        })
       
      }
      console.log(this.state.lan); */
  }

  render() {

    const sideList = (
      <div className='language-drawer-container'>
        <Divider />
            <div onClick={(event) =>this.handelLanguage(event)} id='Fr' >Francais</div>
        <Divider />              
            <div onClick={(event) =>this.handelLanguage(event)} id='De' >Deutsh</div>
        <Divider />
        
      </div>
    );

    

    return (
      <div>
        
        <Drawer open={this.props.show} anchor='right' onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeLanguage }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DrawerMenu));