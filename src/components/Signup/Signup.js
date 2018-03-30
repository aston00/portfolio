import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label for="name">Your email here:</label>
                        <input type="text" placeholder="You name here" id="name" name="name" />
                    </div>
                    <div>
                        <label for="email">Your email here:</label>
                        <input type="email" placeholder="You email" id="email" name="email" />
                    </div>
                    <div>
                        <label for="password">Your password:</label>
                        <input type="password" placeholder="You email" id="password" name="password" />
                    </div>
                    <div>
                        <label for="confirm">Confirm password:</label>
                        <input type="confirm" placeholder="Confirm password" id="confirm" name="confirm" />
                    </div>
                    <input type="submit" value="SignUp" />
                </form>
            </div>
        );
    }
};

export default Signup;