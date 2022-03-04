import * as React from "react";
import { Link } from "gatsby";
import Hrlogo from "../images/2021-hungry-ram-logo-black.png"
import HrWhiteLogo from "../images/2021-hungry-ram-logo-white_bncaxe.png"

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
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="uk-h5">Websites</h3>
                            <ul className="uk-nav uk-nav-default">
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="uk-h5">Websites</h3>
                            <ul className="uk-nav uk-nav-default">
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="uk-h5">Websites</h3>
                            <ul className="uk-nav uk-nav-default">
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
                                <li><Link to="">Real Estate Website</Link></li>
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