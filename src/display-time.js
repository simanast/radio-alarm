const getHours = (minutes) => Math.floor(minutes / 60);
const getMinutes = (minutes) => minutes % 60;
const getTextValue = (unit) => (String(unit).length === 1 ? `0${unit}` : unit);

const displayTime = (minutesToConvert) => {
	const hours = getHours(minutesToConvert);
	const minutes = getMinutes(minutesToConvert);

	const textHours = getTextValue(hours);
	const textMinutes = getTextValue(minutes);

	return `${textHours}:${textMinutes}`;
};

export default displayTime;
