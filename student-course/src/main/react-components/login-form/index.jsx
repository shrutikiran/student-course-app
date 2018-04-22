import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentId: "",
      errorMsg: (window.location.search != null && window.location.search.length > 0) ? "Invalid ID" : "",
      disableEnter: true
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    let _studentId = e.target.value;
    let _disableEnter = (!_studentId || _studentId.length <= 0) ? true : false;
	let _errMsg = _disableEnter;

    this.setState({
      studentId: _studentId,
      disableEnter: _disableEnter,
      errorMsg: _errMsg
    });
  }

  handleEnter(e) {
  }

  render() {
    return (
		<form id="login-form" className="flex-column content-center align-center" action="login" onSubmit={this.handleEnter} method="post">
			<input id="student-id-input" autoFocus={true} type="text" value={this.state.studentId} onChange={this.handleInput} placeholder="Student ID (Ex: 123)" name="studentId"></input>

			<button id="enter-button" type="submit" disabled={this.state.disableEnter}>Enter</button>

			{this.state.errorMsg &&
				<span id="error-msg">{this.state.errorMsg}</span>
			}
		</form>
    );
  }
}

setTimeout(() => {
	ReactDOM.render(<LoginForm />, document.querySelector('#login-form-container'));
}, 0);
