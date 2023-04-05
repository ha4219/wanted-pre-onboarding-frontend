import React, { useState } from 'react';
import { validateEmail, validatePassword } from '@/utils/validate';

function SigninPage() {
  const [isValid, setIsValid] = useState<{ email: boolean; password: boolean }>(
    {
      email: false,
      password: false,
    },
  );

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
      console.log();
    }
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsValid((prev) => ({ ...prev, email: validateEmail(e.target.value) }));
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsValid((prev) => ({
      ...prev,
      password: validatePassword(e.target.value),
    }));
  };

  return (
    <>
      <h1>signin</h1>
      <form onSubmit={handleSubmit} className="py-5">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">email</label>
          <input
            name="email"
            type="email"
            onChange={handleEmail}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">password</label>
          <input
            name="password"
            type="password"
            onChange={handlePassword}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          disabled={!(isValid.email && isValid.password)}
          type="submit"
          className="bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:focus:ring-blue-800 disabled:bg-gray-700"
        >
          submit
        </button>
      </form>
    </>
  );
}

export default SigninPage;
