import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import './MapContainer.css';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
      padding: 10,
      backgroundColor: '#239956',
      margin: theme.spacing.unit,
  },
  header: {
    color: '#fff', 
    fontWeight: 'bold', 
    backgroundColor: '#01632C', 
    margin: '0', 
    padding: '10px',
  },
  
})

class MapSeedList extends Component {

  state = {
    location: this.props.location,
    activeMarker: null,
    request: ''
  }
  
  requestBtn = (id) => {
    console.log('request button clicked', id);
    this.props.history.push('/requestseeds');
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div>
          <Typography
            className={classes.header} 
            variant="h6"
          >
            SEEDS AVAILABLE
          </Typography>
          <ul style={{textAlign: 'left'}}>
            {this.props.reduxState.allSeeds.map( item =>
              <li key={item.id}>
                <p>
                  <b>{item.category}:</b> {item.description}
                </p>
                <Button
                  className={classes.button}
                  onClick={() => this.requestBtn(item.id)}
                  style={{ backgroundColor: '#239956', color: '#fff' }}
                >
                  REQUEST
                </Button>
              </li>)}
          </ul>
      </div>
    );
  }
}

MapSeedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({ reduxState });

export default connect(mapStateToProps)(withStyles(styles)(withRouter(MapSeedList)));
