import React, { Component } from 'react';

class Signin extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label for="name">Your email here:</label>
                        <input type="text" placeholder="You name here" id="name" name="name" />
                    </div>
                    <div>
                        <label for="password">Your password:</label>
                        <input type="password" placeholder="You email" id="password" name="password" />
                    </div>
                    <input type="submit" value="SignIn" />
                </form>
            </div>
        );
    }
};

export default Signin;