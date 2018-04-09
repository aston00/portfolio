import React,{Component} from 'react';
import classes from './experience.css';
import img from '../../img/adult-blur-books-261909.jpg';
import Layout from '../../hoc/Layout';
class Experience extends Component {

    state = {
        experience: [
            {type: 'university', name: 'Lviv National university named by Ivan Franko', speciality: 'Finance and Credit', status: 'Master', startDate: '2009', endDate: '2014'},
            {type: 'university', name: 'Lviv National university named by Ivan Franko', speciality: 'Law', status: 'Specialist', startDate: '2009', endDate: '2016'},
            {type: 'job', name: 'Private enterprise "Де-Юре-Аудит"', speciality: 'Finance', status: 'Counter', startDate: '2014', endDate: '2016'},
            {type: 'job', name: 'Private enterprise "Де-Юре-Аудит"', speciality: 'Law', status: 'Law consultant', startDate: '2016', endDate: 'now'},
            {type: 'job', name: 'Keepit group', speciality: 'Programming', status: 'JavaScript Developer', startDate: '2018', endDate: 'now'}
        ]
    }

    render(){


        let experienceCollection = this.state.experience.map(item => {
            return (
                <div className={classes.card}>
                    <div className={[classes.card__side, classes.card__side__front].join(' ')}>
                        <div className={[classes.card__picture, classes.card__picture__1, item.type === 'job'? classes[item.speciality] : classes[item.type]].join(' ')}>

                        </div>
                        <h4 className={classes.card__heading}>
                            <span className={[classes.card__heading_span, classes.card__heading_span__1].join(' ')}>{item.name}</span>
                        </h4>
                        
                        
                    </div>
                    <div className={[classes.card__side, classes.card__side__back, classes.card__side__back_1].join(' ')}>
                        <div className={classes.card__cta}>
                            <div className={classes.card__price_box}>
                                    {item.type == 'university' ?
                                    (<div className={classes.card__position}><p>{item.status} of {item.speciality}</p></div>) : 
                                    (<div className={classes.card__position}><p>{item.status}</p></div>)}
                                    {/* <p className={classes.card__position}>{item.type == 'university' ? 'Degree:' : 'Position:' }</p>
                                    <p className={classes.card__position}>{item.status}</p> */}
                                    <p className={classes.card__price_value}>{item.endDate == 'now' ? `From ${item.startDate} to present` : `From ${item.startDate} until ${item.endDate}`}</p>
                            </div>
                            {/* <a href="#popup" className={[classes.btn, classes.btn__white].join(' ')}>Book now</a> */}
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div className={classes.SectionContainer}>
                <div className={classes.ExperienceHeading}>
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