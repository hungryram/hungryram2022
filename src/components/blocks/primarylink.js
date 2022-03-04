import * as React from "react"
import { Link } from 'gatsby';

export default props => (
    <Link to={props.link} className="link-primary">{props.label}</Link>
)