import * as React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, connectHits, Highlight } from 'react-instantsearch-dom';

export default function Search() {
    const searchDocs = algoliasearch(
        '5DJH9I3ZKM',
        '2df1244844622c13708b66f76ca704a9'
    );


    const Hits = connectHits(({ hits }) => (
        <div>
            {/* Always use a ternary when coercing an array length */}
            {/* otherwise you might print out "0" to your UI */}
            {hits.length ? (
                <>
                    {/* I wanted to give a little explanation of the search here */}
                    <div>
                        These are the results of your search. The title and excerpt are
                        displayed, though your search may have been found in the content of
                        the post as well.
                    </div>

                    {/* Here is the crux of the component */}
                    {hits.map(hit => {
                        return (
                            <div key={hit.objectID}>
                                <Link
                                    to={"/documentation" + hit.slug}
                                >
                                    <h4 css={{ marginBottom: 0 }}>
                                        <Highlight attribute="title" hit={hit} tagName="strong" />
                                    </h4>
                                    {hit.subtitle ? (
                                        <h5>
                                            <Highlight
                                                attribute="subtitle"
                                                hit={hit}
                                                tagName="strong"
                                            />
                                        </h5>
                                    ) : null}
                                </Link>
                                <div>
                                    <Highlight attribute="excerpt" hit={hit} tagName="strong" />
                                </div>
                            </div>
                        )
                    })}
                </>
            ) : (
                <p>There were no results for your query. Please try again.</p>
            )}
        </div>
    ))

    return (
        <Layout>
            <Seo
                title="Documentation"
                description="Learn about our websites"
            />
            <div className="uk-section">
                <div className="uk-container">
                    <div>
                        <div className="uk-width-expand@s">
                            <h2>Search</h2>
                            <InstantSearch
                                indexName="Documentation"
                                searchClient={searchDocs}
                            >
                                <SearchBox />
                                <Hits />
                            </InstantSearch>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
