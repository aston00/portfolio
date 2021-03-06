import React, {Component} from 'react';
import classes from './contacts.css';
import svg from '../../img/sprite.svg';
import MyFancyComponent from '../../components/googlemap/googlemap';
class Contacts extends Component {
    state = {
        contacts: [
            {name: 'icon-gmail', link: 'javascript:void(0)', descr: 'jacksterwow@gmail.com'},
            {name: 'icon-facebook', link: 'https://www.facebook.com/profile.php?id=100016243895480', descr: 'Facebook' },
            {name: 'icon-linkedin', link: 'https://www.linkedin.com/in/anatolii-yatsenko-7398bb159/',descr: 'Linkedin'},
            {name: 'icon-skype', link:'javascript:void(0)', descr: 'aston00'},
            {name: 'icon-github', link:'https://github.com/aston00', descr: 'Github'}
            // {name: 'icon-viber', link: 'javascript:void(0)', descr: '097-98-87-809'},
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
                <div className={classes.LinkContainer}>
                {svgItem.link !== '#' ? 
                <a className={classes.Link} href={svgItem.link} target="_blank">{svgItem.descr}</a> : 
                <a className={classes.Link} href={svgItem.link} >{svgItem.descr}</a>
                }
                </div>
            </li>
            )
        });
        return(
            <div className={classes.SectionContainer}>
                {/* <div className={classes.Header}>
                    <h1>My Contacts</h1>
                </div> */}

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