import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        queryStatus: 'Узнать статус'
    }

    activateMode = () => {
        if (this.props.userId === 17889) {
        this.setState({
            editMode: true
        })}
    }

    setNewStatus = () => {
        return this.props.updateStatus(this.state.status)
    }

    inActivateMode = () => {
        this.setState({
            status: this.state.status
        });
        this.setState({
            editMode: false
        });
        if (this.props.userId === 17889) {
            this.setNewStatus();
        }
    }

    onStatusChange = (e) => {
        let text = e.currentTarget.value;
            this.setState({
                status: text
            })
        }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    {!this.state.status &&
                    <button onClick={this.activateMode}>{this.state.queryStatus}</button>}
                    {this.state.status &&
                    <button onClick={this.activateMode}>{this.state.status}</button>}
                </div>}
                {this.state.editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={this.inActivateMode}
                           onChange={this.onStatusChange}
                           value={this.state.status}
                    />
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;