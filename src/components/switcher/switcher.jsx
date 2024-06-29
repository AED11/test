import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkSide from '../../hook/useDarkSide'

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide()
	const [darkSide, setDarkSide] = useState(
		colorTheme === 'light' ? true : false
	)

	const toggleDarkMode = checked => {
		setTheme(colorTheme)
		setDarkSide(checked)
	}

  const defaultProperties = {
		dark: {
			circle: {
				r: 9,
			},
			mask: {
				cx: '45%',
				cy: '25%',
			},
			svg: {
				transform: 'rotate(420deg)',
			},
			lines: {
				opacity: 0,
			},
		},
		light: {
			circle: {
				r: 3,
			},
			mask: {
				cx: '100%',
				cy: '0%',
			},
			svg: {
				transform: 'rotate(1000deg)',
				circle: {
					// r: 10,
				},
			},
			lines: {
				opacity: 1,
			},
		},
		springConfig: { mass: 100, tension: 500, friction: 35 },
	}


	return (
		<>
			<div>
				<DarkModeSwitch
					size={50}
          animationProperties={defaultProperties}
					sunColor='yellow'
					moonColor='#3686A0 '
					checked={darkSide}
					onChange={toggleDarkMode}
				/>
			</div>
		</>
	)
}
