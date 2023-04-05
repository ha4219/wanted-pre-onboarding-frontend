import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SignupPage from './Signup';
import { MemoryRouter } from 'react-router-dom';

describe('signup page', () => {
  const DATA = [
    { email: 'normal@naver.com', password: 'navernaver', isValid: true },
    { email: '', password: '', isValid: false },
    { email: 'abc@def', password: '', isValid: false },
    { email: '@', password: '12345678', isValid: true },
    { email: '', password: '12345678', isValid: false },
    { email: 'abcdef', password: '12345678', isValid: false },
  ];

  test('init components', () => {
    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>,
    );
    const title = screen.getByRole('heading', {
      name: /signup/i,
    });
    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });

    expect(title).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('set value', () => {
    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>,
    );

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    DATA.forEach(({ email, password, isValid }) => {
      fireEvent.change(emailInput, { target: { value: email } });
      fireEvent.change(passwordInput, { target: { value: password } });

      if (isValid) {
        expect(submitButton).not.toBeDisabled();
      } else {
        expect(submitButton).toBeDisabled();
      }
    });
  });

  test('signup submit test', () => {
    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>,
    );

    const emailInput = screen.getByTestId('email');
    const passwordInput = screen.getByTestId('password');
    const submitButton = screen.getByRole('button', {
      name: /submit/i,
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    const { email, password, isValid } = DATA[0];
    fireEvent.change(emailInput, { target: { email: { value: email } } });
    fireEvent.change(passwordInput, {
      target: { password: { value: password } },
    });
  });
});
