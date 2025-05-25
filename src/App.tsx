import { useState } from 'react'
import './App.css'

import A192 from './A192.tsx'
import ControlSettings from './ControlSettings.tsx'

interface ControlConfig {
  [key: number]: {
    channel: number,
    event: string,
    param: string
  }
}

const App = function() {
  const [controlNumber, setControlNumber] = useState(1)
  // TODO knob configs
  const [controlConfig, setControlConfig] = useState({})

	return (
		<div className="container">
      <div className="row">
        <div className="col">
          <A192 onSelectControl={setControlNumber} />
        </div>
        <div className="col">
          <ControlSettings controlNumber={controlNumber} />
        </div>
      </div>
		</div>
	)
}

export default App
