import React, { useEffect } from 'react';
import headerleft from '../../Assets/images/shape/header-left.png';
import headerright from '../../Assets/images/shape/header-right.png';
import bannerleft from '../../Assets/images/shape/banner-bottom-left.png';
import bannerleftbottomtwo from '../../Assets/images/shape/banner-left-bottom-2.png';
import bannerleftbottomthree from '../../Assets/images/shape/banner-left-bottom-one.png';
import bannerleftbottomright from '../../Assets/images/shape/banner-bottom-right.png';
import AboutImage from '../../Assets/images/shape/aboutus.png';
import Enagagement from '../../Assets/images/shape/Enagagement.svg';
import coomunication from '../../Assets/images/shape/coomunication.svg';
import Aboutbottom from '../../Assets/images/shape/About-bottom.png';
import Engagementvector from '../../Assets/images/shape/Engagementvector.png';
import Coominucationvector from '../../Assets/images/shape/Coominucationvector.png';
import facilationvector from '../../Assets/images/shape/facilationvector.png';
import Consultationvector from '../../Assets/images/shape/Consultationvector.png';
import Trainingandvector from '../../Assets/images/shape/Trainingandvector.png';
import comunicationShape from '../../Assets/images/shape/comunicationShape.png';
import facilitationshape from '../../Assets/images/shape/facilitationshape.png';
import Traningshapeshape from '../../Assets/images/shape/Traning-shape.png';

import Personone from '../../Assets/images/shape/Personone.png';
import Persontwo from '../../Assets/images/shape/Persontwo.png';
import Personthree from '../../Assets/images/shape/Personthree.png';
import ourteamshape from '../../Assets/images/shape/ourteamshap.png';
import ourteambottom from '../../Assets/images/shape/our-team-bottom.png';
import projectone from '../../Assets/images/shape/OurProject.png';
import projecttwo from '../../Assets/images/shape/OurProjecttwo.png';
import projectthree from '../../Assets/images/shape/OurProjectthree.png';

import clientone from '../../Assets/images/shape/client/01.png';
import clienttwo from '../../Assets/images/shape/client/02.png';
import clientthree from '../../Assets/images/shape/client/03.png';
import clientfour from '../../Assets/images/shape/client/04.png';
import clientfive from '../../Assets/images/shape/client/05.png';
import clientsix from '../../Assets/images/shape/client/06.png';
import clientseven from '../../Assets/images/shape/client/07.png';
import clienteight from '../../Assets/images/shape/client/08.png';
import clientnine from '../../Assets/images/shape/client/09.png';

import ourclientshape from '../../Assets/images/shape/our-client-shape.png';
import AOS from 'aos'
import 'aos/dist/aos.css'


import './Home.scss';
import Pagetitle from '../../Component/pageTitle/pagetitle';

