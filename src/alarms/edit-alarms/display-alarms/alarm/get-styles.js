import { StyleSheet } from 'react-native';

const inactiveColor = '#b6b6b6';
const activeColor = '#000000';

const styles = StyleSheet.create({
	alarmContainer: {
		paddingVertical: 16,
		paddingHorizontal: 24,
		flexDirection: 'row',
		zIndex: 1
	},
	alarmContainerDeleteMode: {
		paddingVertical: 16,
		paddingHorizontal: 24,
		flexDirection: 'row',
		backgroundColor: '#dddddd'
	},
	alarmTextInactive: {
		color: inactiveColor,
		fontSize: 36,
		fontWeight: '500'
	},
	alarmTextActive: {
		color: activeColor,
		fontSize: 36,
		fontWeight: '500'
	},
	statusTextInactive: {
		fontSize: 16,
		paddingTop: -50,
		color: inactiveColor,
		textAlign: 'center',
		marginTop: -5
	},
	statusTextActive: {
		fontSize: 16,
		paddingTop: -50,
		color: activeColor,
		textAlign: 'center',
		marginTop: -5
	}
});

const getStyles = ({ isOn, isDeleteMode }) => {
	const containerClassName = isDeleteMode ? styles.alarmContainerDeleteMode : styles.alarmContainer;
	const textClassName = isOn ? styles.alarmTextActive : styles.alarmTextInactive;
	const statusTextClassName = isOn ? styles.statusTextActive : styles.statusTextInactive;

	return { containerClassName, textClassName, statusTextClassName };
};

export default getStyles;
