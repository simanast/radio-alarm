import React from 'react';
import displayTime from '../../../../display-time';
import getSwitchColors from './get-switch-colors';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import getStyles from './get-styles';
import getStatusText from './get-status-text';
import useSetAlarm from './use-set-alarm';

const styles = StyleSheet.create({
	switchContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		flexDirection: 'row'
	}
});

const Alarm = ({ id, time, isOn, setCurrentAlarmId, isDeleteMode, toggleAlarm, toDeleteMode }) => {
	const formattedTime = displayTime(time);
	const { trackColors, thumbColor } = getSwitchColors(isOn);
	const { containerClassName, textClassName, statusTextClassName } = getStyles({ isOn, isDeleteMode });
	const statusText = getStatusText(isOn);

	useSetAlarm({ id, isOn, time }, setCurrentAlarmId);

	return (
		<React.Fragment>
			{true && (
				<TouchableOpacity onLongPress={toDeleteMode}>
					<View style={containerClassName}>
						<View>
							<Text style={textClassName}>{formattedTime}</Text>
							<Text style={statusTextClassName}>{statusText}</Text>
						</View>
						<View style={styles.switchContainer}>
							<Switch
								trackColor={trackColors}
								thumbColor={thumbColor}
								value={isOn}
								onValueChange={toggleAlarm}
							/>
						</View>
					</View>
				</TouchableOpacity>
			)}
		</React.Fragment>
	);
};

export default Alarm;
