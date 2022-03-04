import * as React from "react"
import Serhant from "../../images/serhant.png"

export default function Logos() {
    return (
        <div className="uk-section">
            <div className="uk-container uk-container-small">
                <div className="uk-margin-large uk-text-center">
                <h2 className="uk-h4">Trusted by big names</h2>
                </div>
                <div className="uk-position-relative uk-text-center" tabindex="-1" data-uk-slider>

                    <ul className="uk-slider-items uk-child-width-1-5 uk-grid uk-grid-large">
                        <li>
                            <div className="uk-panel">
                                <img src={Serhant} alt="" width="150" />
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src={Serhant} alt="" width="150" />
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src={Serhant} alt="" width="150" />
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src={Serhant} alt="" width="150" />
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src={Serhant} alt="" width="150" />
                            </div>
                        </li>
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

                </div>
            </div>
        </div>
    )
}