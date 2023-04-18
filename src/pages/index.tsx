import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const doclistStyles = {
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  },
];

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

export const allContentfulQLQuery = graphql`
  query blogPosts {
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
      }
    }
  }
`;

const links = [
  {
    text: "austins blog is now live.",
    url: "/hello-world",
    description: allContentfulQLQuery + " 123",
    color: "#E95800",
  },
];

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const { allContentfulBlogPost } = data;

  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Heading Style
        <br />
        <span style={headingAccentStyles}>Heading Accent Style</span>
      </h1>
      <p style={paragraphStyles}>P Style</p>
      <code style={codeStyles}>{"Code Style "}</code>
      <ul style={doclistStyles}>
        {docLinks.map((doc) => (
          <li key={doc.url} style={docLinkStyle}>
            <a
              style={linkStyle}
              href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
            >
              {doc.text}
            </a>
          </li>
        ))}
      </ul>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a style={linkStyle} href={`${link.url}`}>
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>

      <div>
        <h1>Blog Posts</h1>
        {allContentfulBlogPost.nodes.map((post) => (
          <div key={post.id}>{post.id}</div>
        ))}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>austin blogs</title>;
