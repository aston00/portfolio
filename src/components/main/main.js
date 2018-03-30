import React, {Component} from 'react';
import classes from './main.css';
// import {connect} from 'react-redux';
// import * as actionTypes from '../../store/actions/actionTypes';
import Intro from './intro/intro';
import Introduction from './introduction/introduction';
class Main extends Component {

    render(){


        // let collection = null;
        // collection = this.state.persons.map((person, index) => {
        // return  <ImageCont key={person.id} clicked={this.clickDeleteHandler} name={person.name} source={person.source}/>;
        // });
        return(
            <div>
               <Intro />
               <Introduction/>
            </div>
        );
    }
};

// const mapStateToProps = (state) => {
//     return {
//         img: state.image,
//         val: state.value
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onClickHandler: ()=> dispatch({type: actionTypes.ADD_VALUE})
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
export default Main;