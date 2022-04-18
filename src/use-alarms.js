import { useState } from 'react';

const useAlarms = () => {
	const [ alarms, setAlarms ] = useState(
		[
			// { id: 0, time: 50, isOn: false, isDeleteMode: false, radioUrl: null, isNotification: false }
			// { id: 1, time: 50, isOn: false, isDeleteMode: false, radioUrl: null, isNotification }
		]
	);

	const getToggleAlarm = (index) => () =>
		setAlarms((state) => {
			const copiedAlarm = { ...state[index] };
			const updatedAlarm = { ...copiedAlarm, isOn: !copiedAlarm.isOn };
			return [ ...state.slice(0, index), updatedAlarm, ...state.slice(index + 1) ];
		});

	const getTurnOnNotification = (index) => () =>
		setAlarms((state) => {
			const copiedAlarm = { ...state[index] };
			const updatedAlarm = { ...copiedAlarm, isOn: true };
			return [ ...state.slice(0, index), updatedAlarm, ...state.slice(index + 1) ];
		});

	const turnOffNotification = (currentId) =>
		setAlarms((state) => {
			const index = alarms.findIndex(({ id }) => currentId === id);
			const copiedAlarm = { ...state[index] };
			const updatedAlarm = { ...copiedAlarm, isOn: false };
			return [ ...state.slice(0, index), updatedAlarm, ...state.slice(index + 1) ];
		});

	const getToDeleteMode = (index) => () =>
		setAlarms((state) => {
			const copiedAlarm = { ...state[index] };
			const updatedAlarm = { ...copiedAlarm, isDeleteMode: true };
			return [ ...state.slice(0, index), updatedAlarm, ...state.slice(index + 1) ];
		});

	const addAlarm = ({ time = 60, radioUrl }) => {
		setAlarms((state) => [
			...state,
			{ id: state.length, time, radioUrl, isOn: false, isDeleteMode: false, isNotification: false }
		]);
	};

	const cancelDeletion = () => setAlarms((state) => state.map((alarm) => ({ ...alarm, isDeleteMode: false })));

	const deleteAlarms = () => setAlarms((state) => state.filter(({ isDeleteMode }) => !isDeleteMode));

	return {
		alarms,
		getToggleAlarm,
		addAlarm,
		getToDeleteMode,
		cancelDeletion,
		deleteAlarms,
		getTurnOnNotification,
		turnOffNotification
	};
};

export default useAlarms;
