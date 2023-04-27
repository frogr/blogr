const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            id
            titleSlug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const blogPostTemplate = path.resolve(`./src/templates/blogPost.tsx`);
  const posts = result.data.allContentfulBlogPost.edges;

  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.node.titleSlug}`,
      component: blogPostTemplate,
      context: {
        titleSlug: post.node.titleSlug,
      },
    });
  });
};