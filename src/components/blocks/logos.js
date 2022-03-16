import * as React from "react"
import Serhant from "../../images/serhant.png"
import RealtyOneGroup from "../../images/realtyone-logo-new.png"
import C21 from "../../images/c21garlandlogo2.png"
import PhoHa from "../../images/pho-ha-plus.png"
import Exp from "../../images/exp-brokered-by.png"

export default function Logos() {
    return (
        <div className="uk-section">
            <div className="uk-container uk-container-small">
                <div className="uk-margin-large uk-text-center">
                <h2 className="uk-h3">Trusted by established names</h2>
                </div>
                <div className="uk-position-relative uk-text-center" tabindex="-1" data-uk-slider>

                    <ul className="uk-slider-items uk-child-width-1-4 uk-grid uk-grid-large">
                        <li>
                            <div className="uk-panel">
                                <img src={Serhant} alt="" width="150" />
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src={RealtyOneGroup} alt="" width="150" />
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src={C21} alt="" width="150" />
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src={PhoHa} alt="" width="150" />
                            </div>
                        </li>
                        <li>
                            <div className="uk-panel">
                                <img src={Exp} alt="" width="100" />
                            </div>
                        </li>
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>

                </div>
            </div>
        </div>
    )
}