import React, {Component} from "react";
import './Header.css';
import logo from '../../assets/logo.svg';
import { Button } from "@material-ui/core";

class Header extends Component {
   render(){
    return(
        <div className="header">
            <img src={logo} alt="logo" id="image" />

        <Button variant="contained" color="primary">
            BOOK SHOW
        </Button>
        </div>
    )
   }
}
export default Header;