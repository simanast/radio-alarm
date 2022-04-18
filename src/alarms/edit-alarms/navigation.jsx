import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
	editNavigation: {
		paddingVertical: 24,
		flexDirection: 'row',
		marginHorizontal: 20
	},
	navigation: {
		paddingVertical: 24
	},
	closeIcon: { marginRight: 32 },
	navigationText: {
		fontSize: 20,
		alignSelf: 'center'
	}
});

const Navigation = ({ isDeleteMode, cancelDeletion }) => {
	return isDeleteMode ? (
		<View style={styles.editNavigation}>
			<Pressable onPressOut={cancelDeletion} style={styles.closeIcon}>
				<FontAwesomeIcon icon={faXmark} size={24} />
			</Pressable>
			<Text style={styles.navigationText}>Удаление</Text>
		</View>
	) : (
		<View style={styles.navigation}>
			<Text style={styles.navigationText}>Будильники</Text>
		</View>
	);
};

export default Navigation;
