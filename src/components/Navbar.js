import * as React from "react"
import { Link } from "gatsby"
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
import * as Styles from "../styles/navbar.module.css"
import Logo from "../images/2021-hungry-ram-logo-black.png"

export default function Navbar() {

    return (
        <div>
            <div className={Styles.navbarTop} style={{ backgroundColor: "#0A2540" }}>
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
                        <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                                <li>
                                    <a href="tel:(657) 549-5082)" target="_blank" rel="noopener">(657) 549-5082)</a>
                                </li>
                                <li>
                                    <a href="mailto:ram@hungryram.com" target="_blank" rel="noopener">ram@hungryram.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-visible@m">
                <nav className="uk-navbar-container uk-navbar-transparent">
                    <div className="uk-container">
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
                                                    <Link to="/about">About Hungry Ram</Link>
                                                </li>
                                                <li>
                                                    <Link to="/portfolio">Portfolio</Link>

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
                                                <li>
                                                    <Link to="/blog">Blog</Link>
                                                </li>
                                                <li>
                                                    <Link to="/faq">FAQ</Link>

                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <div className="uk-navbar-item">
                                        <li><a class="uk-button uk-button-primary" href="https://calendly.com/hungry-ram" rel="noopener" target="_blank">Book a call</a></li>
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
                            <img src="https://res.cloudinary.com/hungryram19/image/upload/v1631928088/hungryram/2021-hungry-ram-logo-black_hsw94p.png" alt="Hungry Ram Web Design" width="200" class="dark-logo" />
                        </a>
                    </div>
                    <div className="uk-navbar-right">
                        <a className="uk-navbar-toggle" data-uk-navbar-toggle-icon data-uk-toggle="target: #mobile-menu"></a>
                    </div>
                </nav>

                <div id="mobile-menu" uk-offcanvas="mode: reveal">
                    <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                        <ul className="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                            <li className="uk-nav-header">Hungry Ram</li>

                            <li className="uk-nav-header"></li>
                            <li><Link to="">Home</Link></li>
                            <li className="uk-parent">
                                <a to="#">Services</a>
                                <ul className="uk-nav-sub">
                                    <li className="uk-nav-header">Real Estate Websites</li>
                                    <li className="uk-nav-divider"></li>
                                    <li><Link to="/services/real-estate-agent-websites/">Agent websites</Link></li>
                                    <li><Link to="/services/real-estate-broker-websites/">Broker websites</Link></li>
                                    <li className="uk-nav-header">IDX Websites</li>
                                    <li className="uk-nav-divider"></li>
                                    <li><Link to="/services/agent-idx-websites/">Agent IDX</Link></li>
                                    <li><Link to="/services/broker-idx-websites/">Broker IDX</Link></li>
                                    <li className="uk-nav-header">Small Business Websites</li>
                                    <li className="uk-nav-divider"></li>
                                    <li><Link to="/services/ecommerce-website-design/">Ecommerce website</Link></li>
                                    <li><Link to="/services/small-business-website-design/">Small business website</Link></li>
                                </ul>
                            </li>
                            <li className="uk-parent">
                                <a to="#">About</a>
                                <ul className="uk-nav-sub">
                                    <li className="uk-nav-header">Hungry Ram</li>
                                    <li className="uk-nav-divider"></li>
                                    <li><Link to="/about/">About</Link></li>
                                    <li><Link to="/portfolio/">Portfolio</Link></li>
                                    <li><Link to="/contact/">Contact</Link></li>
                                    <li className="uk-nav-header">Resources</li>
                                    <li className="uk-nav-divider"></li>
                                    <li><Link to="/faq/">FAQ</Link></li>
                                    <li><Link to="/blog/">Blog</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}