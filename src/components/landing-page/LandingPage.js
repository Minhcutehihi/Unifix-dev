import React, { useRef, useState } from "react"
import {Form, Button, Card, Alert, FormGroup, InputGroup, FormControl} from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import "../../icon/themify-icons/themify-icons.css";
import "../theme.css";
import "../../icon/css.gg-master/icons/all.css";
import googleIcon from "../../img/google.png";
import facebookIcon from "../../img/facebook.png";
import "./LandingPage.css";

export default function LandingPage() {
    return(
        <p className= "intro-para">
            Nâng cao kỹ năng và kiến thức chuyên ngành để thăng tiến trong sự nghiệp</p>
    )
}