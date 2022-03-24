export const schema = gql`
  type Feeding {
    id: Int!
    type: FeedingType!
    side: FeedingSide
    startTime: DateTime!
    endTime: DateTime
    """
    in gram
    """
    startWeight: Int
    """
    in gram
    """
    endWeight: Int
  }

  # type BreastFeeding implements Feeding {
  #   id: Int!
  #   type: FeedingType!
  #   side: FeedingSide!
  #   startTime: DateTime!
  #   endTime: DateTime
  #   startWeight: Int
  #   endWeight: Int
  # }

  # type BottleFeeding implements Feeding {
  #   id: Int!
  #   type: FeedingType!
  #   startTime: DateTime!
  #   endTime: DateTime
  #   startWeight: Int
  #   endWeight: Int
  # }

  enum FeedingType {
    BREAST
    BOTTLE
  }

  enum FeedingSide {
    LEFT
    RIGHT
  }

  type Query {
    feedings: [Feeding!]! @requireAuth
    feeding(id: Int!): Feeding @requireAuth
  }

  input StartFeedingInput {
    type: FeedingType!
    side: FeedingSide
    startTime: DateTime!
    startWeight: Int
  }

  input EndFeedingInput {
    endTime: DateTime
    endWeight: Int
    pauses: Int
  }

  type Mutation {
    startFeeding(input: StartFeedingInput!): Feeding! @requireAuth
    endFeeding(id: Int!, input: EndFeedingInput!): Feeding! @requireAuth
    deleteFeeding(id: Int!): Feeding! @requireAuth
  }
`

// export const resolvers = {
//   Feeding: {
//     __resolveType({ type }) {
//       if (type === 'BREAST') return 'BreastFeeding'
//       if (type === 'BOTTLE') return 'BottleFeeding'
//     },
//   },
// }
