import React, {Component} from 'react';
import classes from './footer.css';
class Footer extends Component {
    render(){
        return(
            <footer>
                <div className={classes.Footer}>
                <div className={classes.Copyright}>Copyright 	&copy; Anatolii Yatsenko</div>
                </div>
            </footer>
        )
    }
}

export default Footer;