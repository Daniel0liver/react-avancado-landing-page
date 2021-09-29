import { gql } from 'graphql-request'

const GET_LANDING_PAGE = gql`
  query GET_LANDING_PAGE {
    landingPage {
      logo {
        alternativeText
        url
      }
    }
  }
`

export default GET_LANDING_PAGE
