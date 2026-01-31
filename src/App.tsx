import { Component } from 'react';

type State = {
  key: string;
};

export class App extends Component<State> {
  state: State = {
    key: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        {this.state.key === '' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">
            {`The last pressed key is [${this.state.key}]`}
          </p>
        )}
      </div>
    );
  }
}
