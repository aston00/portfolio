import React,{Component} from 'react';
import classes from './experience.css';

class Experience extends Component {

    state = {
        experience: [
            {type: 'university', name: 'Lviv National university name by Ivan Franko', speciality: 'Finance and Credit', status: 'Master', startDate: '', endDate: ''},
            {type: 'university', name: 'Lviv National university name by Ivan Franko', speciality: 'Law', status: 'Specialist', startDate: '', endDate: ''},
            {type: 'job', name: 'Private enterprise "Де-Юре-Аудит"', speciality: 'Finance and Credit', status: 'Master', startDate: '', endDate: ''}
        ]
    }

    render(){


        let experienceCollection = this.state.experience.map(item => {
            return (
                <div className={classes.card}>
                    <div className={[classes.card__side, classes.card__side__front].join(' ')}>
                        <div className={[classes.card__picture, classes.card__picture__1].join(' ')}>

                        </div>
                        <h4 className={classes.card__heading}>
                            <span className={[classes.card__heading_span, classes.card__heading_span__1].join(' ')}>The see explorer</span>
                        </h4>
                        <div className={classes.card__details}>
                            <ul>
                                <li>3 day tour</li>
                                <li>Up to 30 ppl</li>
                                <li>2 tour guides</li>
                                <li>sleep in good hotels</li>
                                <li>difficlutyis easy</li>
                            </ul>
                        </div>
                    </div>
                    <div className={[classes.card__side, classes.card__side__back, classes.card__side__back_1].join(' ')}>
                        <div className={classes.card__cta}>
                            <div className={classes.card__price_box}>
                                <p className={classes.card__price_only}>Only</p>
                                <p className={classes.card__price_value}>$599</p>
                            </div>
                            <a href="#popup" className={[classes.btn, classes.btn__white].join(' ')}>Book now</a>
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <div >
                    <h1>Experience</h1>
                </div>
                <div className={classes.row}>
                    {experienceCollection}
                </div>
            </div>
        )
    }
}

export default Experience;