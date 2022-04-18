import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Alarm from './alarm/alarm';

const styles = StyleSheet.create({
	content: {
		flex: 1
	},
	noContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	noContentText: {
		fontSize: 20,
		marginTop: -20
	}
});

const DisplayAlarms = ({ alarms, getToggleAlarm, getToDeleteMode, setCurrentAlarmId }) => {
	const isAlarms = alarms.length;

	return isAlarms ? (
		<ScrollView>
			<View style={styles.content}>
				{alarms.map((alarm, index) => {
					const toggleAlarm = getToggleAlarm(index);
					const toDeleteMode = getToDeleteMode(index);

					return (
						<Alarm
							{...alarm}
							setCurrentAlarmId={setCurrentAlarmId}
							toDeleteMode={toDeleteMode}
							toggleAlarm={toggleAlarm}
							key={index}
						/>
					);
				})}
			</View>
		</ScrollView>
	) : (
		<View style={styles.noContent}>
			<Text style={styles.noContentText}>Нет будильников</Text>
		</View>
	);
};

export default DisplayAlarms;