function HomePage() {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-out-sine',
            delay: 200,
            mirror: true,
        });
        AOS.refresh();
    }, []);




    const service = [
        {
            id: '1',
            sectitle: 'Engagement',
            secdesc: 'We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.',
            secimg: Engagementvector,
        },
        {
            id: '2',
            sectitle: 'Communications',
            secdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. ',
            secimg: Coominucationvector,
        },
        {
            id: '3',
            sectitle: 'facilitation',
            secdesc: 'We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.',
            secimg: facilationvector,
        },
        {
            id: '4',
            sectitle: 'Consultation and Research',
            secdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. ',
            secimg: Consultationvector,
        },
        {
            id: '5',
            sectitle: 'Traning & Mentoring',
            secdesc: 'We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.',
            secimg: Trainingandvector,
        },
    ]

    const team = [
        {
            id: '1',
            teamimage: Personone,
            personname: 'Jessica D’suza'
        },
        {
            id: '2',
            teamimage: Persontwo,
            personname: 'Johny Williams'
        },
        {
            id: '3',
            teamimage: Personthree,
            personname: 'Sanya R,'
        }
    ]

    const client = [
        {
            id: '1',
            clientimage: clientone
        },
        {
            id: '2',
            clientimage: clienttwo
        },
        {
            id: '3',
            clientimage: clientthree
        },
        {
            id: '4',
            clientimage: clientfour
        },
        {
            id: '5',
            clientimage: clientfive
        },
        {
            id: '6',
            clientimage: clientsix
        },
        {
            id: '7',
            clientimage: clientseven
        },
        {
            id: '8',
            clientimage: clienteight
        },
        {
            id: '9',
            clientimage: clientnine
        },

    ]

    return (
        <>
            <section className='banner-sec'>
                <div className='header-left'  >
                    <img src={headerleft} />
                </div>
                <div className='header-right'>
                    <img src={headerright} />
                </div>
                <div className='banner-shape-bottom-left'>
                    <div className='banner-shape-one'>
                        <img src={bannerleft} />
                    </div>
                    <div className='banner-shape-two'>
                        <img src={bannerleftbottomtwo} />
                    </div>
                    <div className='banner-shape-three'>
                        <img src={bannerleftbottomthree} />
                    </div>
                </div>
                <div className='container'>
                    <div className='banner-content-wrapper'>
                        <div className='banner-content'>
                            <h1 className='banner-Title' data-aos="fade-left">
                                Mendleson
                                Communication
                                and Engagement
                            </h1>
                            <p data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.</p>
                        </div>
                    </div>

                </div>
                <div className='banner-shape-bottom-right'>
                    <img src={bannerleftbottomright} />
                </div>
            </section>

            {/* About us  */}

            <section className='About-sec py-75'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>
                            <div className='Aboutus-img' data-aos="zoom-in">
                                <img src={AboutImage} />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='About-content' data-aos="fade-up">
                                <div className='sec-title' >
                                    <Pagetitle Pagetitle="ABOUT US" />
                                </div>
                                <p>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.</p>
                            </div>
                            <div className='About-content-sub'>
                                <div className='row'>
                                    <div className='col-sm-12 col-md-6'>
                                        <div className='sub-box' data-aos="fade-up">
                                            <img src={Enagagement} />
                                            <Pagetitle Pagetitle="Engagement" />
                                            <p>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum. READ MORE</p>
                                        </div>
                                    </div>
                                    <div className='col-sm-12 col-md-6'>
                                        <div className='sub-box' data-aos="fade-up">
                                            <img src={coomunication} />
                                            <Pagetitle Pagetitle="Communications" />
                                            <p>We are award-winning leaders in communications and campaign management. READ MORE</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-bottom-shape'>
                    <img src={Aboutbottom} />
                </div>
            </section>

            <section className='Service-sec py-75 pt-0'>
                <div className='container'>
                    <div className='sec-title' data-aos="fade-up">
                        <Pagetitle Pagetitle="SERVICES" />
                    </div>
                </div>
                <div className='services-wrapper'>
                    {
                        service.map((item, index) => {
                            return (
                                <>
                                    <div className='section-wrapper' key={index}>
                                        <div className='container' >
                                            <div className='row' >
                                                <div className='col-sm-12 col-md-6'>
                                                    <div className='ser-content-wrapper' data-aos="fade-right">
                                                        <div className='ser-content'>
                                                            <Pagetitle Pagetitle={item.sectitle} />
                                                            <p>{item.secdesc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-sm-12 col-md-6'>
                                                    <div className='ser-img text-center' data-aos="fade-up">
                                                        <img src={item.secimg} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            item.sectitle === 'Communications' && <div className='comunication-shape'>
                                                <img src={comunicationShape} />
                                            </div>
                                        }
                                        {
                                            item.sectitle === 'facilitation' && <div className='facilitation-shape'>
                                                <img src={facilitationshape} />
                                            </div>
                                        }
                                        {
                                            item.sectitle === 'Traning & Mentoring' && <div className='Traning-shape'>
                                                <img src={Traningshapeshape} />
                                            </div>
                                        }
                                    </div>


                                </>


                            );
                        })
                    }
                </div>
            </section>

            <section className='our-team-sec py-75 pt-0'>
                <div className='our-team-shape'>
                    <img src={ourteamshape} />
                </div>

                <div className='our-team-bottom-right-shape'>
                    <img src={ourteambottom} />
                </div>

                <div className='container'>
                    <div className='sec-title'>
                        <Pagetitle Pagetitle="OUR TEAM" />
                    </div>

                    <div className='team-wrapper'>
                        {team.map((item, index) => {
                            return (
                                <div className='team-box' key={index} data-aos="zoom-up">
                                    <img src={item.teamimage} />
                                    <div className='team-content'>
                                        <p>{item.personname}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section >

            <section className='our-project-sec py-75 pt-0'>

                <div className='container'>
                    <div className='sec-title'>
                        <Pagetitle Pagetitle="OUR PROJECTS" />
                    </div>
                    <div className='Our-project'>
                        <div className='grid-counter'>
                            <div className='grid-One-image' data-aos="fade">
                                <img src={projectone} />
                                <div className='grid-Hover-content'>
                                    <h5 className='project-name'>Project <br /> Name</h5>
                                </div>
                            </div>
                            <div className='grid-two-image'>
                                <div className='grid-One-image'>
                                    <img src={projecttwo} />
                                    <div className='grid-Hover-content' data-aos="fade">
                                        <h5 className='project-name'>Project <br /> Name</h5>
                                    </div>
                                </div>
                                <div className='grid-One-image'>
                                    <img src={projectthree} />
                                    <div className='grid-Hover-content' data-aos="fade">
                                        <h5 className='project-name'>Project <br /> Name</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='our-client py-75 pt-0'>
                <div className='our-client-shape'>
                    <img src={ourclientshape} />
                </div>
                <div className='container'>
                    <div className='sec-title'>
                        <Pagetitle Pagetitle="OUR CLIENTS" />
                    </div>
                    <div className='Our-client-wrapper'>
                        <div className='grid-client'>
                            {client.map((item, index) => {
                                return (
                                    <div key={index} className='grid-client-image' data-aos="zoom-in-up">
                                        <img src={item.clientimage} />
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default HomePage;