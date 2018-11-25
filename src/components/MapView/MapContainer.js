import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { withRouter } from "react-router";
import Map from './Map';
import MapSeedList from './MapSeedList';
import './MapContainer.css';

import PropTypes from 'prop-types';
// import TextField from '@material-ui/core/TextField';
// import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
      // width: 300,
      padding: 10,
      backgroundColor: '#239956',
      margin: theme.spacing.unit,
  },
  paper: {
      width: 400,
      height: 400,
      borderRadius: 25,
      margin: "auto",
      marginTop: theme.spacing.unit * 10,
      backgroundColor: '#67C28F',
      border: '2px solid #01632C'
  },
  form: {
      textAlign: "center",
      padding: 15,
      marginTop: theme.spacing.unit * 4,
  },
  textField: {
      width: 300,
      borderRadius: 5,
      margin: theme.spacing.unit,
      backgroundColor: '#fff'
  },
  header: {
    color: '#fff', 
    fontWeight: 'bold', 
    backgroundColor: '#01632C', 
    margin: '0', 
    padding: '10px',
  },
  formControl: {
      width: 300,
      borderRadius: 5,
      margin: theme.spacing.unit,
      backgroundColor: '#fff'
  },
})


class MapContainer extends Component {

  state = {
    location: this.props.location,
    activeMarker: null,
    request: ''
  }
  
  componentDidMount() {
    console.log('MapContainer state', this.props.location);
  }

  requestBtn = (id) => {
    console.log('request button clicked', id);
    this.props.history.push('/requestseeds');
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
        <section style={{display: 'flex'}}>
          <Map
            location={this.props.location}
            // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBE58Bqi3Gp-oWwWISPHICoQVsuKnNPusg&v=3.exp&libraries=geometry,drawing,places`}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places`}

            loadingElement={ <div style={ { height: `100%` } } />}
            containerElement={ <div style={ { height: `600px`, width: `75%` } } />}
            mapElement={ <div style={ { height: `100%` } } />}
            activeMarker={this.state.activeMarker}
          />
          <div className="seedList">
            <MapSeedList />
          </div>
        </section>
      </div>
    );
  }
}

MapContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(withStyles(styles)(MapContainer));
