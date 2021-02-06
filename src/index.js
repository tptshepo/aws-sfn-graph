import React, { useEffect, useRef, useState } from 'react'
import './css/graph-0.1.5.css'
import './css/state-machine-render.css'
import './lib/sfn-0.1.5'

const aslError = {
  Comment: 'Error state',
  StartAt: 'Error found in state definition',
  States: {
    'Error found in state definition': {
      Type: 'Pass',
      Result: 'World',
      End: true
    }
  }
}

const aslTypeError = {
  Comment: 'Error state',
  StartAt: 'Type error found in state definition',
  States: {
    'Type error found in state definition': {
      Type: 'Pass',
      Result: 'World',
      End: true
    }
  }
}

const aslEmpty = {
  Comment: 'Error state',
  StartAt: 'State definition not found',
  States: {
    'State definition not found': {
      Type: 'Pass',
      Result: 'World',
      End: true
    }
  }
}

const AWSSfnGraph = (props) => {
  const { data, width, height, onError, hideToolbar = false } = props

  const containerId = useRef()
  const [graph, setGraph] = useState(null)

  useEffect(() => {
    renderStateMachine(data)
  }, [data, width, height])

  const handleCenter = (e) => {
    e.preventDefault()
    renderStateMachine(data)
  }

  const handleZoomIn = (e) => {
    e.preventDefault()
    if (graph) {
      graph.zoomIn()
    }
  }

  const handleZoomOut = (e) => {
    e.preventDefault()
    if (graph) {
      graph.zoomOut()
    }
  }

  const renderStateMachine = (renderData, errorRender = false) => {
    try {
      const options = {
        width,
        height,
        resizeHeight: false,
        hideTooltip: true
      }
      let json
      // console.log('renderData type:', typeof renderData)
      // console.log('renderData data:', renderData)

      if (!renderData) {
        renderStateMachine(aslEmpty, true)
        return
      }

      if (typeof renderData === 'string') {
        if (renderData.trim().length === 0) {
          renderStateMachine(aslEmpty, true)
          return
        }
        json = JSON.parse(renderData)
      } else if (typeof renderData === 'object') {
        json = renderData
      } else {
        renderStateMachine(aslTypeError, true)
        return
      }

      const sfnGraph = new globalThis.sfn.StateMachineGraph(
        json,
        containerId.current,
        options
      )
      setGraph(sfnGraph)
      sfnGraph.render()
    } catch (e) {
      if (onError) {
        onError(e)
      }
      if (!errorRender) {
        renderStateMachine(aslError, true)
      }
    }
  }

  return (
    <div className='workflowgraph'>
      <div ref={containerId} style={{ flexGrow: 1, padding: 0 }}>
        <svg />
      </div>
      {hideToolbar ? (
        <div />
      ) : (
        <div className='graph-buttons-container'>
          <button onClick={handleCenter}>
            <svg
              focusable='false'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
            >
              <polyline points='10 5 15 5 15 0' />
              <path d='M15,8a6.95692,6.95692,0,0,1-7,7A6.95692,6.95692,0,0,1,1,8,6.95692,6.95692,0,0,1,8,1a6.86937,6.86937,0,0,1,6.3,4' />
            </svg>
          </button>
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
      )}
    </div>
  )
}

AWSSfnGraph.displayName = 'AWSSfnGraph'

export default AWSSfnGraph
