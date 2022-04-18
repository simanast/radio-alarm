export const getTextValue = (unit) => (String(unit).length === 1 ? `0${unit}` : unit);
