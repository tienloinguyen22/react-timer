import React from 'react';

class TimerForm extends React.Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || '',
  };

  handleFormSubmit = () => {
    this.props.handleFormSubmit({
      id: this.props.id, 
      title: this.state.title, 
      project: this.state.project
    })
  };

  handleFormClose = () => {
    this.props.handleFormClose()
  };

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
  };

  handleProjectChange = (e) => {
    this.setState({project: e.target.value});
  };

  render() {
    let submitText = this.props.id ? 'Update' : 'Create';
    return (
      <div className='TimerForm border rounded mt-3'>
        <div className='title form-group mt-3 w-75 ml-auto mr-auto'>
          <lable className='font-weight-bold'>Title</lable>
          <input type='text' value={this.state.title} onChange={this.handleTitleChange} className='form-control' />
        </div>
        <div className='project form-group mt-3 w-75 ml-auto mr-auto'>
          <lable className='font-weight-bold'>Project</lable>
          <input type='text' value={this.state.project} onChange={this.handleProjectChange} className='form-control' />
        </div>
        <div className='buttons mt-3 mb-3 w-75 ml-auto mr-auto'>
          <button onClick={this.handleFormSubmit} className='btn btn-info w-50'>{submitText}</button>
          <button onClick={this.handleFormClose} className='btn btn-danger w-50'>Cancel</button>
        </div>
      </div>
    );
  }
}

export default TimerForm;