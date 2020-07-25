export const transformToArr = (formObj) => {
  const formDataArr = [];
  for (const key in formObj) {
    formObj[key].id = key;
    formDataArr.push(formObj[key]);
  }
  return formDataArr;
};

// Turn array data to an object (turn id to key in return object)
export const initStateCreator = (dataArr) => {
  const dataIDArr = dataArr.map((item) => item.id);
  const initialState = dataIDArr.reduce((acc, cur) => {
    acc[cur] = "";
    return acc;
  }, {});
  return initialState;
};

// Form input validator
export const inputValidator = (userInput = "", inputType = "") => {
  let errMsg = "";
  switch (inputType) {
    case "email":
      if (!validateEmail(userInput)) {
        errMsg = "Email address must have '@' symbol. Invalid email address!";
      }
      break;

    case "password":
      if (userInput.length < 8) {
        errMsg =
          "Password lenght must greater than 8 character. Invalid password!";
      }
      break;

    case "phone":
      if (!validatePhone(userInput)) {
        errMsg = "Phone number must have 10 number. Invalid phone number!";
      }
      break;

    case "name":
      if (!validateName(userInput)) {
        errMsg = "Name not accept '_' symbol. Invalid name!";
      }
      break;

    default:
      return errMsg;
  }
  return errMsg;
};

// Regex email validator
const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(String(email).toLowerCase());
};

// Regex phone validator
const validatePhone = (phone) => {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(phone);
};

// Regex name validator (accept -, not _)
const validateName = (name) => {
  const regex = /^(?!-)[a-zA-Z-]*[a-zA-Z]$/;
  return regex.test(name);
};
