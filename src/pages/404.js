import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Heading from "../components/blocks/heading"

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Seo
        title="Website Not Found"
      />
      <Heading
          heading="404 Page not found"
          body="The page you were looking for has either been moved or deleted. Sorry about that!"
      />
      <div className="uk-section uk-section-small">
        <div className="uk-container uk-text-center">
          <hr />
          <h2 className="uk-h3">Let's take you back home</h2>
          <p>You may find some more useful links back on the home page</p>
          <Link to="/" className="uk-button uk-button-primary">Return Home</Link>  
        </div>  
      </div>
    </Layout>
  )
}

export default NotFoundPage
