import { AsyncStorage } from 'react-native';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { persistCache } from 'apollo-cache-persist';

const cache = new InMemoryCache();

persistCache({
	cache,
	storage: AsyncStorage
});

const client = new ApolloClient({
	uri: 'http://localhost:8000/graphql',
	cache
});

export default client;
