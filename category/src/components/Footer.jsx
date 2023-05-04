import React from "react";

function Footer() {
    return (<div>
        <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
            <div className="row py-4">
                <div className="col-lg-3 col-md-6 mb-5">
                    <h5 className="mb-4 text-white text-uppercase font-weight-bold">Get In Touch</h5>
                    <p className="font-weight-medium"><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                    <p className="font-weight-medium"><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                    <p className="font-weight-medium"><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                    <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">Follow Us</h6>
                    <div className="d-flex justify-content-start">
                        <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-lg btn-secondary btn-lg-square" href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h5 className="mb-4 text-white text-uppercase font-weight-bold">Popular News</h5>
                    <div className="mb-3">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                    </div>
                    <div className="mb-3">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                    </div>
                    <div className="">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                        </div>
                        <a className="small text-body text-uppercase font-weight-medium" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h5 className="mb-4 text-white text-uppercase font-weight-bold">Categories</h5>
                    <div className="m-n1">
                        <a href="" className="btn btn-sm btn-secondary m-1">Politics</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Business</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Corporate</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Health</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Education</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Science</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Foods</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Entertainment</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Travel</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Lifestyle</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Share Market</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Bollywood</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Trending</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">International</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Sports</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Hollywood</a>
                        <a href="" className="btn btn-sm btn-secondary m-1">Economy</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h5 className="mb-4 text-white text-uppercase font-weight-bold">Flickr Photos</h5>
                    <div className="row">
                        <div className="col-4 mb-3">
                            <a href=""><img className="w-100" src="img/news-110x110-1.jpg" alt=""/></a>
                        </div>
                        <div className="col-4 mb-3">
                            <a href=""><img className="w-100" src="img/news-110x110-2.jpg" alt=""/></a>
                        </div>
                        <div className="col-4 mb-3">
                            <a href=""><img className="w-100" src="img/news-110x110-3.jpg" alt=""/></a>
                        </div>
                        <div className="col-4 mb-3">
                            <a href=""><img className="w-100" src="img/news-110x110-4.jpg" alt=""/></a>
                        </div>
                        <div className="col-4 mb-3">
                            <a href=""><img className="w-100" src="img/news-110x110-5.jpg" alt=""/></a>
                        </div>
                        <div className="col-4 mb-3">
                            <a href=""><img className="w-100" src="img/news-110x110-1.jpg" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="container-fluid py-4 px-sm-3 px-md-5"  style={{background: "#111111"}}>
            <p className="m-0 text-center">&copy; <a href="#">Sahu Technologies</a>. All Rights Reserved.

                Design by <a href="#">Developer</a></p>
        </div></div>)
}

export default Footer;