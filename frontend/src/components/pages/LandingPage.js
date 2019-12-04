import * as React from "react";
import {Link} from "react-router-dom";


class LandingPage extends React.Component {
    render() {
        return (

            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 h-100" alt="First" src={require('../../assets/images/group-pic.jpg')}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Connect Our Community</h5>
                                <p>Match Your Language Skills With Real World Opportunities</p>
                                <button className="btn btn-info rounded mb-5 text-white" type="submit" value="submit"><Link to={"/register"}>JOIN NOW</Link></button>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100 h-100" alt="Third" src={require('../../assets/images/globe.jpg')}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>This Is The Third Slide</h5>
                                <p>This is the Third slide</p>
                                <button className="btn btn-info mb-5 rounded text-white" type="submit" value="submit"><Link to={"/register"}>JOIN NOW</Link></button>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="d-block w-100 h-100"  alt="Fourth" src={require('../../assets/images/outdoorMeetup.jpg')}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>This Is The Fourth Slide</h5>
                                <p>This is the fourth slide</p>
                                <button className="btn btn-info rounded mb-5 text-white" type="submit" value="submit"><Link to={"/register"}>JOIN NOW</Link></button>
                            </div>
                        </div>

                    </div>


                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


                {/*<div className="ml-5">*/}
                <h1 className="mb-5 mt-5 text-center">LanGo Opportunities</h1>
                <div className="row">
                    <div id="languageContainer">
                        <div className="row">
                            <div className="card mr-5  mb-2" style={{width: '12rem'}}>
                                <img src="http://placeholder.pics/svg/200" alt={''}/>
                            </div>

                            <div className="card mb-2 mr-5 ml-5" style={{width: '12rem'}}>
                                <img src="http://placeholder.pics/svg/200" alt={''}/>
                            </div>

                            <div className="card mb-2 ml-5" style={{width: '12rem'}}>
                                <img src="http://placeholder.pics/svg/200" alt={''}/>
                            </div>
                        </div>
                    </div>
                </div>


                <h1 className="mb-5 mt-5 text-center">Our Users</h1>
                <div className="row">
                    <div id="usersContainer">
                        <div className="row">
                            <div className="card mb-2 mr-5 border-0" style={{width: '15rem'}}>
                                <img className="rounded-circle z-depth-2" alt="100x100" src="http://placeholder.pics/svg/200"/>
                                <p className="mt-5 text-center">Lorem ipsum dolor sit amet, mucius graecis in sit, per liber phaedrum cu.
                                                                Offendit detraxit nomin</p>
                            </div>

                            <div className="card mb-2 mr-5 border-0" style={{width: '15rem'}}>
                                <img className="rounded-circle z-depth-2" src="http://placeholder.pics/svg/200" alt={''}/>
                                <p className="mt-5 text-center">Lorem ipsum dolor sit amet, mucius graecis in sit, per liber phaedrum cu. Offendit detraxit nomin</p>
                            </div>

                            <div className="card mb-2 border-0" style={{width: '15rem'}}>
                                <img className="rounded-circle z-depth-2" src="http://placeholder.pics/svg/200" alt={''}/>
                                <p className="mt-5 text-center">Lorem ipsum dolor sit amet, mucius graecis in sit, per liber phaedrum cu. Offendit detraxit nomin</p>
                            </div>
                        </div>
                    </div>
                </div>


                <h1 className="mb-5 text-center">Languages</h1>
                <div className="row">
                    <div id="languagesContainer1">
                        <div className="row">
                            <div className="card mb-24 ml-5 border-0" style={{width: '8rem'}}>
                                <img src="http://placeholder.pics/svg/100" alt={''}/>
                            </div>

                            <div className="card mb-5 ml-5 border-0" style={{width: '8rem'}}>
                                <img src="http://placeholder.pics/svg/100" alt={''}/>
                            </div>

                            <div className="card mb-5 ml-5 border-0" style={{width: '8rem'}}>
                                <img src="http://placeholder.pics/svg/100" alt={''}/>
                            </div>

                            <div className="card mb-5 ml-5 border-0" style={{width: '8rem'}}>
                                <img src="http://placeholder.pics/svg/100" alt={''}/>
                            </div>

                            <div className="card mb-5 ml-5 border-0" style={{width: '8rem'}}>
                                <img src="http://placeholder.pics/svg/100" alt={''}/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div id="languagesContainer2">
                        <div className="row">
                            <div className="card mb-2 ml-5 border-0" style={{width: '8rem'}}>
                                <img src="http://placeholder.pics/svg/100" alt={''}/>
                            </div>

                            <div className="card mb-2 ml-5 border-0" style={{width: '8rem'}}>
                                <img src="http://placeholder.pics/svg/100" alt={''}/>
                            </div>

                            <div className="card mb-2 ml-5 border-0" style={{width: '8rem'}}>
                                <img src="http://placeholder.pics/svg/100" alt={''}/>
                            </div>

                            <div className="card mb-2 ml-5 border-0" style={{width: '8rem'}}>
                                <img src="http://placeholder.pics/svg/100" alt={''}/>
                            </div>

                            <div className="card mb-2 ml-5 border-0" style={{width: '8rem'}}>
                                <img src="http://placeholder.pics/svg/100" alt={''}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        );
    }


}

export default LandingPage;
