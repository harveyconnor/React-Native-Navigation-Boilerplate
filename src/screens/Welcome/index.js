import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { compose, graphql, Query } from 'react-apollo';

import GET_USER from '../../graphql/queries/getUser';
import GET_USERS from '../../graphql/queries/getUsers';

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		alignItems: 'center'
	}
});

const WelcomeScreen = props => {
	console.log(props);

	return (
		<View style={styles.root}>
			<Query query={GET_USER} variables={{ id: 1 }} fetchPolicy="cache-and-network">
				{({ loading, error, data }) => {
					{
						/* if (loading) return <Text>Loading...</Text>; */
					}
					{
						/* if (error) return <Text>Error! ${error.message}</Text>; */
					}

					return <Text>{data.getUser.firstName}</Text>;
				}}
			</Query>

			<View style={styles.container}>
				<Text>{/* {props.getUser.getUser.firstName} {props.getUser.getUser.lastName} */}</Text>
				<Text />
			</View>
		</View>
	);
};

// export default compose(
// 	graphql(GET_USER_QUERY, {
// 		name: 'getUser',
// 		options: {
// 			fetchPolicy: 'cache-and-network',
// 			variables: {
// 				id: 1
// 			}
// 		}
// 	}),
// 	graphql(GET_USERS_QUERY, {
// 		name: 'getUsers',
// 		options: {
// 			fetchPolicy: 'cache-and-network'
// 		}
// 	})
// )(WelcomeScreen);

export default WelcomeScreen;
