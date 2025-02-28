const validateFormData = (email, password) => {
  const validEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(
    email
  );
  const validPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!validEmail) return 'Email is not valid';
  if (!validPassword) return 'password is not valid';
  return null;
};

export default validateFormData;
