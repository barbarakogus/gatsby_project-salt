import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ProductPreview from '../components/product-preview'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulProductsDay2.nodes')
    
    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <Hero title="Blog" />
        <ProductPreview posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
query ProductsDay2IndexQuery {
  allContentfulProductsDay2 {
    nodes {
      description2
      price
      slug
      title
      image {
        file {
          fileName
          url
        }
      }
    }
  }
}
`
