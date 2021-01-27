import ApolloClient from "apollo-boost"

export const client = new ApolloClient({
  uri: "https://es-elastigraph.made.com/graphql", // TODO put in a config variable
})
