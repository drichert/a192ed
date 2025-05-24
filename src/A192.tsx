//import { useState } from 'react'
import './A192.css'

interface InputJackProps {
	number: number,
	onSelectControl: (num: number) => void
}

const InputJack: React.FC<InputJackProps> = ({ number, onSelectControl }) => {
	let controlNum: number
	let active 

	const onClick = (event) => {
		document.querySelectorAll('.jack').forEach((el: Element) => {
			el.classList.remove('active')	
		})

		controlNum = event.target.dataset.num
		onSelectControl(controlNum)

		event.target.classList.add('active')
	}

	return (
		<div
			onClick={onClick}
			className={"my-auto jack " + (active ? 'active' : '')}
			title={`Input ${number}`}
			data-num={number}
		>{number}</div>
	)
}

interface A192Props {
	onSelectControl: (num: number) => void
}

//const InputJack: React.FC<InputJackProps> = ({ number, onSelectControl }) => {
const A192: React.FC<A192Props> = ({ onSelectControl }) => {
	return (
		<div className="panel">
			<h5>A-192</h5>
			<div className="jack-grid mb-3">
				{Array.from({ length: 8 }, (_, ndx: number) => (
					<>
					<InputJack number={ndx + 1} key={ndx} onSelectControl={onSelectControl} />
					<InputJack number={ndx + 9} key={ndx + 8} onSelectControl={onSelectControl} />
					</>
				))}
			</div>
		</div>
	)
}

export default A192