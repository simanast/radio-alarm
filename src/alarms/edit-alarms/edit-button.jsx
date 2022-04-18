import React from 'react';
import AddAlarmButton from './add-alarm-button';
import DeleteAlarmButton from './delete-alarm-button';

const EditButton = ({ deleteAlarms, openAddAlarm, isDeleteMode }) => {
	return isDeleteMode ? (
		<DeleteAlarmButton deleteAlarms={deleteAlarms} />
	) : (
		<AddAlarmButton openAddAlarm={openAddAlarm} />
	);
};

export default EditButton;
