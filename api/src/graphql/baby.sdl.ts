export const schema = gql`
  type Baby {
    name: String!
    birthDate: DateTime!
  }

  type Query {
    baby: Baby @requireAuth
  }
`
