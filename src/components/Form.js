import React from 'react';

class Form extends React.Component {
    state = {
        title : '',
        body : ''
    }

    handleFormInput = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        });
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.title);
    }

    render(){
        const {title, body} = this.state;
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                <input name='title' placeholder='enter title' onChange={this.handleFormInput} value={title}/>
                <p>{title}</p>
                <br />
                <textarea name='body' value={body} onChange={this.handleFormInput}></textarea>
                <p>{body}</p>
                <br />
                <input type="submit" value='Submit'/>
                </form>
            </div>
        );
    }
}

export default Form;