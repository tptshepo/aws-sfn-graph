import React, { useEffect } from 'react'
import './css/graph-0.1.5.css'
import './css/state-machine-render.css'
import './lib/sfn-0.1.5'

const AWSSfnGraph = (props) => {
  const { data, width, height } = props

  const containerId = '#svgcontainer'
  let graph = null

  useEffect(() => {
    if (data) {
      renderStateMachine(data, width, height)
    }
  }, [data])

  const handleCenter = (e) => {
    // if (lastStateMachineData) {
    renderStateMachine(data, width, height)
    // }
  }

  const handleZoomIn = (e) => {
    if (graph) {
      graph.zoomIn()
    }
  }

  const handleZoomOut = (e) => {
    if (graph) {
      graph.zoomOut()
    }
  }

  const renderStateMachine = (data, width = 200, height = 200) => {
    const options = {
      width,
      height,
      resizeHeight: false
    }
    const json = typeof data === 'string' ? JSON.parse(data) : data
    graph = new globalThis.sfn.StateMachineGraph(json, containerId, options)
    graph.render()
  }

  return (
    <div className='workflowgraph'>
      <div id='svgcontainer'>
        <svg />
      </div>

      <div className='graph-buttons-container'>
        <button onClick={handleZoomIn}>
          <svg
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
          >
            <line x1='8' y1='1' x2='8' y2='15' />
            <line x1='15' y1='8' x2='1' y2='8' />
          </svg>
        </button>
        <button onClick={handleZoomOut}>
          <svg
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
          >
            <line x1='15' y1='8' x2='1' y2='8' />
          </svg>
        </button>
        <button onClick={handleCenter}>
          <svg
            focusable='false'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
          >
            <circle cx='8' cy='8' r='7' strokeWidth='2' />
            <circle cx='8' cy='8' r='1' strokeWidth='2' />
          </svg>
        </button>
      </div>
    </div>
  )
}

AWSSfnGraph.displayName = 'AWSSfnGraph'

export default AWSSfnGraph
