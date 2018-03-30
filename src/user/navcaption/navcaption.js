import React from 'react';
import Layout from '../../hoc/Layout';
import classes from './navcaption.css';
import img from '../../img/monkey.jpeg';
import spr from '../../img/sprite.svg';
const navcaption = (props) => (
    <div className={classes.User}  >
        <img src={img} alt="user" />
        <div className={classes.UserContainer}>
            <h3 >Anatolii</h3>
            <svg className={classes.Svg} onClick={props.clickLogout}>
                <use xlinkHref={spr + '#icon-exit'}></use>
            </svg>
        </div>
    </div>
);

export default navcaption;