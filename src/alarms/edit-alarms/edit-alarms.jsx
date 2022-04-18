import React from 'react';
import { View, StyleSheet } from 'react-native';
import DisplayAlarms from './display-alarms/display-alarms';
import EditButton from './edit-button';
import Navigation from './navigation';

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'flex-start',
		paddingTop: 28
	}
});

const getIsDeleteMode = (alarms) => alarms.some(({ isDeleteMode }) => isDeleteMode);

const EditAlarms = ({ alarms, openAddAlarm, ...restAlarmsProps }) => {
	const isDeleteMode = getIsDeleteMode(alarms);

	return (
		<View style={styles.content}>
			<Navigation isDeleteMode={isDeleteMode} {...restAlarmsProps} />
			<DisplayAlarms alarms={alarms} {...restAlarmsProps} />
			<EditButton isDeleteMode={isDeleteMode} {...restAlarmsProps} openAddAlarm={openAddAlarm} />
		</View>
	);
};

export default EditAlarms;
