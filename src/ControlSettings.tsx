import ParamMap from './lib/PocketC/ParamMap.ts'

const ControlSettings = function ({ controlNumber }) {
	return (
		<form>
			<div className="form-group">
				<label htmlFor="number">Control Number</label>
				<input type="text" value={controlNumber} />
			</div>

			<div className="form-group">
				<label htmlFor="channel">Channel</label>
				<input id="channel"
					type="number"
					className="form-control"
					min="1" max="16" step="1"
				/>
			</div>

			<div className="form-group">
				<label htmlFor="param">Parameter</label>
				<select id="param">
					{Object.entries(ParamMap).map(([k, v]) => (
						<option key={k} value={k}>{`${k}: ${v}`}</option>
					))}
				</select>
			</div>
		</form>
	)
}

export default ControlSettings