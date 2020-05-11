const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  createRedirect({
    fromPath: "/",
    toPath: "/fr/home",
    redirectInBrowser: true,
    isPermanent: true,
  });
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                title
                content
                featured_media {
                  alt_text
                }
                acf {
                  titre_anglais
                  contenu_anglais
                  photo_artiste {
                    path
                    source_url
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 636) {
                          src
                        }
                      }
                    }
                  }
                  expositions {
                    path
                    source_url
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 636) {
                          src
                        }
                      }
                    }
                  }
                  Photo_principale {
                    path
                    source_url
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 1350) {
                          src
                        }
                      }
                    }
                  }
                  texte_alternatif
                }
              }
            }
          }
        }
      `
    )
      .then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create Page pages.
        const pageTemplate = path.resolve("./src/templates/page.js");
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, (edge) => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.

          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: edge.node,
          });
        });
      })
      // ==== END PAGES ====

      // ==== ARTISTES (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpPortfolio {
                edges {
                  node {
                    title
                    date
                    slug
                    content
                    excerpt
                    acf {
                      titre_photo_1
                      technique_photo_1
                      technique_photo_2
                      technique_photo_3
                      descriptif_photo_3
                      descriptif_photo_2
                      Type_d_artiste
                      photo_1 {
                        path
                        source_url
                        alt_text
                        caption
                        title
                        localFile {
                          childImageSharp {
                            fluid(maxWidth: 600) {
                              src
                            }
                          }
                        }
                      }
                      wordpress_2eme_photo {
                        path
                        source_url
                        title
                        caption
                        alt_text
                        localFile {
                          childImageSharp {
                            fluid(maxWidth: 400) {
                              src
                            }
                          }
                        }
                      }
                      wordpress_3eme_photo {
                        path
                        source_url
                        alt_text
                        caption
                        title
                        localFile {
                          childImageSharp {
                            fluid(maxWidth: 400) {
                              src
                            }
                          }
                        }
                      }
                      dates
                      titre_anglais
                      texte_anglais
                    }
                  }
                }
              }
            }
          `
        ).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const ArtistsTemplateList = path.resolve(
            "./src/templates/artistes.js"
          );
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpPortfolio.edges, (edge) => {
            createPage({
              path: `/artistes`,
              component: slash(ArtistsTemplateList),
              context: edge.node,
            });
          });
          const ArtistsTemplate = path.resolve("./src/templates/artiste.js");
          _.each(result.data.allWordpressWpPortfolio.edges, (edge) => {
            createPage({
              path: `/artiste/${edge.node.slug}`,
              component: slash(ArtistsTemplate),
              context: edge.node,
            });
          });
        });
      })
      // ==== END ARTIST ====
      // ==== OEUVRES =====
      .then(() => {
        graphql(`
          {
            allWordpressWpPortfolio2 {
              edges {
                node {
                  excerpt
                  content
                  title
                  featured_media {
                    source_url
                  }
                  acf {
                    texte_anglais
                    titre_anglais
                  }
                }
              }
            }
          }
        `).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }
          const ArtistsTemplate = path.resolve(
            "./src/templates/expositions.js"
          );
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpPortfolio2.edges, (edge) => {
            createPage({
              path: `/expositions`,
              component: slash(ArtistsTemplate),
              context: edge.node,
            });
          });
        });
      })
      // === END PORTOFLIO2 ====
      // === BLOG POSTS ====
      .then(() => {
        graphql(`
          {
            allWordpressPost(sort: { fields: date, order: DESC }) {
              edges {
                node {
                  date
                  content
                  slug
                  excerpt
                  wordpress_id
                  date
                  title
                  featured_media {
                    source_url
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 582) {
                          src
                        }
                      }
                    }
                  }

                  categories {
                    description
                    slug
                    name
                  }
                  acf {
                    texte_anglais
                    titre_anglais
                    extrait_anglais
                  }
                }
              }
            }
          }
        `).then((result) => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.erros);
          }
          const posts = result.data.allWordpressPost.edges;
          const postsPerPage = 6;
          const numberOfPages = Math.ceil(posts.length / postsPerPage);
          const blogPostListTemplate = path.resolve(
            "./src/templates/blogPostList.js"
          );

          Array.from({ length: numberOfPages }).forEach((page, index) => {
            createPage({
              component: slash(blogPostListTemplate),
              path: index === 0 ? `/blog` : `/blog/${index + 1}`,
              context: {
                posts: posts.slice(
                  index * postsPerPage,
                  index * postsPerPage + postsPerPage
                ),
                numberOfPages,
                currentPage: index + 1,
              },
            });
          });
          const postTemplate = path.resolve("./src/templates/post.js");
          _.each(posts, (post) => {
            createPage({
              path: `/blog/${post.node.slug}`,
              component: slash(postTemplate),
              context: post.node,
            });
          });
          resolve();
        });
      });
  });
};
