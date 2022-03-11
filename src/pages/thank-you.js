import { Link } from "gatsby"
import * as React from "react"
import Heading from "../components/blocks/heading"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function Thanks() {
    return (
        <Layout>
            <Seo
                title="Thank You"
                description="Thank you for your inquiry. Our team will reach back out to you as soon as possible."
            />
            <div className="uk-section uk-text-center">
                <div className="uk-container">
                    <Heading
                        heading="Thank You"
                        body="Thank you for your inquiry. Our team will reach back out to you as soon as possible."
                    />
                    <Link to="/" className="uk-button uk-button-primary">Back Home</Link>
                </div>
            </div>
        </Layout>
    )
}