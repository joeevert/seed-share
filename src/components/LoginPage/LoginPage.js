import React, { Component } from 'react';
import { connect } from 'react-redux';

// material ui
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    width: '300px',
    padding: '10px',
    margin: theme.spacing.unit,
  },
  paper: {
    width: '350px',
    height: '350px',
    borderRadius: '25px',
    margin: "auto",
    marginTop: theme.spacing.unit * 10,
    padding: '35px',
    backgroundColor: '#67C28F',
    border: '2px solid #01632C',
  },
  form: {
    textAlign: "center",
    marginTop: '30px'
  },
  textField: {
    width: '300px',
    borderRadius: '5px',
    // margin: theme.spacing.unit,
    backgroundColor: '#fff'
  },
  avatar: {
    margin: "auto",
    backgroundColor: '#01632C'
  },
});


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}

        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <form className={classes.form} onSubmit={this.login}>
            <Typography 
              variant="h4"
              style={{color: '#fff', fontWeight: 'bold'}}
            >
              Log In
            </Typography>
            <TextField
              className={classes.textField}
              required
              id="username"
              label="Username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
              margin="normal"
              variant="outlined"
            />
            <TextField
              className={classes.textField}
              required
              id="password"
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
              margin="normal"
              variant="outlined"
            />
            <Button
              className={classes.button}
              type="submit"
              name="submit"
              variant="contained"
              style={{ backgroundColor: '#239956', color: '#fff' }}
            >
              Log In
            </Button>
          </form>
        </Paper>
        <div className="center">
          <Button
            className={classes.button}
            onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
          >
            Register
          </Button>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(withStyles(styles)(LoginPage));