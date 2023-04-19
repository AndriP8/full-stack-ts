import queryTwitterResolvers from './resolvers/query';
import Db from './db';
import { Resolvers } from './resolvers-types.generated';
export interface TwitterResolverContext {
  db: Db;
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query: queryTwitterResolvers,
};
export default resolvers;
