import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import styles from '../pages/Facebook.css';


class Facebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            token: null,
            user: "",
            expires: ""
        };
    }

    Flogout = () =>{
        this.setState({
            isLoggedIn: false,
            token: null,
            user: "",
            expires: ""
        });
        console.log("wylogowano z aplikacji");

    };

    responseFacebook = response => {
        console.log(response);
        this.setState({
            isLoggedIn: true,
            name: response.name,
            picture: response.picture.data.url,
            email: response.email,
            token: response.accessToken,
            user: response.id,
            expires: response.expiresIn
        });
        this.props.handleData(response);

    };
    componentClicked = () => console.log("kliknięto");

    render() {

        let fbContent;
        if (this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#3b3b3b',
                    border: '1px dotted white',
                    padding: '20px',
                    fontFamily: "Helvetica",
                    color: '#ffffff',
                    textAlign: "center"
                }}>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Jesteś zalogowany jako {this.state.name} </h2>
                    <p>E-mail: {this.state.email}</p>
                    <p>User ID: {this.state.user}</p>
                    <p>Zostaniesz wylogowany za: {this.state.expires} sekund</p>
                    <p>Twój token: {this.state.token}</p>
                    <div>
                        <a href="#" onClick={this.Flogout} style={{color: "green"}}> Wyloguj </a>
                    </div>
                </div>
            );
        } else {
            fbContent = <FacebookLogin
                appId="1086077284863326"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile, user_birthday"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                cssClass="btnFacebook btn btn-lg btn-block"
                icon={<i className="fa fa-facebook">
                </i>}
                textButton = "&nbsp;&nbsp;ZALOGUJ SIĘ PRZEZ FACEBOOKA"
            />
        }
        return (


            <div>
                {fbContent}
            </div>


        )
    }
}




export default Facebook;
