import React, { Component } from 'react';
// import { buyCake } from '../redux/cake/CakeAction'

import { buyCake } from '../redux'
import { connect } from 'react-redux';

function CakeContainer (props) {
    
        return (
            <div>
                <h2>Number of cakes - {props.numberOfCakes}</h2>
                <button onClick={props.buyCake}>Buy Cake</button>
            </div>
        );
    
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.numberOfCakes
    };
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

//export default CakeContainer;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)