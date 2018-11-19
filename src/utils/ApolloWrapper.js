import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from '../graphql';
export default function withApollo(WrappedComponent) {
	return function WrappedWithApollo(props) {
		return (
			<ApolloProvider client={client}>
				<WrappedComponent {...props} />
			</ApolloProvider>
		);
	};
}
