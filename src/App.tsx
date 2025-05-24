import { useState } from 'react'
import './App.css'

import A192 from './A192.tsx'
import ControlSettings from './ControlSettings.tsx'

const App = function() {
  const [controlNumber, setControlNumber] = useState(1)

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
