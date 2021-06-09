import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";



const mapStateToProps = (state) =>{
    return {
        dialogs: state.dialogPage.dialogs,
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;