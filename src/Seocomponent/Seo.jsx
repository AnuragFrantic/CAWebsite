import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const Seo = ({ title, description, keywords, image, url }) => {
    const defaultImage = image || "https://example.com/default-image.jpg"; // Set a default image
    const ogType = url?.includes("/blog-details/") ? "article" : "website"; // Check if it's a blog

    return (
        <Helmet>
            {/* Dynamically Set Title */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={defaultImage} />
            <meta property="og:type" content={ogType} />
            {url && <meta property="og:url" content={url} />}

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={defaultImage} />

            {/* JSON-LD Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": ogType === "article" ? "Article" : "WebPage",
                    "name": title,
                    "description": description,
                    "image": defaultImage,
                    "url": url,
                })}
            </script>
        </Helmet>
    );
};

// Prop Type Validation
Seo.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string.isRequired,
};

export default Seo;
