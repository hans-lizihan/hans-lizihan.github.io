import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="blog content column is-half is-offset-3">
              <h1>{post.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
export default BlogPost
