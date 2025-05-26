import { useState } from 'react'
import './App.css'

import A192 from './A192.tsx'
import ControlSettings from './ControlSettings.tsx'

interface ControlConfig {
  [index: number]: {
    number: number,
    channel: number,
    event: string,
    param: string
  }
}

const App = function() {
  const [controlNumber, setControlNumber] = useState(1)

  // TODO knob configs
  const [controlConfig, setControlConfig] = useState([
    { number: 1, channel: 0, event: 0, param: 1 },
  ])

  const updateConfig = (controlNumber: number, key: number, value: number) => {
    const cfg = structuredClone(controlConfig)

    cfg.find((c) => c.number == controlNumber)[key] = value
    //cfg[controlNumber][key] = value

    setControlConfig(cfg)
  }
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
