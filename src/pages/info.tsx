import React, { FunctionComponent } from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global, css } from "@emotion/react"

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
  }
`

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`

const Text1 = styled.div<{ disabled: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disabled }) => (disabled ? "line-through" : "none")};
`

const Text2 = styled("div")<{ disabled: boolean }>(({ disabled }) => ({
  fontSize: "15px",
  color: "blue",
  textDecoration: disabled ? "line-through" : "none",
}))

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle}></Global>
      <div css={TextStyle}>{title}</div>
      <Text1 disabled={true}>{description}</Text1>
      <Text2 disabled={true}>{author}</Text2>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
