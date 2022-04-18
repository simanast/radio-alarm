import React, { useEffect } from 'react';

const getCurrentTime = () => {
	const currentDate = new Date();
	const hours = currentDate.getHours();
	const minutes = currentDate.getMinutes();
	const currentTimeInMinutes = hours * 60 + minutes;
	return currentTimeInMinutes;
};

const useSetAlarm = ({ id, isOn, time }, setCurrentAlarmId) => {
	useEffect(
		() => {
			const intervalId = setInterval(() => {
				if (!isOn) return;
				const currentTime = getCurrentTime();

				if (time === currentTime) {
					setCurrentAlarmId(id);
				}
			}, 1000);

			return () => clearInterval(intervalId);
		},
		[ isOn ]
	);
};

export default useSetAlarm;
