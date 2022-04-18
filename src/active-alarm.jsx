import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import displayTime from './display-time';

const styles = StyleSheet.create({
	alarmText: { fontSize: 28, marginTop: 24 },
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		paddingTop: 28,
		alignItems: 'center'
	},
	button: {
		paddingHorizontal: 8,
		paddingVertical: 12,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: 'green',
		marginTop: 24
	},
	buttonText: { fontSize: 20, color: 'green' }
});

const ActiveAlarm = ({ time, turnOff }) => {
	return (
		<View style={styles.container}>
			<FontAwesomeIcon icon={faBell} size={80} />
			<Text style={styles.alarmText}>{displayTime(time)}</Text>
			<TouchableOpacity onPress={turnOff} style={styles.button}>
				<Text style={styles.buttonText}>Отключить</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ActiveAlarm;
