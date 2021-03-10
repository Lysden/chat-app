import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        online: this.props.online
    }
  }

  render() {
    const getStatus = this.state.online ? "online" : "offline";

    const setStatus = (e) => {
      const newOnline = !this.state.online;
      this.setState({ online: newOnline });
    }

    return (
      <div className="Contact">
        <img src={this.props.avatar} alt={this.props.name} className="avatar" />
        <div>
          <div className="name">{this.props.name}</div>
          <div className="status" onClick={setStatus}>
            <span className={"status-" + getStatus} />
            <span className="status-text">{getStatus}</span>
          </div>
        </div>
      </div>
    );
  }
}

// Specifies the default values for props:
Contact.defaultProps = {
  avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/abf3094e-971d-4be5-899b-b50a0e6290cb/da3ejq1-a03dbbf8-5cd1-4a3d-8126-bba42232ac88.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWJmMzA5NGUtOTcxZC00YmU1LTg5OWItYjUwYTBlNjI5MGNiXC9kYTNlanExLWEwM2RiYmY4LTVjZDEtNGEzZC04MTI2LWJiYTQyMjMyYWM4OC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.8M1Smkke2cctcrHYBiCKMuxjQD4M6GqWukDPs_MoxPg',
  name: 'Grodo Do'
};

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool
};

export default Contact;
