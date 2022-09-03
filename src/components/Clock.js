import React from 'react';

class Clock extends React.Component{

  state = {date: new Date(), locale: 'bn-BD'};

  componentDidMount(){
    this.clockTimer = setInterval(() => this.tik(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  handleButton = () => {
    console.log('Button has been clicked...' + this.state.locale);
    this.setState({
      locale: 'eng-US'
    });
  }

  tik(){
    this.setState({
      date: new Date()
    });
  }
  
    render() {
      const {date, locale} = this.state;
      return (
        <div>
          <h1 className='heading'>
          <span className='text'>
            Hello {
              date.toLocaleTimeString(locale)
            }
          </span>
        </h1>
        <button onClick={this.handleButton}>Change</button>
        </div>

      );
    }
}

export default Clock;




/* fuctional Component

function clock() {
  return (
    <h1 className='heading'>
      <span className='text'>
        Hello {
          new Date().toLocaleTimeString()
        }
      </span>
    </h1>
  );
}

ReactDom.render(clock(), document.getElementById('root'));

*/

/* Class component

class Clock{
  display() {
    return (
      <h1 className='heading'>
        <span className='text'>
          Hello {
            new Date().toLocaleTimeString()
          }
        </span>
      </h1>
    );
  }
}

const clockDisplay = new Clock();
ReactDom.render(clockDisplay.display(), document.getElementById('root'));

*/