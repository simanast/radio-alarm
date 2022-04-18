import React, { useState } from 'react';

const useDatePicker = () => {
	const [ isDatePicker, setIsDatePicker ] = useState(false);

	const openDatePicker = () => setIsDatePicker(true);
	const closeDatePicker = () => setIsDatePicker(false);

	const actions = { openDatePicker, closeDatePicker };

	return [ isDatePicker, actions ];
};

export default useDatePicker;
