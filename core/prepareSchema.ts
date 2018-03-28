import { makeExecutableSchema } from 'graphql-tools';
var req = require('require-text');
const typeDefs = req('./schema.graphql', require);
import resolvers from '../graphql'

const schema: any = makeExecutableSchema({
  typeDefs,
  resolvers
})

export default schema