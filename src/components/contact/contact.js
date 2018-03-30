import React, {Component} from 'react';

class Contact extends Component {
    state = {
        
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        
    }

    render(){


        return(
            <div>
                <div>
                    <form>
                        <input type="text" name="name" placeholder="Your name"/>
                        <input type="email" name="email" placeholder="Email address"/>
                        <input type="text" name="number" placeholder="Phone number"/>
                        <input type="textarea" name="name" placeholder="If you want to hire me"/>
                    </form>
                </div>
            </div>
        );
    }
}