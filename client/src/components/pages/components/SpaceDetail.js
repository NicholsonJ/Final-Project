import React, { Component } from 'react';
import { Button } from 'reactstrap';
import AddPicture from './AddPicture';
import api from '../../../api';

class SpaceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addpic: false
    };
  }

  handleClick(e, s) {
    console.log('handleclick: ', this.state.addpic);
    this.setState({
      addpic: true
    });
  }

  changeState(e) {
    console.log('addpic:', this.state.addpic);
    this.setState({
      addpic: false
    });
  }

  render() {
    console.log(this.props.space.name);
    console.log(this.state.addpic);
    if (this.state.addpic) {
      return <AddPicture space={this.props.space} newstate={e => this.changeState(e)} />;
    }

    return (
      <div className="spaceDetail">
        <h2>{this.props.space.name}</h2>
        <hr />
        <p>{this.props.space.address} </p>
        <p>{this.props.space.website}</p>
        <p>{this.props.space.description} </p>
        {this.props.space.price && <div>There is a charge for this space</div>}
        Available amenitities:
        {this.props.space.drum && <div>Drum Kit</div>}
        {this.props.space.piano && <div>Piano</div>}
        <br />
        <hr />
        {api.isLoggedIn() && (
          <div>
            <Button
              space={this.props.space}
              onClick={e => {
                this.handleClick(e);
              }}
              color="success"
            >
              Add a comment
            </Button>
            <Button
              space={this.props.space}
              onClick={e => {
                this.handleClick(e);
              }}
              color="success"
              outline
              style={{ marginTop: '10px' }}
            >
              Add More Photos
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default SpaceDetail;
