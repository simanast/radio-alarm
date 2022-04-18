import React, { useState } from 'react';
import AddAlarm from './add-alarm/add-alarm';
import EditAlarms from './edit-alarms/edit-alarms';

const Alarms = (alarmsProps) => {
	const [ isAddAlarm, setIsAddAlarm ] = useState(false);
	const openAddAlarm = () => setIsAddAlarm(true);
	const closeAddAlarm = () => setIsAddAlarm(false);

	return isAddAlarm ? (
		<AddAlarm closeAddAlarm={closeAddAlarm} {...alarmsProps} />
	) : (
		<EditAlarms openAddAlarm={openAddAlarm} {...alarmsProps} />
	);
};

export default Alarms;
