import React, { useState, useEffect } from 'react';
import useAlarms from './src/use-alarms';
import useSound from './src/use-sound';
import ActiveAlarm from './src/active-alarm';
import Alarms from './src/alarms/alarms';

export default function App() {
	const { alarms, turnOffNotification, ...restAlarmsProps } = useAlarms();
	const [ currentAlarmId, setCurrentAlarmId ] = useState(null);
	const [ isAlarming, turnOff, time ] = useSound(currentAlarmId, alarms, turnOffNotification);

	return isAlarming ? (
		<ActiveAlarm turnOff={turnOff} time={time} />
	) : (
		<Alarms alarms={alarms} setCurrentAlarmId={setCurrentAlarmId} {...restAlarmsProps} />
	);
}
