import * as React from "react"
import { Link } from "gatsby"
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";
import { HiOutlineMenuAlt3 } from "@react-icons/all-files/hi/HiOutlineMenuAlt3";
import * as Styles from "../styles/navbar.module.css"
import Logo from "../images/2021-hungry-ram-logo-black.png"

export default function Navbar() {

    return (
        <div>
            <div className={Styles.navbarTop} style={{ backgroundColor: "rgb(10 37 64)" }}>
                <div className="uk-container uk-light">
                    <div data-uk-navbar>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li>
                                    <a href="https://www.facebook.com/HungryRam/" target="_blank" rel="noopener">FB</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/ramdettmer/" target="_blank" rel="noopener">IG</a>
                                </li>
                                <li>
                                    <a href="https://www.yelp.com/biz/hungry-ram-yorba-linda" target="_blank" rel="noopener">YP</a>
                                </li>
                            </ul>
                        </div>
                        <div className="uk-navbar-right uk-visible@s">
                            <ul className="uk-navbar-nav">
                                <li>
                                    <a href="tel:(657) 549-5082" target="_blank" rel="noopener">(657) 549-5082</a>
                                </li>
                                <li>
                                    <a href="mailto:ram@hungryram.com" target="_blank" rel="noopener">ram@hungryram.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-visible@m" data-uk-sticky="animation: uk-animation-slide-top-medium; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-dark; cls-inactive:uk-navbar-transparent; top: 400">
                <nav className="uk-navbar-container uk-navbar-transparent">
                    <div className="uk-container" style={{ borderBottom: "1px solid #eee" }}>
                        <div data-uk-navbar>
                            <div className="uk-navbar-left">
                                <Link to="/">
                                    <img src={Logo} alt="Hungry Ram Web Design" width="200" />
                                </Link>
                            </div>
                            <div className="uk-navbar-right">
                                <ul className="uk-navbar-nav">
                                    <li><Link to="/">Home</Link></li>
                                    <li>
                                        <a href="#">About <BsChevronDown /></a>
                                        <div className="uk-navbar-dropdown">
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li>
                                                    <Link to="/about/">About Hungry Ram</Link>
                                                </li>
                                                <li>
                                                    <Link to="/portfolio/">Portfolio</Link>

                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Services <BsChevronDown /></a>
                                        <div className="uk-navbar-dropdown">
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li>
                                                    <Link to="/services">All Services</Link>
                                                    <Link to="/services/small-business-website-design/">Small Business Websites</Link>
                                                    <Link to="/services/agent-idx-websites/">Agent IDX Websites</Link>
                                                    <Link to="/services/broker-idx-websites/">Broker IDX Websites</Link>
                                                    <Link to="/services/real-estate-agent-websites/">Real Estate Agent</Link>
                                                    <Link to="/services/real-estate-broker-websites/">Real Estate Broker</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Resources <BsChevronDown /></a>
                                        <div className="uk-navbar-dropdown">
                                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                                <li><Link to="/blog/">Blog</Link></li>
                                                <li><Link to="/faq/">FAQ</Link></li>
                                                <li><Link to="/documentation/">Documentation</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="/contact/">Contact</Link></li>
                                    <div className="uk-navbar-item">
                                        <li><a className="uk-button uk-button-primary" href="https://calendly.com/hungry-ram" rel="noopener" target="_blank">Book a call</a></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>




            <div data-uk-sticky="animation: uk-animation-slide-top-medium; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-dark; cls-inactive:uk-navbar-transparent; top: 400">
                <nav className="uk-navbar uk-container uk-hidden@m uk-box-shadow-small">
                    <div className="uk-navbar-left">
                        <a href="/">
                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1631928088/hungryram/2021-hungry-ram-logo-black_hsw94p.png" alt="Hungry Ram Web Design" width="200" className="dark-logo" />
                        </a>
                    </div>
                    <div className="uk-navbar-right">
                        <a className={`uk-navbar-toggle ${Styles.mobileIcon}`} data-uk-toggle="target: #modal-full">
                            <HiOutlineMenuAlt3 />
                        </a>
                    </div>
                </nav>
                {/* 
                <div id="mobile-menu" uk-offcanvas="mode: reveal">
                    <div className={`uk-offcanvas-bar uk-flex uk-flex-column ${Styles.ukOffcanvasBar}`}>
                        <ul className="uk-nav uk-margin-auto-vertical uk-dark" data-uk-nav>
                            <li><Link to="/">Home</Link></li>
                            <li className="uk-parent">
                                <Link to="#">About <BsChevronRight /></Link>
                                <ul className="uk-nav-sub">
                                    <li><Link to="/about/">About</Link></li>
                                    <li><Link to="/portfolio/">Portfolio</Link></li>
                                </ul>
                            </li>
                            <li className="uk-parent">
                                <Link to="#">Services <BsChevronRight /></Link>
                                <ul className="uk-nav-sub">
                                    <li><Link to="/services/">All Services</Link></li>
                                    <li><Link to="/services/agent-idx-websites/">Agent IDX</Link></li>
                                    <li><Link to="/services/broker-idx-websites/">Broker IDX</Link></li>
                                    <li><Link to="/services/real-estate-agent-websites/">Agent websites</Link></li>
                                    <li><Link to="/services/real-estate-broker-websites/">Broker websites</Link></li>
                                    <li><Link to="/services/small-business-website-design/">Small business website</Link></li>
                                    <li><Link to="/services/ecommerce-website-design/">Ecommerce website</Link></li>
                                </ul>
                            </li>
                            <li className="uk-parent">
                                <Link to="#">Resources <BsChevronRight /></Link>
                                <ul className="uk-nav-sub">
                                    <li><Link to="/blog/">Blog</Link></li>
                                    <li><Link to="/faq/">FAQ</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div> */}

                <div id="modal-full" className="uk-modal-full" data-uk-modal>
                    <div className={`uk-modal-dialog ${Styles.ukOffcanvasBar}`} data-uk-height-viewport>
                        <button className="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
                        <div>
                            <div className="uk-padding-large">
                                <div className="uk-child-width-1-2@s" data-uk-grid>
                                    <div className="uk-margin-large">
                                        <img src="https://res.cloudinary.com/hungryram19/image/upload/v1631928088/hungryram/2021-hungry-ram-logo-black_hsw94p.png" alt="Hungry Ram Web Design" width="150" />
                                    </div>
                                </div>
                                <ul className="uk-nav uk-margin-auto-vertical uk-dark" data-uk-nav>
                                    <li className={Styles.anchor}><Link to="/">Home</Link></li>
                                    <li className={`uk-parent ${Styles.anchor}`}>
                                        <Link to="#">About <BsChevronRight /></Link>
                                        <ul className="uk-nav-sub">
                                            <li><Link to="/about/">About</Link></li>
                                            <li><Link to="/portfolio/">Portfolio</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`uk-parent ${Styles.anchor}`}>
                                        <Link to="#">Services <BsChevronRight /></Link>
                                        <ul className="uk-nav-sub">
                                            <li><Link to="/services/">All Services</Link></li>
                                            <li><Link to="/services/agent-idx-websites/">Agent IDX</Link></li>
                                            <li><Link to="/services/broker-idx-websites/">Broker IDX</Link></li>
                                            <li><Link to="/services/real-estate-agent-websites/">Agent websites</Link></li>
                                            <li><Link to="/services/real-estate-broker-websites/">Broker websites</Link></li>
                                            <li><Link to="/services/small-business-website-design/">Small business website</Link></li>
                                            <li><Link to="/services/ecommerce-website-design/">Ecommerce website</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`uk-parent ${Styles.anchor}`}>
                                        <Link to="#">Resources <BsChevronRight /></Link>
                                        <ul className="uk-nav-sub">
                                            <li><Link to="/blog/">Blog</Link></li>
                                            <li><Link to="/faq/">FAQ</Link></li>
                                            <li><Link to="/documentation/">Documentation</Link></li>
                                        </ul>
                                    </li>
                                    <li className={Styles.anchor}><Link to="/contact">Contact</Link></li>
                                </ul>
                                <div>
                                    <Link to="/contact" className={`uk-button uk-button-primary uk-width-1-1 ${Styles.mobileCta}`}>Get Started</Link>
                                    <a href="https://calendly.com/hungry-ram" target="_blank" className={`uk-button uk-button-secondary uk-width-1-1 uk-margin-small-top ${Styles.mobileCta}`}>Book a Call</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}