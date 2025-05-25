import EventMap from './lib/PocketC/EventMap.ts'
import ParamMap from './lib/PocketC/ParamMap.ts'

const ControlSettings = function ({ controlNumber }) {
	return (
		<form>
			<div className="mb-3">
				<label htmlFor="number" className="form-label">Control Number</label>
				<input className="form-control" type="text" value={controlNumber} />
			</div>

			<div className="mb-3">
				<label htmlFor="channel" className="form-label">Channel</label>
				<input id="channel"
					type="number"
					className="form-control"
					min="1" max="16" step="1"
				/>
			</div>

			<div className="mb-3">
				<label htmlFor="event" className="">Event</label>
				<select id="event" className="form-control">
					{Object.entries(EventMap).map(([k, v]) => (
						<option key={k} value={k}>{`${k}: ${v}`}</option>
					))}
				</select>
			</div>

			<div className="mb-3">
				<label htmlFor="event" className="">Parameter</label>
				<select id="param" className="form-control">
					{Object.entries(EventMap).map(([k, v]) => (
						<option key={k} value={k}>{`${k}: ${v}`}</option>
					))}
				</select>
			</div>
		</form>
	)
}

export default ControlSettings