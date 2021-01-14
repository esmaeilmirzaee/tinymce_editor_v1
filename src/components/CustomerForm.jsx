import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CustomerForm extends React.Component {
  renderInput(formProps) {
    return (
      <div className='ui field'>
        <input {...formProps.input} autoComplete='off' />;
      </div>
    );
  }

  onSubmit(formValues) {
    if (localStorage.getItem('state') === null) {
      // ignore for now
    }
    const serialisedState = JSON.stringify(formValues);
    localStorage.setItem('state', serialisedState);
  }

  render() {
    return (
      <form
        className='ui form'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <div>
          <Field
            className='ui input'
            name='email'
            component='input'
            type='text'
            label='Email'
          />
        </div>
        <button className='ui primary button' type='submit'>
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) {
    errors.name = 'required';
  }

  return errors;
};

export default reduxForm({ form: 'customerForm' })(CustomerForm);
