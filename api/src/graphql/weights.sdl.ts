export const schema = gql`
  type Weight {
    id: Int!
    value: Float!
    recordedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    weights: [Weight!]! @requireAuth
    weight(id: Int!): Weight @requireAuth
  }

  input CreateWeightInput {
    value: Float!
    recordedAt: DateTime!
  }

  input UpdateWeightInput {
    value: Float
    recordedAt: DateTime
  }

  type Mutation {
    createWeight(input: CreateWeightInput!): Weight! @requireAuth
    updateWeight(id: Int!, input: UpdateWeightInput!): Weight! @requireAuth
    deleteWeight(id: Int!): Weight! @requireAuth
  }
`
