import gql from 'graphql-tag';

export default gql`
	query getUser($id: ID!) {
		getUser(id: $id) {
			firstName
			lastName
		}
	}
`;
