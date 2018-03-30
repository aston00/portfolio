// My projects Cards with 

import React, { Component } from 'react';
import classes from './introduction.css';
import svg from '../../../img/sprite.svg';

class Introduction extends Component {

    state = {
        svgs: [
            { name: 'icon-html5', descr: 'HTML5' },
            { name: 'icon-css3', descr: 'CSS3' },
            { name: 'icon-sass', descr: 'SASS' },
            { name: 'icon-bootstrap', descr: 'Bootstrap 4' },
            { name: 'icon-javascript', descr: 'JavaScript' },
            { name: 'icon-react', descr: 'ReactJS' },
            { name: 'icon-angular', descr: 'Angular 1.x/2'},
            { name: 'icon-hackerrank', descr: 'HTML Jade'}
        ]
    }

    render() {

        let content = this.state.svgs.map((svgItem, index) => {
            return (
                <li className={classes.List}>
                    <svg>
                        <use xlinkHref={svg + '#' + svgItem.name}></use>
                    </svg>
                    <span>{svgItem.descr}</span>
                </li>
            );
        });

        return (
            <div className={classes.Introduction}>
                <div className={classes.About}>
                    <div className={classes.AboutContainer}>
                        <h1>Who am I and what is me</h1>

                        <p>
                            Welcome to my portfolio web-site. What you would like to know about me so far is that I am just a guy who dreams about something and makes it come true.
                           I also fing things that make somebody different from others not as something weak but something that makes you strong and unique. And this makes person be not just one of billions but the One, Unique.
                           <span>My credo is: "One step back, two steps forward!"</span>
                        </p>
                        {/* <h2>And here is short list of those:</h2>
                        <ul>
                            <li>I won biggest lottery when i was born</li>
                            <li>I graduated from school</li>
                            <li>At that time I even planted a tree and it managed to be a very beautiful apple after some time</li>
                            <li>I decided to learn Finance in the University as my relatives did when they were my age</li>
                            <li>Same time I also passed to Law University at night studying</li>
                            <li>5 years after I got my Master's degree of Finance </li>
                            <li>I tried myself as counter but haven''t found it something that may make me excited</li>
                            <li>In 2 years I got my Law degree and landed my job as Lawyer</li>
                            <li>Oh that time was pretty excited and also terryfying</li>
                            <li>Many times I've heard friends talking about scripts, coding and othe things, so I got curious about that</li>
                            <li>So I bought my first book Java for beginners by ..... </li>
                            <li>After I wrote my first code I got addicted. But I wanted to see my code in browser as I spent long time using it so I decided to go as Front-end web developer</li>
                            <li></li> */}

                            
                        {/* </ul> */}
                    {/* <p>Welcome to my Portfolio and about me section. I am one of those crazy guys who have dreams and try to make them true. I always found being different than others as not not something bad but something which makes me strong in compare with others. </p> */}
                    </div>
                </div>

                <div className={classes.SkillsWrapper}>
                    <div className={classes.SkillsContainer}>
                        <h1>Skillset</h1>
                        <ul>
                            {content}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
};


export default Introduction;