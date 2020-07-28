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
		case "currentPassword":
		case "newPassword":
		case "confirmPassword":
			if (!validatePassword(userInput)) {
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

// Form submit validator
export const loginValidator = (submitData) => {
	const { email, password } = submitData;
	let isValid = true;
	if (!validateEmail(email) && isValid === true) {
		isValid = false;
	}
	if (!validatePassword(password) && isValid === true) {
		isValid = false;
	}
	return isValid;
};

export const registerValidator = (submitData) => {
	const { email, password, confirmPassword, name, phone } = submitData;
	let isValid = true;
	if (!validateEmail(email) && isValid === true) {
		isValid = false;
	}
	if (!validatePassword(password) && isValid === true) {
		isValid = false;
	}
	if (confirmPassword !== password && isValid === true) {
		isValid = false;
	}
	if (!validateName(name) && isValid === true) {
		isValid = false;
	}
	if (!validatePhone(phone) && isValid === true) {
		isValid = false;
	}
	console.log(isValid);
	return isValid;
};

export const changePasswordValidator = (submitData) => {
	const { newPassword, confirmPassword } = submitData;
	let isValid = true;
	if (!validatePassword(newPassword) && isValid === true) {
		isValid = false;
	}
	if (newPassword !== confirmPassword && isValid === true) {
		isValid = false;
	}
	return isValid;
};

const validatePassword = (password) => {
	if (password.length < 8) {
		return false;
	}
	return true;
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
	const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

	return regex.test(name);
};

// Create modal button data
export const modalButtonDataCreator = ({ btn1 = {}, btn2 = {} }) => {
	const data = {
		button1: {
			buttonType: "button",
			pageType: "modal",
			config: {
				isFull: false,
				title: btn1.title,
				onClickHandler: btn1.func,
			},
		},
		button2: {
			buttonType: "button",
			pageType: "modal",
			config: {
				isFull: true,
				title: btn2.title,
				onClickHandler: btn2.func,
			},
		},
	};
	return transformToArr(data);
};
