import React, { useState } from 'react';

const useHandleAdd = ({ date, addAlarm, closeAddAlarm }) => {
	const [ radioUrl, setRadioUrl ] = useState();

	const handleAdd = () => {
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const timeInMinutes = hours * 60 + minutes;
		addAlarm({ time: timeInMinutes, radioUrl });
		closeAddAlarm();
	};

	const handleRadioButtonChange = (value) => setRadioUrl(value.url);

	return [ handleAdd, handleRadioButtonChange ];
};

export default useHandleAdd;
