import * as React from "react"
import * as Styles from "../../styles/blog.module.css"
import { Link } from "gatsby"

export default props => (
    <div>
        <Link to={props.url} className="uk-link-reset">
            <div className={`uk-card ${Styles.articleCard}`}>
                <div className="uk-card-media-top uk-cover-container">
                    <canvas height="400"></canvas>
                    <img src={props.image} alt={props.alt} data-uk-cover />
                </div>
                <div className="uk-card-body">
                    <h2 className="uk-h4">{props.title}</h2>
                    <p>{props.excerpt}</p>
                </div>
            </div>
        </Link>
    </div>
)


