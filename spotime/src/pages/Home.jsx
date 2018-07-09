import React from 'react';
import styles from './Home.css';
import classNames from 'classnames';
import {
    Link
} from 'react-router-dom';

import Facebook from './Facebook.js'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            isLoggedIn: false,
            userID: "",
            name: "",
            email: "",
            picture: "",
        }
    }

    handleChange() {
        this.setState({
            opened: !this.state.opened,
        })
    }

    handleFbData = (response) => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    render() {

        const btnClasses = classNames({
            'animated-icon3': true,
            'navbar-collapse': true,
            'open': this.state.opened,
        });

        return (

            <div>
                <nav className="navbar navbar-dark elegant-color lighten-1 mb-4">
                    <Link className="navbar-brand" to="/">

                        {this.state.picture ? <img style={{border: "1px solid grey"}} src={this.state.picture}/> : null}

                        <span> </span>Witaj { this.state.name ? this.state.name.substring(0,7) : null}!


                    </Link>
                    <button onClick={() => this.handleChange()} className="navbar-toggler" type="button"
                            data-toggle="collapse" data-target="#navbarSupportedContent23"
                            aria-controls="navbarSupportedContent23"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <div className={btnClasses}><span></span><span></span><span></span><span></span></div>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent23">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">O Aplikacji</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div>
                    <div className="center-md container-fluid">
                        <img src="logo.png" alt='logo' className="logo"/>
                        <LoginForm handleFbData={this.handleFbData}/>
                    </div>
                </div>
            </div>
        )
    }
}


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pass: ""
        }
    }

    handleLogin = () => {
        this.setState = ({
            pass: ""
        })
    };

    render() {
        return (
            <div className="row loginFont justify-content-center">
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title loginMottoFont">Znajdź ludzi i wydarzenia z Twojej okolicy!</h3>
                        </div>
                        <div className="panel-body">
                            <form acceptCharset="UTF-8" role="form">
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="E-mail" name="email"
                                               type="text"/>
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Hasło" name="password"
                                               type="current-password" value=""/>
                                    </div>
                                    <div>
                                        <label className="loginFont">
                                            <input name="remember" type="checkbox" value="Zapamiętaj mnie"/>
                                            <span> </span>Zapamiętaj mnie
                                        </label>
                                    </div>
                                    <input className="btn btn-lg btn-success btn-block" id="login-bt" type="submit"
                                           value="Zarejestruj się online"/>
                                    <input className="btn btn-lg btn-success btn-block" id="login-bt" type="submit"
                                           value="Zaloguj się"/>
                                    <Facebook handleData={this.props.handleFbData}/>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Home