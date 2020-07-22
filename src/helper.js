export const transformToArr = (formObj) => {
  const formDataArr = [];
  for (const key in formObj) {
    formObj[key].id = key;
    formDataArr.push(formObj[key]);
  }
  return formDataArr;
};
