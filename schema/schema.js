const graphql = require('graphql');
const _= require('lodash');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const users = [
  {id: "1", firstName: "Anusha", age: 20},
  {id: "2", firstName: "Vivek", age: 30}
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users,{id: args.id})
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
