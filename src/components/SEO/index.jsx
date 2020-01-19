import React from "react";
import Helmet from "react-helmet";

const SEO = ( { title, description } ) => {
    
    // const schemaOrgJSONLD = [
    //   {
    //     "@context": "http://schema.org",
    //     "@type": "WebSite",
    //     url: blogURL,
    //     name: title,
    //     alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
    //   }
    // ]

    return (
      <Helmet>
        <html lang="en-GB" />
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <meta name="image" content={image} /> */}

        {/* Schema.org tags */}
        {/* <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script> */}
      </Helmet>
    )
}

export default SEO