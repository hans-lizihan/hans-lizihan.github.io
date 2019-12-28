import React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Blogs = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-3">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id} className="card" style={{marginBottom: 16}}>
                  <div className="card-content">
                    <h2 className="title">
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                        {'  '}
                        <time className="subtitle" datetime={node.frontmatter.date}>{node.frontmatter.date}</time>
                      </Link>
                    </h2>
                    <div className="content">
                      {node.excerpt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default Blogs
