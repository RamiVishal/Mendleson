import './footer.scss';
import Facebook from '../../Assets/images/shape/facebook.svg';
import linkdin from '../../Assets/images/shape/linkedin.svg';
import google from '../../Assets/images/shape/google.svg';

function Footer() {


    return (
        <>
            <div className='Footer'>
                <div className='container'>
                    <div className='Footer-wrapper-link'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-3'>
                                <div className='Footer-link social-link'>
                                    <h5>Social</h5>
                                    <ul>
                                        <li><img src={Facebook} />  <a href='#'>Facebook</a> </li>
                                        <li><img src={linkdin} />  <a href='#'>Linkedin</a> </li>
                                        <li><img src={google} />  <a href='#'>Google +</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-3'>
                                <div className='Footer-link'>
                                    <h5>Explore</h5>
                                    <ul>
                                        <li><a href='#'>Services</a> </li>
                                        <li><a href='#'>Team</a> </li>
                                        <li><a href='#'>Clients</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-3'>
                                <div className='Footer-link'>
                                    <h5>Contact</h5>
                                    <ul>
                                        <li><a href='#'>Lorem Ipsum dummy address</a> </li>
                                        <li><a href='#'>used for display</a> </li>
                                        <li><a href='#'>1234567890</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-3'>
                                <div className='Footer-link'>
                                    <h5>Email</h5>
                                    <ul>
                                        <li><a href='#'>mendlesoncommunication@email.com</a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='copy-right'>
                    <p>© Copyright 2018 Mendleson Communication Pty Ltd </p>
                </div>
            </div>
        </>
    );
}

export default Footer;