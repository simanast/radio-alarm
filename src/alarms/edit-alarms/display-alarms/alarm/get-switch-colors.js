const getSwitchColors = (isOn) => {
	const trackColors = { false: '#b6b6b6', true: '#a2c4ff' };
	const thumbColor = isOn ? '#488bfd' : '#f4f3f4';

	return { trackColors, thumbColor };
};

export default getSwitchColors;
