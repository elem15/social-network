import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        queryStatus: 'Узнать статус'
    }

    activateMode = () => {
        if (this.props.userId === this.props.id) {
        this.setState({
            editMode: true
        })}
    }

    setNewStatus = () => {
        return this.props.updateStatus(this.state.status)
    }

    inActivateMode = () => {
        if (this.props.userId === this.props.id) {
        this.setState({
            status: this.state.status
        });
        this.setState({
            editMode: false
        });
        this.setNewStatus();
        }
    }

    onStatusChange = (e) => {
        let text = e.currentTarget.value;
            this.setState({
                status: text
            })
        }

    componentDidUpdate(prevProps, prevState, snapshot)  {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
       
        return (
            <div>
                <div>status:</div>
                {!this.state.editMode &&
                <div>
                    <button disabled={this.props.userId !== this.props.id} onClick={this.activateMode}>{this.state.status}</button>
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