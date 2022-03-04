import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Contact() {
    return (
        <Layout>
            <Seo
                title="Contact"
                description=""
            />

            <div className="uk-section uk-section-large">
                <div className="uk-container">
                    <div className="uk-child-width-1-2@s uk-grid-large" data-uk-grid>
                        <div>
                            <div className="uk-width-large">
                            <h2>Contact</h2>
                            <p><strong>Stop wondering if Storyblok is the right fit for your business - we look forward to working with you and your team to help you achieve your goal. Storyblok helps enterprises organize their content for the world.</strong></p>
                            <p>Contact us today to:</p>
                            <ul>
                                <li>Discover Storyblok’s powerful content management capabilities</li>
                                <li>Understand how Storyblok can help your business</li>
                                <li>Discover Storyblok’s powerful content management capabilities</li>
                            </ul>
                            <p>To learn more about our Enterprise offering, check out Storyblok for Enterprises. To get support, please visit our forum, use our live chat or join us on Discord.</p>
                            </div>
                        </div>
                        <div>
                            <div className="uk-padding-large" style={{ backgroundColor: "#F8F8F9" }}>
                                <h2 className="uk-h3">Message Us</h2>
                            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" className="uk-grid-small" data-uk-grid action="/thank-you">
                                <input type="hidden" name="form-name" value="contact"/>
                                    <input name="bot-field" type="hidden" />
                                    <input type="hidden" name="Subject" value="Website Contact Form" />
                                    <div className="uk-width-1-2@s">
                                        <input className="uk-input" type="text" name="Name" placeholder="Name" required />
                                    </div>
                                    <div className="uk-width-1-2@s">
                                        <input className="uk-input" type="text" name="Phone" placeholder="Phone" required />
                                    </div>
                                    <div className="uk-width-1-1">
                                        <input className="uk-input" type="email" name="Email" placeholder="Email" required />
                                    </div>
                                    <div className="uk-width-1-1">
                                        <textarea className="uk-textarea" rows="5" name="Message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="uk-width-1-1">
                                        <button className="uk-button uk-button-primary uk-width-1-1">Submit</button>
                                    </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}