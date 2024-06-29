import { useEffect, useState } from 'react'

export default function useDarkSide() {
	const [theme, setTheme] = useState(localStorage.theme)
  // dark
	const colorTheme = theme === 'dark' ? 'light' : 'dark'
  // light

	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove(colorTheme)
		root.classList.add(theme)

		localStorage.setItem('theme', theme)
	}, [theme, colorTheme])

	return [colorTheme, setTheme]
}
