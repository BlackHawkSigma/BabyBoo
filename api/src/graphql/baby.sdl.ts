export const schema = gql`
  type Baby {
    id: Int!
    name: String!
    birthDate: DateTime!
  }

  type Query {
    baby: Baby @requireAuth
  }
`
