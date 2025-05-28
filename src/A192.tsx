import React from 'react';
import type { MouseEvent } from 'react';
import './A192.css'

interface InputJackProps {
	number: number,
	onSelectControl: (num: number) => void
}

const InputJack: React.FC<InputJackProps> = ({ number, onSelectControl }) => {
	const onClick = (event: MouseEvent<HTMLElement>) => {
		const { target } = event

		document.querySelectorAll('.jack').forEach((el: Element) => {
			el.classList.remove('active')	
		})

		//let controlNum: number

		if (target instanceof HTMLElement) {
			console.log(target.dataset.num)
			//controlNum = Math.floor(Number(target.dataset.num))
			onSelectControl(number)

			target.classList.add('active')
		}
	}

	return (
		<div onClick={onClick} className="my-auto jack" title={`Input ${number}`}>{number}</div>
	)
}

interface A192Props {
	onSelectControl: (num: number) => void
}

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