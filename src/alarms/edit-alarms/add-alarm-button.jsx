import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
	button: {
		bottom: 60,
		width: 60,
		height: 60,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: 'blue',
		borderRadius: 20
	}
});

const AddAlarmButton = ({ openAddAlarm }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={openAddAlarm}>
			<FontAwesomeIcon icon={faPlus} size={24} color="blue" />
		</TouchableOpacity>
	);
};

export default AddAlarmButton;
