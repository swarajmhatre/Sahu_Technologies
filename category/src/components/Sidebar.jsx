import React from "react";

function Sidebar() {
    return (<div>
         <div className="container-fluid mt-5 pt-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h4 className="m-0 text-uppercase font-weight-bold">Category: Trending</h4>
                                <a className="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mb-3">
                                <img className="img-fluid w-100" src="img/news1.jpg" style={{objectFit: 'cover'}}/>
                                <div className="bg-white border border-top-0 p-4">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                            href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="https://www.telegraphindia.com/india/counter-to-rahul-gandhis-rs-20000-crore-claim-adani-says-2-6-billion-stake-sale-money-came-in-group-firms/cid/1928661">Counter to Rahul Gandhi's Rs 20,000 cr claim: Adani says $2.6 bn stake sale money came in group firms</a>
                                    <p className="m-0">'The funds came from sale of stake in Adani Total Gas. Also, they weren't obscure entities because they are promoter held'</p>
                                </div>
                                <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                        <small>John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                        <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mb-3">
                                <img className="img-fluid w-100" src="img/news2.jpg" style={{objectFit: 'cover'}}/>
                                <div className="bg-white border border-top-0 p-4">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                            href="">Industry</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="https://www.businesstoday.in/industry/story/amul-vs-nandini-the-war-between-two-titans-376755-2023-04-10">Amul vs Nandini: The war between two dairy titans</a>
                                    <p className="m-0">With the largest dairy cooperative GCMMF or Amul and KMF’s Nandini at the loggerheads, how the two fare on paper?</p>
                                </div>
                                <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                        <small>John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                        <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-3">
                            <a href=""><img className="img-fluid w-100" src="img/ads-728x90.png" alt=""/></a>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mb-3">
                                <img className="img-fluid w-100" src="img/news3.jpg" style={{objectFit: 'cover'}}/>
                                <div className="bg-white border border-top-0 p-4">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                            href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold" href="https://timesofindia.indiatimes.com/business/india-business/sensex-nifty-eke-out-gains-in-volatile-trade-rise-for-6th-day/articleshow/99380793.cms">Sensex, Nifty eke out gains in volatile trade, rise for 6th day</a>
                                    <p className="m-0">Benchmark indices Sensex and Nifty eked out gains in volatile trade on Monday, extending the winning streak to a sixth day even as investors preferred to stay on the sidelines ahead of the start of quarterly earnings.</p>
                                </div>
                                <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                        <small>John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                        <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative mb-3">
                                <img className="img-fluid w-100" src="img/news4.jpg" style={{objectFit: 'cover'}}/>
                                <div className="bg-white border border-top-0 p-4">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                            href="">Health</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold" href="https://www.outlookindia.com/outlook-spotlight/colon-broom-reviews-2023-critical-new-report-what-they-will-never-tell-you-news-257987">Colon Broom Reviews (2023) – Critical New Report What They Will Never Tell You</a>
                                    <p className="m-0">Colon Broom is a dietary fiber supplement that aims to boost metabolic, digestive, and overall gut health. Its unique formula improves bowel movements and relieves issues such as constipation, abdominal pain, and bloating.</p>
                                </div>
                                <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                        <small>John Doe</small>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                        <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-1.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://timesofindia.indiatimes.com/business/india-business/income-tax-department-challenges-nclt-order-approving-suraksha-group-bid-for-jaypee-infratech/articleshow/99382876.cms">
                                        Income Tax Department challenges NCLT order approving Suraksha Group...</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-2.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://www.telegraphindia.com/india/counter-to-rahul-gandhis-rs-20000-crore-claim-adani-says-2-6-billion-stake-sale-money-came-in-group-firms/cid/1928661">
                                        COUNTER TO RAHUL GANDHI'S RS 20,000 CR CLAIM: ADANI SAYS $2.6...</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-3.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://timesofindia.indiatimes.com/business/india-business/indias-fuel-demand-rises-5-in-march-year-on-year/articleshow/99384034.cms">
                                        India's fuel demand rises 5% in March year on year</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-4.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://timesofindia.indiatimes.com/business/international-business/alibaba-backed-sensetime-unfurls-chinas-latest-chatgpt-rival/articleshow/99382298.cms">
                                        Alibaba-backed sensetime unfurls China,s latest ChatGPT rival</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 mb-3">
                            <a href=""><img className="img-fluid w-100" src="img/ads-728x90.png" alt=""/></a>
                        </div>
                        <div className="col-lg-12">
                            <div className="row news-lg mx-0 mb-3">
                                <div className="col-md-6 h-100 px-0">
                                    <img className="img-fluid h-100" src="img/news5.jpg" style={{objectFit: 'cover'}}/>
                                </div>
                                <div className="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                                    <div className="mt-auto p-4">
                                        <div className="mb-2">
                                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="https://www.businesstoday.in/industry/pharma/story/pe-firm-tpg-to-re-invest-its-11-stake-in-manipal-hospitals-through-new-fund-376725-2023-04-10">
                                            PE firm TPG to re-invest its 11% stake in Manipal Hospitals through new fund</a>
                                        <p className="m-0">TPG, which first invested in MHEPL through TPG Asia VI in 2015, will fully exit, but it will hold an interest of 11 per cent in the hospital chain through its new Asia fund, the TPG Asia VIII, MHEPL said</p>
                                    </div>
                                    <div className="d-flex justify-content-between bg-white border-top mt-auto p-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle mr-2" src="img/user.jpg" width="25" height="25" alt=""/>
                                            <small>John Doe</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                            <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-1.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://timesofindia.indiatimes.com/business/india-business/income-tax-department-challenges-nclt-order-approving-suraksha-group-bid-for-jaypee-infratech/articleshow/99382876.cms">
                                        Income Tax Department challenges NCLT order approving...</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-2.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://timesofindia.indiatimes.com/business/india-business/indias-fuel-demand-rises-5-in-march-year-on-year/articleshow/99384034.cms">
                                        India's fuel demand rises 5% in March year on year </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-3.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://timesofindia.indiatimes.com/business/international-business/alibaba-backed-sensetime-unfurls-chinas-latest-chatgpt-rival/articleshow/99382298.cms">
                                        Alibaba-backed sensetime unfurls China,s latest ChatGPT rival</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-4.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://www.businesstoday.in/industry/aviation/story/unruly-passenger-caused-physical-harm-to-two-crew-members-air-india-on-turning-back-london-bound-flight-376710-2023-04-10">
                                        Unruly passenger caused physical harm to two crew members: Air India on turning back London-bound flight</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				
				
                
                <div className="col-lg-4">

                    <div className="mb-3">
                        <div className="section-title mb-0">
                            <h4 className="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-3">
                            <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#39569E'}}>
                                <i className="fab fa-facebook-f text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
                                <span className="font-weight-medium">12,345 Fans</span>
                            </a>
                            <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#52AAF4'}}>
                                <i className="fab fa-twitter text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
                                <span className="font-weight-medium">12,345 Followers</span>
                            </a>
                            <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#0185AE'}}>
                                <i className="fab fa-linkedin-in text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
                                <span className="font-weight-medium">12,345 Connects</span>
                            </a>
                            <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#C8359D'}}>
                                <i className="fab fa-instagram text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
                                <span className="font-weight-medium">12,345 Followers</span>
                            </a>
                            <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: '#DC472E'}}>
                                <i className="fab fa-youtube text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
                                <span className="font-weight-medium">12,345 Subscribers</span>
                            </a>
                            <a href="" className="d-block w-100 text-white text-decoration-none" style={{background: '#055570'}}>
                                <i className="fab fa-vimeo-v text-center py-4 mr-3" style={{width: '65px', background: 'rgba(0, 0, 0, .2)'}}></i>
                                <span className="font-weight-medium">12,345 Followers</span>
                            </a>
                        </div>
                    </div>


                    <div className="mb-3">
                        <div className="section-title mb-0">
                            <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
                        </div>
                        <div className="bg-white text-center border border-top-0 p-3">
                            <a href=""><img className="img-fluid" src="img/news-800x500-2.jpg" alt=""/></a>
                        </div>
                    </div>


                    <div className="mb-3">
                        <div className="section-title mb-0">
                            <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-3">
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-1.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://www.businesstoday.in/industry/story/amul-vs-nandini-the-war-between-two-titans-376755-2023-04-10">
                                        Amul vs Nandini: The war between two dairy titans...</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-2.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Industry</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://www.businesstoday.in/industry/aviation/story/air-india-flight-to-london-returns-midway-to-delhi-after-unruly-passenger-fights-with-flight-crew-376702-2023-04-10">
                                        Air India flight to London returns midway to Delhi...</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-3.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://www.businesstoday.in/industry/energy/story/adani-groups-latest-power-plant-in-jharkhand-to-bring-down-electricity-prices-in-bangladesh-376656-2023-04-09">
                                        Adani Group's latest power plant in Jharkhand to lower...</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-4.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://timesofindia.indiatimes.com/business/india-business/indias-fuel-demand-rises-5-in-march-year-on-year/articleshow/99384034.cms">
                                        India's fuel demand rises 5% in March year on year</a>
                                </div>
                            </div>
                            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                                <img className="img-fluid" src="img/news-110x110-5.jpg" alt=""/>
                                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="https://timesofindia.indiatimes.com/business/india-business/income-tax-department-challenges-nclt-order-approving-suraksha-group-bid-for-jaypee-infratech/articleshow/99382876.cms">
                                        Income Tax Department challenges NCLT order approving...</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="section-title mb-0">
                            <h4 className="m-0 text-uppercase font-weight-bold">Newsletter</h4>
                        </div>
                        <div className="bg-white text-center border border-top-0 p-3">
                            <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                            <div className="input-group mb-2" style={{width: '100%'}}>
                                <input type="text" className="form-control form-control-lg" placeholder="Your Email"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
                                </div>
                            </div>
                            <small>Lorem ipsum dolor sit amet elit</small>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="section-title mb-0">
                            <h4 className="m-0 text-uppercase font-weight-bold">Tags</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-3">
                            <div className="d-flex flex-wrap m-n1">
                                <a href="" className="btn btn-sm btn-outline-secondary m-1">Politics</a>
                                <a href="" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                                <a href="" className="btn btn-sm btn-outline-secondary m-1">Corporate</a>
                                <a href="" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                                <a href="" className="btn btn-sm btn-outline-secondary m-1">Health</a>
                                <a href="" className="btn btn-sm btn-outline-secondary m-1">Education</a>
                                <a href="" className="btn btn-sm btn-outline-secondary m-1">Science</a>
                                <a href="" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                                <a href="" className="btn btn-sm btn-outline-secondary m-1">Foods</a>
                                <a href="" className="btn btn-sm btn-outline-secondary m-1">Travel</a>
                                <a href="" className="btn btn-sm btn-outline-secondary m-1">Economy</a>
                            </div>
                        </div>
                    </div>
                </div>
				
            </div>
        </div>
    </div>
    </div>)
}
export default Sidebar;