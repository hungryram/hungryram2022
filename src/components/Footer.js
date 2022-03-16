import * as React from "react";
import { graphql, Link } from "gatsby";
import HrWhiteLogo from "../images/2021-hungry-ram-logo-white_bncaxe.png"
import contact from "../../data/profile"

export default function Footer({ data }) {
    return (
        <footer style={{ backgroundColor: "#15171A" }}>
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-margin-large uk-light">
                        <div className="uk-child-width-1-2@s uk-flex-middle" data-uk-grid>
                            <div>
                                <h2>Perfect partner for success</h2>
                            </div>
                        </div>
                    </div>
                    <div className="uk-child-width-1-4@m uk-child-width-1-2 uk-grid-small" data-uk-grid>

                        <div>
                            <h3 className="uk-h5">Contact Information</h3>
                            <ul className="uk-nav uk-nav-default">
                                {
                                    contact.contact_information.email &&
                                    <li>
                                        <a href={`mailto: ${contact.contact_information.email}`}>{contact.contact_information.email}</a>
                                    </li>
                                }
                                {
                                    contact.contact_information.office &&
                                    <li>
                                        <a href={`tel: ${contact.contact_information.office}`}>Office: {contact.contact_information.office}</a>
                                    </li>
                                }
                                {
                                    contact.contact_information.cell &&
                                    <li>
                                        <a href={`tel: ${contact.contact_information.cell}`}>Direct: {contact.contact_information.cell}</a>
                                    </li>
                                }
                                {
                                    contact.contact_information.address &&
                                    <li>
                                        <a href="#">{contact.contact_information.address}, {contact.contact_information.city}, {contact.contact_information.state} {contact.contact_information.zip_code} </a>
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
                            <h3 className="uk-h5">About Us</h3>
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
                                    <img src={HrWhiteLogo} alt="Hungry Ram Web Design" width="200" />
                                </Link>

                            </ul>
                        </div>
                        <div className="uk-width-1-2@s">
                            <ul className="uk-nav uk-nav-default uk-text-right@s">
                                <li className="uk-display-inline-block uk-margin-small-right"><a href="https://www.facebook.com/HungryRam/" target="_blank" rel="noopener">Facebook</a></li>
                                <li className="uk-display-inline-block uk-margin-small-right"><a href="https://www.instagram.com/ramdettmer/" target="_blank" rel="noopener">Instagram</a></li>
                                <li className="uk-display-inline-block uk-margin-small-right"><a href="https://www.yelp.com/biz/hungry-ram-yorba-linda" target="_blank" rel="noopener">Yelp</a></li>
                            </ul>
                        </div>
                    </div>
                    <p className="uk-light"><small>&copy; Copyright {new Date().getFullYear()} &middot; <Link to="https://www.hungryram.com/" className="uk-link-reset">Hungry Ram LLC</Link></small></p>
                    <p>
                        <small>
                            <ul className="uk-nav uk-nav-default">
                                <li className="uk-display-inline-block uk-margin-small-right">
                                    <Link to="/legal/accessibility">Accessibility</Link>
                                </li>
                                <li className="uk-display-inline-block uk-margin-small-right">
                                    <Link to="/legal/privacy-policy/">Privacy Policy</Link>
                                </li>
                                <li className="uk-display-inline-block uk-margin-small-right">
                                    <Link to="/legal/terms-and-conditions/">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </small></p>
                </div>
            </div>
        </footer>
    )
}