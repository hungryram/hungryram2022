import * as React from "react"

export default props => (

    <div className="uk-section">
        <div className="uk-container">
            <div className="uk-flex uk-flex-center">
                <div className="uk-width-3-4@s uk-text-center">
                    <h2 className="uk-heading-small">{props.heading}</h2>
                    {props.body &&
                        <p>{props.body}</p>
                    }
                </div>
            </div>
        </div>
    </div>
)