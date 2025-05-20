import { useState } from 'react'
import './A192.css'

function InputJack({ number }) {
	const [active, setActive] = useState(false)

	const mouseEnter = () => setActive(true)	
	const mouseLeave = () => setActive(false)

	return (
		<div
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseLeave}
			className={"jack " + (active ? 'active' : '')}
			/*className={{ jack: true, active }}*/
			title={`Input ${number}`}
		>
		</div>
	)
}

function A192() {
	return (
		<div className="panel">
			<h5>A-192</h5>
			<div className="jack-grid mb-3">
				{Array.from({ length: 16 }, (_, ndx) => (
					<InputJack number={ndx + 1} key={ndx} />
				))}
			</div>
		</div>
	)
}

export default A192