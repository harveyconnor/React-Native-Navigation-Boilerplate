import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const WelcomeScreen = props => (
	<View style={styles.root}>
		<Text>This is the welcome screen</Text>
	</View>
);

export default WelcomeScreen;
