export const schema = gql`
  type Weight {
    id: Int!
    """
    in gram
    """
    value: Int!
    recordedAt: DateTime!
    createdAt: DateTime!
  }

  type Query {
    weights: [Weight!]! @requireAuth
    weight(id: Int!): Weight @requireAuth
  }

  input CreateWeightInput {
    """
    in gram
    """
    value: Int!
    recordedAt: DateTime!
  }

  input UpdateWeightInput {
    """
    in gram
    """
    value: Int
    recordedAt: DateTime
  }

  type Mutation {
    createWeight(input: CreateWeightInput!): Weight! @requireAuth
    updateWeight(id: Int!, input: UpdateWeightInput!): Weight! @requireAuth
    deleteWeight(id: Int!): Weight! @requireAuth
  }
`
