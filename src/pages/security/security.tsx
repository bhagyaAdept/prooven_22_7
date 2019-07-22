import * as  React from 'react';
import axios from "../../axios";
import '../css/main.css';
import { Link } from 'react-router-dom';

class Security extends React.Component {

    public componentDidMount() {
        axios.post(`https://us-central1-prooven1-3a324.cloudfunctions.net/createScream`)
            .then(res => {
                console.log(res);
            });
    }

    public render() {

        return (
            <div className="body_offwhite">
                <div className="container my_container">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                <h2>Settings</h2>
                            </div>{/* end of col-12 */}
                        </div>{/* end of col-6 */}
                        <br /> <br />
                    </div>{/* end of col-12 */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 "><br /><br /><br /></div>
                    {/* --------------------end of profile--------------------------- */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                    <Link to={"../security"}>
                    <h1><i className="fa fa-shield" /></h1> </Link>
                        <h3>Security</h3>                    
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                    <Link to={"../notifications"}> <h1><i className="fa fa-bell-o" /></h1></Link>
                        <h3>Notifications</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                    <Link to={"../feedback"}><h1><i className="fa fa-pencil-square-o" /></h1></Link>
                        <h3>Feedback</h3>
                    </div>{/* end of col-3 */}

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6 icons_circle text-center">
                        <h1><i className="fa fa-sign-out" /></h1>
                        <h3>Logout</h3>
                    </div>{/* end of col-3 */}
                    </div>{/* end of col-12 */}
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 notification">

                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 background-cl">                       
                            <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 inner-list">
                                <div className="row separate-cl">
                                    <div className="col-md-12">
                                        <h3>Privacy</h3>
                                    </div>
                                </div>
                                <div className="row separate-cl">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <h3>Login Activity</h3>
                                        <p className="activity-cl">Date of Last Login: 6/25/2019 at 10:10 PM</p>
                                    </div>
                                </div>
                                <div className="row separate-cl">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <h3>Private Key / Password</h3>
                                    </div>
                                </div>
                            </div>                            
                        </div> {/* end of col-7 */}

                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                            <br /><br />
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 icons_resources ">
                                <ul>
                                    <li>  <p><i className="fa fa-file" /> Terms of use</p></li>
                                    <li>  <p><i className="fa fa-key" /> Privacy policy</p></li>
                                    <li>  <p><i className="fa fa-question" />Help center</p></li>
                                    <li>  <p><i className="fa fa-phone" />Contact us</p></li>
                                </ul>
                            </div>{/* end of col-6 */}
                        </div>
                    </div> {/* end of col-12 */}
                </div> {/* end of container */}
            </div>
        );
    }
}
export default Security;
