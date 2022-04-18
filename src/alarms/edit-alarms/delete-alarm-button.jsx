import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
	button: {
		bottom: 60,
		width: 60,
		height: 60,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: 'red',
		borderRadius: 20
	}
});

const DeleteAlarmButton = ({ deleteAlarms }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={deleteAlarms}>
			<FontAwesomeIcon style={{ padding: 12 }} color={'red'} icon={faTrash} size={24} />
		</TouchableOpacity>
	);
};

export default DeleteAlarmButton;
