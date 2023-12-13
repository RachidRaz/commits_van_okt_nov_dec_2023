import React, { ChangeEvent, FC } from 'react';

// Define the possible values for prop in the onChangeValue function
export type LoginOrSignupFormProps = 'username' | 'password' | 'confirmPassword';

// Define the props for the Signup component
type Props = {
  onChangeValue: (prop: LoginOrSignupFormProps, value: string) => void;
  onToggleSignup: () => void;
};

// Define the Signup functional component
const Signup: FC<Props> = ({ onChangeValue, onToggleSignup }) => {
  // Handle input changes and trim the input value
  const handleInputChange = (
    prop: LoginOrSignupFormProps,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    onChangeValue(prop, e.target.value.trim());
  };

  return (
    <div className='row g-3'>
      {/* Username Input */}
      <div className='col-12 required'>
        <label htmlFor='username' className='form-label'>
          Username
        </label>
        <input
          id='username'
          type='text'
          name='username'
          className='form-control'
          placeholder='Username'
          maxLength={20}
          onChange={(e) => handleInputChange('username', e)}
        />
      </div>

      {/* Password Input */}
      <div className='col-12 required'>
        <label htmlFor='password' className='form-label'>
          Password
        </label>
        <input
          id='password'
          type='password'
          name='password'
          className='form-control'
          placeholder='Password'
          maxLength={20}
          onChange={(e) => handleInputChange('password', e)}
        />
        <div id='passwordHelp' className='form-text'>
          Must be at least 6 characters, including a symbol, upper and lower case
          letter, and a number
        </div>
      </div>

      {/* Confirm Password Input */}
      <div className='col-12 required'>
        <label htmlFor='confirmPassword' className='form-label'>
          Confirm password
        </label>
        <input
          id='confirmPassword'
          type='password'
          name='confirmPassword'
          className='form-control'
          placeholder='Confirm password'
          maxLength={20}
          onChange={(e) => handleInputChange('confirmPassword', e)}
        />
      </div>

      {/* Login Link */}
      <div className='col-12'>
        <p className='mb-0'>
          Already have an account?{' '}
          <button type='button' className='link-button' onClick={onToggleSignup}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
