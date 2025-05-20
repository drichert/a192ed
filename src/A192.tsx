import { useState } from 'react'
import './A192.css'

interface InputJackProps {
	number: number
}

const InputJack: React.FC<InputJackProps> = ({ number }) => {
	const [active, setActive] = useState(false)

	const mouseEnter = () => setActive(true)	
	const mouseLeave = () => setActive(false)

	return (
		<div
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseLeave}
			className={"my-auto jack " + (active ? 'active' : '')}
			/*className={{ jack: true, active }}*/
			title={`Input ${number}`}
		>{number}</div>
	)
}

function A192() {
	return (
		<div className="panel">
			<h5>A-192</h5>
			<div className="jack-grid mb-3">
					{Array.from({ length: 8 }, (_, ndx: number) => (
						<>
						<InputJack number={ndx + 1} key={ndx} />
						<InputJack number={ndx + 9} key={ndx+8} />
						</>
					))}
				{/*
				<div className="row">
					{Array.from({ length: 8 }, (_, ndx: number) => (
						<InputJack number={ndx + 9} key={ndx + 9} />
					))}
				</div>
				*/}
			</div>
		</div>
	)
}

export default A192