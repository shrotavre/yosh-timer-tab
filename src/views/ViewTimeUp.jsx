import React, {Component} from 'react'
import PropTypes from 'prop-types';

import Page from 'components/Page'
import ButtonRack from 'components/ButtonRack'
import Button from 'components/Button'

import TimeUpIcon from 'components/TimeUpIcon'
import SoundPlayer from 'components/SoundPlayer'

import 'styles/View.css'

class ViewTimeUp extends Component {
  render(){
    return (
      <div className="ViewTimeUp View">
        <SoundPlayer/>
        <Page>
          <TimeUpIcon/>
          <ButtonRack>
            <Button color="black" label="DISMISS" onClick={()=>this.props.onStop()}/>
          </ButtonRack>
        </Page>
      </div>
    )
  }
}

ViewTimeUp.propTypes = {
  onStop: PropTypes.func.isRequired
}

export default ViewTimeUp;
