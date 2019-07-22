import * as  React from 'react';
import { Link } from 'react-router-dom';
// import axios from "../../axios";
import '../css/main.css';
import Popup from "reactjs-popup";

class Inbox extends React.Component {

    public componentDidMount() {
        console.log('hii');
        
      
    }
    

    public render() {
        

        return (
            <div className="container security-cl">
                <div className="top-head">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 ">
                            <h2>Inbox</h2>
                        </div>{/* end of col-6 */}

                        <div className="col-lg-3 col-md-3 col-sm-1 col-xs-12"/>

                        <div className="col-lg-2 col-md-2 col-sm-5 col-xs-12">
                            <div className="col-lg-6 col-md-6 col-md-6 col-sm-6 col-xs-6 user-image text-center">
                                <i className="fa fa-user-circle-o"/>
                            </div>{/* end of col-md-8 */}
                            <div className="col-lg-6 col-md-6 col-md-6 col-sm-6 col-xs-6 user-image ">
                                <h2>Profile</h2>
                            </div>{/* end of col-md-4 */}
                        </div>{/* end of col-2 */}
                        <br /> <br />
                        </div><br />
                    </div>{/* end of col-12 */}


                    <div className="row security-part">
                        <div className="col-md-9 background-cl">
                            <div className="inner-list">
                                <div className="row">                                
                                <div className="col-md-3 common-icon">
                                    <h3><i className="fa fa-plus" aria-hidden="true"/> Compose</h3>                                   
                                </div>
                                    <div className="col-md-9"><br />
                                    <form>                 
                                    <div className="input_search_contact"> 
                                    <i className="fa fa-search"/>
                                    <input className="my_form_control_contact" type="text" placeholder="Search Inbox..." aria-label="Search" />
                                    </div>
                                    </form>
                                    </div>
                                    <br /><br />
                                </div>

                                <div className="row separate-cl">
                               <br />
                               <div className="col-md-12">
                               <div className="col-md-3"><br />
                                    <ul className="inbx_links">
                                        <li><Link className="inbx_active">Inbox</Link></li>
                                        <li><Link>Sent</Link></li>
                                        <li><Link>Draft</Link></li>
                                        <li><Link>Spam/junk</Link></li>
                                    </ul>
                                   
                                    </div>
                                   
                                <div className="col-md-9">
                                <table className="table table-sm table_contact table_index">
                                   
                                    <tbody>
                                       
                                        <Popup trigger={  
                                        <tr>
                                        <td>univercity State arizona</td>
                                        <td>fwd: transcripts</td>
                                        <td>07/02/2019</td>
                                        </tr> }  position="bottom center">
                                        {close => (
                                        <div className="my_popup">                                       
                                        <div className="col-lg-12 col-md-12 col-md-12 col-sm-12 col-xs-12">  
                                        <i className="fa fa-close close_me close" onClick={close} />                                                                                     
                                            <h3>Meeting today <span className="date_time_inbox">10:34 AM(1 day ago)</span></h3>    
                                            <h5>from: venkat &#60;venkat@gmail.com&#62;</h5>                               
                                            <h5>to me: &#60;nicolina@prooven.com&#62;</h5>  
                                            <h5>Hi Nicolina</h5>                               
                                            <h5>Are we still on for our meeting today at 2 PM ?</h5>
                                            <h5>Thank You</h5>
                                            <h5>Venkat</h5>
                                        </div>{/* end of col-md-3 */}
                                        </div>
                                         )}
                                        </Popup>

                                        <Popup trigger={  
                                        <tr>
                                        <td>Northern Arizona University</td>
                                        <td>fwd: transcripts</td>
                                        <td>07/02/2019</td>
                                        </tr> }  position="bottom center">
                                        {close => (
                                        <div className="my_popup">                                       
                                        <div className="col-lg-12 col-md-12 col-md-12 col-sm-12 col-xs-12">  
                                        <i className="fa fa-close close_me close" onClick={close} />                                                                                     
                                            <h3>Meeting today <span className="date_time_inbox">10:34 AM(1 day ago)</span></h3>    
                                            <h5>from: venkat &#60;venkat@gmail.com&#62;</h5>                               
                                            <h5>to me: &#60;nicolina@prooven.com&#62;</h5>  
                                            <h5>Hi Nicolina</h5>                               
                                            <h5>Are we still on for our meeting today at 2 PM ?</h5>
                                            <h5>Thank You</h5>
                                            <h5>Venkat</h5>
                                        </div>{/* end of col-md-3 */}
                                        </div>
                                         )}
                                        </Popup>

                                        <Popup trigger={  
                                        <tr>
                                        <td>Arizona State University </td>
                                        <td>fwd: transcripts</td>
                                        <td>06/29/2019</td>
                                        </tr> }  position="bottom center">
                                        {close => (
                                        <div className="my_popup">                                       
                                        <div className="col-lg-12 col-md-12 col-md-12 col-sm-12 col-xs-12">  
                                        <i className="fa fa-close close_me close" onClick={close} />                                                                                     
                                            <h3>Meeting today <span className="date_time_inbox">10:34 AM(1 day ago)</span></h3>    
                                            <h5>from: venkat &#60;venkat@gmail.com&#62;</h5>                               
                                            <h5>to me: &#60;nicolina@prooven.com&#62;</h5>  
                                            <h5>Hi Nicolina</h5>                               
                                            <h5>Are we still on for our meeting today at 2 PM ?</h5>
                                            <h5>Thank You</h5>
                                            <h5>Venkat</h5>
                                        </div>{/* end of col-md-3 */}
                                        </div>
                                         )}
                                        </Popup>    
                                        <Popup trigger={  
                                        <tr>
                                        <td>univercity of arizona</td>
                                        <td>fwd: transcripts</td>
                                        <td>07/02/2019</td>
                                        </tr> }  position="bottom center">
                                        {close => (
                                        <div className="my_popup">                                       
                                        <div className="col-lg-12 col-md-12 col-md-12 col-sm-12 col-xs-12">  
                                        <i className="fa fa-close close_me close" onClick={close} />                                                                                     
                                            <h3>Meeting today <span className="date_time_inbox">10:34 AM(1 day ago)</span></h3>    
                                            <h5>from: venkat &#60;venkat@gmail.com&#62;</h5>                               
                                            <h5>to me: &#60;nicolina@prooven.com&#62;</h5>  
                                            <h5>Hi Nicolina</h5>                               
                                            <h5>Are we still on for our meeting today at 2 PM ?</h5>
                                            <h5>Thank You</h5>
                                            <h5>Venkat</h5>
                                        </div>{/* end of col-md-3 */}
                                        </div>
                                         )}
                                        </Popup>
                                        <Popup trigger={  
                                        <tr>
                                        <td>univercity of arizona</td>
                                        <td>fwd: transcripts</td>
                                        <td>09/02/2019</td>
                                        </tr> }  position="bottom center">
                                        {close => (
                                        <div className="my_popup">                                       
                                        <div className="col-lg-12 col-md-12 col-md-12 col-sm-12 col-xs-12">  
                                        <i className="fa fa-close close_me close" onClick={close} />                                                                                     
                                            <h3>Meeting today <span className="date_time_inbox">10:34 AM(1 day ago)</span></h3>    
                                            <h5>from: venkat &#60;venkat@gmail.com&#62;</h5>                               
                                            <h5>to me: &#60;nicolina@prooven.com&#62;</h5>  
                                            <h5>Hi Nicolina</h5>                               
                                            <h5>Are we still on for our meeting today at 2 PM ?</h5>
                                            <h5>Thank You</h5>
                                            <h5>Venkat</h5>
                                        </div>{/* end of col-md-3 */}
                                        </div>
                                         )}
                                        </Popup>
                                        <Popup trigger={  
                                        <tr>
                                        <td>univercity of arizona</td>
                                        <td>fwd: transcripts</td>
                                        <td>07/02/2019</td>
                                        </tr> }  position="bottom center">
                                        {close => (
                                        <div className="my_popup">                                       
                                        <div className="col-lg-12 col-md-12 col-md-12 col-sm-12 col-xs-12">  
                                        <i className="fa fa-close close_me close" onClick={close} />                                                                                     
                                            <h3>Meeting today <span className="date_time_inbox">10:34 AM(1 day ago)</span></h3>    
                                            <h5>from: venkat &#60;venkat@gmail.com&#62;</h5>                               
                                            <h5>to me: &#60;nicolina@prooven.com&#62;</h5>  
                                            <h5>Hi Nicolina</h5>                               
                                            <h5>Are we still on for our meeting today at 2 PM ?</h5>
                                            <h5>Thank You</h5>
                                            <h5>Venkat</h5>
                                        </div>{/* end of col-md-3 */}
                                        </div>
                                         )}
                                        </Popup>
                                        <Popup trigger={  
                                        <tr>
                                        <td>univercity of arizona</td>
                                        <td>fwd: transcripts</td>
                                        <td>07/26/2019</td>
                                        </tr> }  position="bottom center">
                                        {close => (
                                        <div className="my_popup">                                       
                                        <div className="col-lg-12 col-md-12 col-md-12 col-sm-12 col-xs-12">  
                                        <i className="fa fa-close close_me close" onClick={close} />                                                                                     
                                            <h3>Meeting today <span className="date_time_inbox">10:34 AM(1 day ago)</span></h3>    
                                            <h5>from: venkat &#60;venkat@gmail.com&#62;</h5>                               
                                            <h5>to me: &#60;nicolina@prooven.com&#62;</h5>  
                                            <h5>Hi Nicolina</h5>                               
                                            <h5>Are we still on for our meeting today at 2 PM ?</h5>
                                            <h5>Thank You</h5>
                                            <h5>Venkat</h5>
                                        </div>{/* end of col-md-3 */}
                                        </div>
                                         )}
                                        </Popup>
                                        <Popup trigger={  
                                        <tr>
                                        <td>univercity of arizona</td>
                                        <td>fwd: transcripts</td>
                                        <td>06/29/2019</td>
                                        </tr> }  position="bottom center">
                                        {close => (
                                        <div className="my_popup">                                       
                                        <div className="col-lg-12 col-md-12 col-md-12 col-sm-12 col-xs-12">  
                                        <i className="fa fa-close close_me close" onClick={close} />                                                                                     
                                            <h3>Meeting today <span className="date_time_inbox">10:34 AM(1 day ago)</span></h3>    
                                            <h5>from: venkat &#60;venkat@gmail.com&#62;</h5>                               
                                            <h5>to me: &#60;nicolina@prooven.com&#62;</h5>  
                                            <h5>Hi Nicolina</h5>                               
                                            <h5>Are we still on for our meeting today at 2 PM ?</h5>
                                            <h5>Thank You</h5>
                                            <h5>Venkat</h5>
                                        </div>{/* end of col-md-3 */}
                                        </div>
                                         )}
                                        </Popup>                           
                                       
                                    </tbody>
                                    </table>
                                   </div>
                                   </div>
                                    </div>
                                </div>
                            </div>
                      
                       
                    </div>

                </div>
            </div>
        );
    }
}

export default Inbox;
