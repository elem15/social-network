import React from 'react';

// type PropsTypeFC = {
//     state: any
// }
// type PropsType = {
//     state: {isToggleOn: boolean}
//     prevState: {isToggleOn: boolean}
//     isToggleOn: boolean
//
// }

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
        console.log('Отправлена форма.');
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

        // Эта привязка обязательна для работы `this` в колбэке.
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