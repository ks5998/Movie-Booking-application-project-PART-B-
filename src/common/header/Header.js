import React, {Component} from "react";
import './Header.css';
import logo from '../../assets/logo.svg';
import { Button } from "@material-ui/core";

class Header extends Component {
   render(){
    return(
        <div className="header">
            <img src={logo} alt="logo" id="image" />


        <div className="buttonContainer">
            {this.props.isDetails ? (
          <Button 
          variant="contained" 
          color="primary"
          className="bookNowButton">
            Book Show
          </Button>
            ) : ("")
            }
          <Button 
            className="loginLogoutButton" 
            variant="contained">
            LOGIN
          </Button>
        </div>
        </div>
    );
   }
}
export default Header;