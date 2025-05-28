import { useState } from 'react'
import './App.css'

import A192 from './A192.tsx'
import ControlSettings from './ControlSettings.tsx'

interface ControlConfig {
    number: number,
    channel: number,
    event: number,
    param: number
}
interface ControlConfigs {
  c1: ControlConfig,
  c2: ControlConfig,
  c3: ControlConfig,
  c4: ControlConfig,
  c5: ControlConfig,
  c6: ControlConfig,
  c7: ControlConfig,
  c8: ControlConfig,
  c9: ControlConfig,
  c10: ControlConfig,
  c11: ControlConfig,
  c12: ControlConfig,
  c13: ControlConfig,
  c14: ControlConfig,
  c15: ControlConfig,
  c16: ControlConfig,
}

const App = function() {
  const [controlNumber, setControlNumber] = useState(1)

  const initControlConfig: ControlConfigs = {
    c1: { number: 1, channel: 0, event: 0, param: 0 },
    c2: { number: 2, channel: 0, event: 0, param: 0 },
    c3: { number: 3, channel: 0, event: 0, param: 0 },
    c4: { number: 4, channel: 0, event: 0, param: 0 },
    c5: { number: 5, channel: 0, event: 0, param: 0 },
    c6: { number: 6, channel: 0, event: 0, param: 0 },
    c7: { number: 7, channel: 0, event: 0, param: 0 },
    c8: { number: 8, channel: 0, event: 0, param: 0 },
    c9: { number: 9, channel: 0, event: 0, param: 0 },
    c10: { number: 10, channel: 0, event: 0, param: 0 },
    c11: { number: 11, channel: 0, event: 0, param: 0 },
    c12: { number: 12, channel: 0, event: 0, param: 0 },
    c13: { number: 13, channel: 0, event: 0, param: 0 },
    c14: { number: 14, channel: 0, event: 0, param: 0 },
    c15: { number: 15, channel: 0, event: 0, param: 0 },
    c16: { number: 16, channel: 0, event: 0, param: 0 },
  }

  // TODO knob configs
  const [controlConfig, setControlConfig] = useState(initControlConfig)

  const updateControlConfigs = (cc: ControlConfig) => {
    const cfg = structuredClone(controlConfig)

    Object.assign(cfg[`c#{cc.number}`], cc)

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
