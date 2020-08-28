import React from 'react'

const STATUS = {
  NORMAL: 'normal',
  HOVER: 'hover'    
}

class Link extends React.Component {
  state = {
    class: STATUS.NORMAL
  }

  render() {
    return (
      <a
        href={this.props.page || '#'}
        className={this.state.class}
        onMouseEnter={() => this.setState({class: STATUS.HOVER})}
        onMouseLeave={() => this.setState({class: STATUS.NORMAL})}
      >
        Learn React
      </a>
    )
  }
}
export default Link