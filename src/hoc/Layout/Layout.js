import React, {Component} from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/sideDrawer/sideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer :true
    }

    SideDrawerClosedHandler = () =>{

        this.setState({showSideDrawer:false});
    
    }

    SideDrawerToggleHandler = () => {
        this.setState(( prevState ) => {
            return {showSideDrawer: !this.state.showSideDrawer};
        });
    }


    render (){
        return (
            <Aux>
            <Toolbar 
            isAuth={this.props.isAuthenticated}
            drawerToggleClicked = {this.SideDrawerToggleHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
    </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(Layout);