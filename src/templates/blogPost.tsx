import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query BlogPostQuery($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      titleSlug
      blogNumber
    }
  }
`;

const BlogPostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost;

  return (
    <div>
      <h1>{post.titleSlug}</h1>
      <p>{post.blogNumber}</p>
    </div>
  );
};

export default BlogPostTemplate;
