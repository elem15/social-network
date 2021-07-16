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
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Отправлена форма.');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Отправить</button>
        </form>
    );
}
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
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