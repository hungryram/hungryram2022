import * as React from "react";
import { Link } from "gatsby";
import HrWhiteLogo from "../images/2021-hungry-ram-logo-white_bncaxe.png"
import data from "../../data/profile"

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#15171A" }}>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-margin-large uk-light">
                        <h2>Perfect partner for success</h2>
                    </div>
                    <div className="uk-child-width-1-4@m uk-child-width-1-2" data-uk-grid>
                        <div>
                            <h3 className="uk-h5">Websites</h3>
                            <ul className="uk-nav uk-nav-default">
                                {
                                    data.contact_information.email &&
                                    <li>
                                        <a href={`mailto: ${data.contact_information.email}`}>{data.contact_information.email}</a>
                                    </li>
                                }
                                {
                                    data.contact_information.office &&
                                    <li>
                                        <a href={`tel: ${data.contact_information.office}`}>Office: {data.contact_information.office}</a>
                                    </li>
                                }
                                {
                                    data.contact_information.cell &&
                                    <li>
                                        <a href={`tel: ${data.contact_information.cell}`}>Direct: {data.contact_information.cell}</a>
                                    </li>
                                }
                                {
                                    data.contact_information.address &&
                                    <li>
                                        <a href="#">{data.contact_information.address}, {data.contact_information.city}, {data.contact_information.state} {data.contact_information.zip_code} </a>
                                    </li>
                                }
                            </ul>
                        </div>
                        <div>
                            <h3 className="uk-h5">Real Estate Websites</h3>
                            <ul className="uk-nav uk-nav-default">
                                <li>
                                    <Link to="/services/real-estate-agent-websites/">Agent Websites</Link>
                                </li>
                                <li>
                                    <Link to="/services/real-estate-broker-websites/">Broker Websites</Link>
                                </li>
                                <li>
                                    <Link to="/services/agent-idx-websites/">Agent IDX Websites</Link>
                                </li>
                                <li>
                                    <Link to="/services/broker-idx-websites/">Broker IDX Websites</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="uk-h5">Small Business Sites</h3>
                            <ul className="uk-nav uk-nav-default">
                                <li>
                                    <Link to="/services/small-business-website-design/">Small Business Website Design</Link>
                                </li>
                                <li>
                                    <Link to="/services/ecommerce-website-design/">Ecommerce Website Design</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="uk-h5">Websites</h3>
                            <ul className="uk-nav uk-nav-default">
                                <li>
                                    <p>Providing the best cutting-edge technology and tools to deliver you high-quality websites. Always aiming to provide the highest level of service. Need help growing your business? Let's connect with a web developer.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="footer-credit" data-uk-grid>
                        <div className="uk-width-1-2@s">
                            <ul className="uk-navbar-nav">
                                <Link to="/">
                                    <img src={HrWhiteLogo} alt="" width="200" />
                                </Link>

                            </ul>
                        </div>
                        <div className="uk-width-1-2@s">
                            <ul className="uk-nav uk-nav-default uk-text-right">
                                <li className="uk-display-inline-block uk-margin-small-right"><Link to="">Facebook</Link></li>
                                <li className="uk-display-inline-block uk-margin-small-right"><Link to="">Instagram</Link></li>
                                <li className="uk-display-inline-block uk-margin-small-right"><Link to="">Twitter</Link></li>
                                <li className="uk-display-inline-block uk-margin-small-right"><Link to="">Linkedin</Link></li>
                            </ul>
                        </div>
                    </div>
                    <p><small>&copy; Copyright {new Date().getFullYear()} &middot; <Link to="https://www.hungryram.com/" className="uk-link-reset">Hungry Ram LLC</Link></small></p>
                </div>
            </div>
        </footer>
    )
}
