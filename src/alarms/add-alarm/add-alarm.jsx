import RNDateTimePicker from '@react-native-community/datetimepicker';
import RadioButtonRN from 'radio-buttons-react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { View, Text, StyleSheet, Pressable, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import radioButtonsData from './radio-buttons-data';
import useDate from './use-date';
import useDatePicker from './use-date-picker';
import useHandleAdd from './use-handle-add';

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'flex-start',
		paddingTop: 28
	},
	navigation: {
		paddingVertical: 24,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 20
	},
	navigationText: {
		fontSize: 20,
		alignSelf: 'center'
	},
	alarmContainer: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	},
	alarmValue: { fontSize: 56, marginBottom: 20 },
	radioButtonsContainer: { marginHorizontal: 40, flex: 1 },
	button: {
		paddingHorizontal: 8,
		paddingVertical: 12,
		borderRadius: 4,
		borderWidth: 2,
		borderColor: 'blue',
		marginTop: 0
	},
	buttonText: { fontSize: 20, color: 'blue' }
});

const AddAlarm = ({ closeAddAlarm, addAlarm }) => {
	const [ isDatePicker, datePickerActions ] = useDatePicker();
	const [ { hours, mins, date }, handleDataPickerChange ] = useDate(datePickerActions);
	const [ handleAdd, handleRadioButtonChange ] = useHandleAdd({ date, addAlarm, closeAddAlarm });

	const { openDatePicker } = datePickerActions;

	return (
		<View style={styles.content}>
			<View style={styles.navigation}>
				<Pressable onPressOut={closeAddAlarm}>
					<FontAwesomeIcon icon={faXmark} size={24} />
				</Pressable>
				<Text style={styles.navigationText}>Добавить</Text>
				<Pressable onPressOut={handleAdd}>
					<FontAwesomeIcon icon={faCheck} size={24} />
				</Pressable>
			</View>
			<View style={styles.alarmContainer}>
				<Text style={styles.alarmValue}>
					{hours}:{mins}
				</Text>
				<TouchableOpacity onPress={openDatePicker} style={styles.button}>
					<Text style={styles.buttonText}>Изменить</Text>
				</TouchableOpacity>
			</View>
			{isDatePicker && (
				<RNDateTimePicker value={date} onChange={handleDataPickerChange} mode="time" display="clock" is24Hour />
			)}
			<View style={styles.radioButtonsContainer}>
				<RadioButtonRN
					initial={1}
					activeColor="#0b0"
					data={radioButtonsData}
					selectedBtn={handleRadioButtonChange}
				/>
			</View>
		</View>
	);
};

export default AddAlarm;
