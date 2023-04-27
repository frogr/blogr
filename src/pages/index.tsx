import * as React from "react";
import { HeadFC, PageProps, graphql, Link } from "gatsby";

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

const links = [
  {
    text: "austins blog is now live.",
    url: "/hello-world",
    description: "123",
    color: "#E95800",
  },
];

export const pageQuery = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          titleSlug
          blogNumber
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps> = ({ data }) => {
  if (!data || !data.allContentfulBlogPost) {
    return <div>No posts found</div>;
  }

  const posts = data.allContentfulBlogPost.edges;

  return (
    <main style={pageStyles}>
      <title> austin blogs </title>
      <h1 style={headingStyles}>
        <div>
          <div>Hi!</div>
          <div>
            I'm <span>Austin</span>
          </div>
          <div>
            <span style={headingAccentStyles}>
              I'm a software engineer from California
            </span>
          </div>
        </div>
      </h1>
      <div>
        <h2>I think, therefore I write</h2>
        <div>
          {posts.map((post: any, index: any) => (
            <div key={index}>
              <Link to={`/blog/${post.node.titleSlug}`}>
                {" "}
                {/* Link to the blog post page */}
                <h2>{post.node.titleSlug}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
