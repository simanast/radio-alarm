import React, { useState } from 'react';
import { getTextValue } from './utils';

const useDate = ({ closeDatePicker }) => {
	const [ date, setDate ] = useState(new Date());

	const hours = getTextValue(date.getHours());
	const mins = getTextValue(date.getMinutes());

	const handleDataPickerChange = (event, value) => {
		setDate(value || date);
		closeDatePicker();
	};

	return [ { hours, mins, date }, handleDataPickerChange ];
};

export default useDate;
