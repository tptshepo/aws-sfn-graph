import React from 'react'
import './css/graph-0.1.5.css'
import './css/state-machine-render.css'
import './lib/sfn-0.1.5'

class AWSSfnGraph extends React.Component {
  componentDidMount() {
    this.containerId = '#svgcontainer'
    this.graph = null
    this.hasRenderedOnce = false
    this.lastStateMachineData = null

    this.renderStateMachine = this.renderStateMachine.bind(this)

    this.handleCenter = this.handleCenter.bind(this)
    this.handleZoomIn = this.handleZoomIn.bind(this)
    this.handleZoomOut = this.handleZoomOut.bind(this)

    this.centerBtn = document.getElementById('center')
    this.zoominBtn = document.getElementById('zoomin')
    this.zoomoutBtn = document.getElementById('zoomout')

    this.centerBtn.addEventListener('click', this.handleCenter)
    this.zoominBtn.addEventListener('click', this.handleZoomIn)
    this.zoomoutBtn.addEventListener('click', this.handleZoomOut)

    if (this.props.data) {
      this.renderStateMachine(
        this.props.data,
        this.props.width,
        this.props.height
      )
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.renderStateMachine(
        this.props.data,
        this.props.width,
        this.props.height
      )
    }
  }

  componentWillUnmount() {
    this.centerBtn.removeEventListener('click', this.handleCenter)
    this.zoominBtn.removeEventListener('click', this.handleZoomIn)
    this.zoomoutBtn.removeEventListener('click', this.handleZoomOut)

    this.centerBtn = null
    this.zoominBtn = null
    this.zoomoutBtn = null
  }

  handleCenter(e) {
    if (this.lastStateMachineData) {
      this.renderStateMachine(
        this.lastStateMachineData,
        this.props.width,
        this.props.height
      )
    }
  }

  handleZoomIn(e) {
    if (this.graph) {
      this.graph.zoomIn()
    }
  }

  handleZoomOut(e) {
    if (this.graph) {
      this.graph.zoomOut()
    }
  }

  renderStateMachine(data, width = 200, height = 200) {
    const options = {
      width,
      height,
      resizeHeight: false
    }
    const json = typeof data === 'string' ? JSON.parse(data) : data
    this.graph = new globalThis.sfn.StateMachineGraph(
      json,
      this.containerId,
      options
    )
    this.graph.render()

    this.hasRenderedOnce = true
    this.lastStateMachineData = data
  }

  render() {
    return (
      <div>
        <div id='svgcontainer' className='workflowgraph'>
          <svg />
        </div>

        <div className='graph-buttons-container'>
          <button id='zoomin'>
            <svg
              focusable='false'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
            >
              <line x1='8' y1='1' x2='8' y2='15' />
              <line x1='15' y1='8' x2='1' y2='8' />
            </svg>
          </button>
          <button id='zoomout'>
            <svg
              focusable='false'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
            >
              <line x1='15' y1='8' x2='1' y2='8' />
            </svg>
          </button>
          <button id='center'>
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
}

AWSSfnGraph.displayName = 'AWSSfnGraph'

export default AWSSfnGraph
