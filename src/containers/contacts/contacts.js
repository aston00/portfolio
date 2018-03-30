import React, {Component} from 'react';
import classes from './contacts.css';
import svg from '../../img/sprite.svg';

class Contacts extends Component {
    state = {
        contacts: [
            {name: 'icon-gmail', link: 'jacksterwow@gmail.com', descr: 'jacksterwow@gmail.com'},
            {name: 'icon-facebook', link: 'https://www.facebook.com/profile.php?id=100016243895480', descr: 'Facebook' },
            {name: 'icon-linkedin', link: 'https://www.linkedin.com/in/anatolii-yatsenko-7398bb159/',descr: 'Linkedin'},
            {name: 'icon-skype', link:'#', descr: 'aston00'},
            {name: 'icon-viber', link: '#', descr: '380979887809'},
        ]
    }


    render(){

        let list = this.state.contacts.map(svgItem => {
            return (<li>
                <svg>
                    <use xlinkHref={svg + '#' + svgItem.name}></use>
                </svg>
                <span><a href={svgItem.link}>{svgItem.descr}</a></span>
            </li>)
        });
        return(
            <div className={classes.Container}>
                <ul className={classes.List}>
                    {list}
                </ul>
            </div>
        )
    }
};

export default Contacts;