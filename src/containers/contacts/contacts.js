import React, {Component} from 'react';
import classes from './contacts.css';
import svg from '../../img/sprite.svg';
import MyFancyComponent from '../../components/googlemap/googlemap';
class Contacts extends Component {
    state = {
        contacts: [
            {name: 'icon-gmail', link: 'jacksterwow@gmail.com', descr: 'jacksterwow@gmail.com'},
            {name: 'icon-facebook', link: 'https://www.facebook.com/profile.php?id=100016243895480', descr: 'Facebook' },
            {name: 'icon-linkedin', link: 'https://www.linkedin.com/in/anatolii-yatsenko-7398bb159/',descr: 'Linkedin'},
            {name: 'icon-skype', link:'#', descr: 'aston00'},
            {name: 'icon-viber', link: '#', descr: '097-98-87-809'},
        ]
    }

    


    render(){

        let list = this.state.contacts.map(svgItem => {
            return (
            <li className={classes.ListItem}>
                <div>
                    <svg className={classes.Svg}>
                        <use xlinkHref={svg + '#' + svgItem.name}></use>
                    </svg>
                    {/* AIzaSyBgmLguscHtsFiIM5ZEefXij7kdJixGOa0 */}
                    
                </div>
                <div>
                    <a className={classes.Link} href={svgItem.link} target="_blank">{svgItem.descr}</a>
                </div>
            </li>
            )
        });
        return(
            <div className={classes.SectionContainer}>
                <div className={classes.Header}>
                    <h1>My Contacts</h1>
                </div>

                <div className={classes.ListContainer}>
                    <ul className={classes.List}>
                        {list}
                    </ul>
                </div>
                <div className={classes.Map}>
                    <MyFancyComponent isMarkerShown />
                </div>
            </div>

        )
    }
};

export default Contacts;