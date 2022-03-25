import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Container from './container'
// import * as styles from './article-preview.module.css'

const ProductPreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/products/${post.slug}`}>
                <GatsbyImage alt="" image={post.image.file.url} />
                <h2>{post.title}</h2>
              </Link>
              <p>{post.description2}</p>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ProductPreview
