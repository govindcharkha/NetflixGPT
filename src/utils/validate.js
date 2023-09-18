export const checkValidData = (email, password) => {
  //const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
  const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    email
  );
  const isPasswordValid =
    /"^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"/.test(password);
  //if (!isNameValid) return "Please enter valid name";
  if (!isEmailValid) return "Please enter valid email id";
  if (!isPasswordValid) return;
  return null;
};
