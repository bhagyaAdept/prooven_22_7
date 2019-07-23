import * as React from 'react';
import { Redirect, Link } from "react-router-dom";
import axios from "../../axios";
import '../css/main.css';
import Tick from '../images/tick.png';
// import validator from 'validator';
// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
class Login extends React.Component {  

  public state={
   email:"",
   password:"",
   message: "",
   email_id:"",
   errorMessage:false,
   successMessage:false,
  }
 
  
  public onChange=(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  }
  
  public submitValidation=(e)=>{
    e.preventDefault();
    console.log(e);
    axios.post(`api/signin`,{
      email: this.state.email,
      password: this.state.password,
    })
    .then(res => {
      console.log(res);      
      this.setState({ successMessage : true });
      this.setState({ message : "auth/wrong-password" }); 
      this.setState({ email_id : this.state.email }); 
     
      this.setState({ errorMessage: false});     
    })
    .catch(error => {
      console.log(error); 
      this.setState({ errorMessage: true});
      this.setState({ successMessage : false }); 
    });  
   
  }
  
  public render() {
      const{email,  password} = this.state;
      
   return (
    <div className="container login-cl">
      <div className="row">
          <div className="col-md-6 align-cl">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators"> 
                <li data-target="#myCarousel" id="hexagon2" data-slide-to="0" className="active"/>
                <li data-target="#myCarousel" data-slide-to="1"/>
                <li data-target="#myCarousel" data-slide-to="2"/>
                </ol>

                <div className="carousel-inner">
                <div className="item active">
                <div className="text-cap-cl">                  
                <h3>Welcome to Prooven!</h3>
                <h4>Your World. Verified.</h4>
                <img src={Tick} alt="Tick Image" className="img-cl"/>
                <p>Integrity. Trust. Accountability.</p>
                <p>Prooven takes a next-gen approach to verifying information that you come across daily.</p>
                <p>We identify items that are true, false, or somewhere in the middle, then show you how those claims stack up to others.</p>
                </div>
                </div>

                <div className="item">
                <div className="text-cap-cl">
                <h3>Thank you</h3>
                <h4>Your World. Verified.</h4>
                <img src={Tick} alt="Tick Image" className="img-cl"/>
                <p>Integrity. Trust. Accountability.</p>
                <p>Prooven takes a next-gen approach to verifying information that you come across daily.</p>
                <p>We identify items that are true, false, or somewhere in the middle, then show you how those claims stack up to others.</p>
                </div>
                </div>
                </div>
                </div>        
          </div>
          <div className="col-md-5 form-left">
              <h3 className="center">Login to your account</h3>
                <form method="POST" name ="myForm" onSubmit={this.submitValidation}>
                <div className="form-group">
                <label>Email address<span className="star">*</span></label>
                <input
                type="email"
                 className="form-control"
                  id="email"
                   placeholder="Enter email"
                    name='email'
                    value={email}
                    onChange={this.onChange}
                     required />
                </div>
                <div className="form-group">
                <label>Password<span className="star">*</span></label>
                <input
                 type="password"
                  className="form-control"
                   id="pwd" 
                   placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                     />
                </div>
                <div className="checkbox">
                <label><input type="checkbox" name="remember"/> Remember me</label>
                <a href="#" className="pull-right forgot-link-cl">Forgot Password</a>
                </div>
                <input type="submit" className="btn custom-btn"  value="Sign In"/>
                </form>
                {this.state.message === "auth/wrong-password" ? 
                <Redirect to="/login/"  /> : null
                }
                 {this.state.email_id !== "" && this.state.message !== "auth/wrong-password"? 
               console.log(this.state.email_id) : null
                }
                 
                <h3 className="free-cl"><Link to="/signup">Sign Up, It's Free!</Link></h3>
          </div>
          <div className="col-md-1"/>
      </div>
    </div>
 );
}
}

export default Login;
