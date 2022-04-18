import { useEffect, useRef, useState } from 'react';
import { Audio } from 'expo-av';

const useSound = (id, alarms, turnOffNotification) => {
	const [ isAlarming, setIsAlarming ] = useState(false);
	const currentAlarmIndex = alarms.findIndex(({ id: alarmId }) => alarmId === id);
	const { isOn, radioUrl, time } = alarms[currentAlarmIndex] || { isOn: false };
	const soundRef = useRef();

	const turnOff = () => {
		turnOffNotification(id);
		setIsAlarming(false);
	};

	const playSound = async () => {
		const { sound } = await Audio.Sound.createAsync({
			uri: radioUrl
		});

		soundRef.current = sound;
		await soundRef.current.playAsync();
	};

	useEffect(
		() => {
			if (id === null) return;

			if (isOn && !isAlarming) {
				playSound();
				setIsAlarming(true);
			}

			if (!isOn && soundRef.current) {
				soundRef.current.unloadAsync();
				setIsAlarming(false);
				soundRef.current = null;
			}

			return () => {
				if (soundRef.current) {
					soundRef.current.unloadAsync();
					setIsAlarming(false);
					soundRef.current = null;
				}
			};
		},
		[ id, isOn, isAlarming ]
	);

	return [ isAlarming, turnOff, time ];
};

export default useSound;
