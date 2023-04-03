import React, { useState } from 'react';
import { validateEmail, validatePassword } from '@/utils/validate';

function SigninPage() {
  const [isValid, setIsValid] = useState<boolean>(false);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    if (
      validateEmail(target.email.value) &&
      validatePassword(target.password.value)
    ) {
      setIsValid(true);
      console.log('is valid');
    } else {
      setIsValid(false);
      console.log('is not valid');
    }
  };
  return (
    <>
      <h1>signin</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label>email</label>
          <input name="email" type="email" />
        </div>
        <div className="mb-6">
          <label>password</label>
          <input name="password" type="password" />
        </div>
        <button disabled={!isValid} type="submit">
          submit
        </button>
      </form>
    </>
  );
}

export default SigninPage;
