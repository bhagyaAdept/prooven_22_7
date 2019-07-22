import * as  React from 'react';
// import axios from "../../axios";
import '../css/main.css';
import Popup from "reactjs-popup";

class Contact extends React.Component {

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
                            <h2>Contacts</h2>
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
                        </div>
                    </div>{/* end of col-12 */}


                    <div className="row security-part">
                        <div className="col-md-8 background-cl">
                            <div className="inner-list">
                                <div className="row">
                                
                                <div className="col-md-5 common-icon">
                                    <h3><i className="fa fa-plus" aria-hidden="true"/> Create Contact</h3>
                                </div>
                                    <div className="col-md-7"><br />
                                    <form>                 
                                    <div className="input_search_contact"> 
                                    <i className="fa fa-search"/>
                                    <input className="my_form_control_contact" type="text" placeholder="Search Contacts..." aria-label="Search" />
                                    </div>
                                    </form>
                                    </div>
                                    <br /><br />
                                </div>
                                <div className="row separate-cl">
                                <table className="table table-sm table_contact">
                                    <thead>
                                        <tr className="my_icon">
                                        
                                        <th >Name <i className="fa fa-sort"/></th>
                                        <th>Email <i className="fa fa-sort"/></th>
                                        <th>Phone No <i className="fa fa-sort"/></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       
                                        <Popup trigger={  
                                        <tr>
                                        <td>mark</td>
                                        <td>mark.gmail.com</td>
                                        <td>7654567876</td>
                                        </tr> }  position="bottom center">
                                        {close => (
                                        <div className="my_popup">
                                        <div className="col-lg-3 col-md-3 col-md-3 col-sm-4 col-xs-12 user-image text-center">
                                            <br /><br />
                                            <i className="fa fa-user-circle-o"/>                                          
                                            <h4>Add Photo</h4>                                   
                                        </div>{/* end of col-md-3 */}
                                        <div className="col-lg-9 col-md-9 col-md-9 col-sm-8 col-xs-12">  
                                        <i className="fa fa-close close_me close" onClick={close} />                                                                                     
                                            <h3>Mark</h3>    
                                            <h5>Email: Mark.gmail.com</h5>                               
                                            <h5>Phone: 7654567876</h5>  
                                            <h5>Address: 1454 E 3rd Street phonex, AZ 85595</h5>                               
                                        </div>{/* end of col-md-3 */}
                                        </div>
                                          )}
                                        </Popup>

                                        <Popup trigger={  
                                        <tr>
                                        <td>Jacob</td>
                                        <td>Jacob.gmail.com</td>
                                        <td>987345654</td>
                                        </tr> }  position="bottom center">
                                        {close => (
                                        <div className="my_popup">
                                        <div className="col-lg-3 col-md-3 col-md-3 col-sm-4 col-xs-12 user-image text-center">
                                            <br /><br />
                                            <i className="fa fa-user-circle-o"/>                                          
                                            <h4>Add Photo</h4>                                   
                                        </div>{/* end of col-md-3 */}
                                        <div className="col-lg-9 col-md-9 col-md-9 col-sm-8 col-xs-12">  
                                        <i className="fa fa-close close_me close" onClick={close} />                                                                                    
                                            <h3>Jacob</h3>    
                                            <h5>Email: Jacob.gmail.com</h5>                               
                                            <h5>Phone: 987345654</h5>  
                                            <h5>Address: 1454 E 3rd Street phonex, AZ 85595</h5>                               
                                        </div>{/* end of col-md-3 */}
                                        </div>
                                         )}
                                        </Popup>

                                        <Popup trigger={  
                                        <tr>
                                        <td>Larry</td>
                                        <td>Larry.gmail.com</td>
                                        <td>8765676543</td> 
                                        </tr> }  position="bottom center">
                                        {close => (
                                        <div className="my_popup">
                                        <div className="col-lg-3 col-md-3 col-md-3 col-sm-4 col-xs-12 user-image text-center">
                                            <br /><br />
                                            <i className="fa fa-user-circle-o"/>                                          
                                            <h4>Add Photo</h4>                                   
                                        </div>{/* end of col-md-3 */}
                                        <div className="col-lg-9 col-md-9 col-md-9 col-sm-8 col-xs-12">  
                                        <i className="fa fa-close close_me close" onClick={close} />                                                                                    
                                            <h3>Larry</h3>    
                                            <h5>Email: Larry.gmail.com</h5>                               
                                            <h5>Phone: 8765676543</h5>  
                                            <h5>Address: 1454 E 3rd Street phonex, AZ 85595</h5>                               
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
        );
    }
}

export default Contact;
