export const validateEmail = (email: string): boolean => /.*@.*/.test(email);
export const validatePassword = (password: string): boolean =>
  /.{8,}/.test(password);
