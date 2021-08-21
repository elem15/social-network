import React from 'react';

const Settings = () => {
    return (                 
        <div>
          Settings
            <Form/>
            <Toggle />
        </div>

    )
}
function Form() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert('Отправлена форма.');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Отправить</button>
        </form>
    );
}

interface IProps {
}

interface IState {
    isToggleOn?: boolean;
}

class Toggle extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Включено' : 'Выключено'}
            </button>
        );
    }
}
export default Settings;