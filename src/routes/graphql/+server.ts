import { createYoga, createSchema } from 'graphql-yoga';

const schema = createSchema({
	typeDefs: /* GraphQL */ `
		type Query {
			hello: String
		}
	`,
	resolvers: {
		Query: {
			hello: () => 'world'
		}
	}
});

const yoga = createYoga({
	schema,
	graphqlEndpoint: '/graphql',
	fetchAPI: globalThis
});

export { yoga as GET, yoga as POST };
