import { useState } from 'react'

const Cnt1 = () => {
	let [cnt, setCnt] = useState(0)
	let [status, setStatus] = useState(null)
  console.log('component 1 kor kard')

	return (
		<div style={{backgroundColor: "red", width: '400px', padding: '10px', fontSize: '32px'}}>
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

export default Cnt1
