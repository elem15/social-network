import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: null
    }

    activateMode() {
        this.setState({
            editMode: true
        })
    }

    inActivateMode() {
        this.setState({
            editMode: false
        })
    }

    onStatusChange = (e) => {
        let text = e.target.value;
        this.setState({
            title: text
        })
    }


    render() {
        return (
            <div>
                <div>Новый статус</div>
                {!this.state.editMode &&
                <div>
                    <button onClick={this.activateMode.bind(this)}>{this.state.title}</button>
                </div>}
                {this.state.editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={this.inActivateMode.bind(this)}
                           defaultValue={this.props.status}
                           onChange={this.onStatusChange.bind(this)}
                           value={this.state.title}
                    />
                </div>}
            </div>
        );
    }
}

export default ProfileStatus;