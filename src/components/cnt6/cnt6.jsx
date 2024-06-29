import { useState } from 'react'

const Cnt6 = () => {
	let [cnt, setCnt] = useState(0)
	let [status, setStatus] = useState(null)
  console.log('component 6 kor kard')

	return (
		<div
			style={{
				backgroundColor: 'green',
				width: '200px',
				height: '200px',
				padding: '50px',
				fontSize: '32px',
			}}
		>
			<p
				style={
					status === true
						? { color: 'green' }
						: status === false
						? { color: 'red' }
						: { color: 'black' }
				}
			>
				{cnt}
			</p>
			<button
				onClick={() => {
					setCnt(cnt + 1), setStatus(true)
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					setCnt(cnt - 1), setStatus(false)
				}}
			>
				-
			</button>
			<button
				onClick={() => {
					setStatus(null), setCnt(0)
				}}
			>
				reset
			</button>
		</div>
	)
}

export default Cnt6
