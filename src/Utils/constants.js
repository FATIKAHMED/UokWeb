import axios from "axios";

// let environment;
// let url = process.env.REACT_APP_DEV_API;
// let url = process.env.REACT_APP_PROD_API;

// if (window.location.host.includes("localhost") || window.location.host.includes("127"))
//   environment = "development";
// else environment = "production";

// if (environment === "production") url = process.env.REACT_APP_PROD_API;

// export const BASE_URL = url;

export const getKeyByValue = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value);
};

// export const getStatusByValue = (value) => {
//   return getKeyByValue(USER_STATUS, value);
// };

async function getAccessTokenFromCode(code) {
  const { data } = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: "post",
    data: {
      redirect_uri: "https://www.example.com/authenticate/google",
      grant_type: "authorization_code",
      code,
    },
  });
  console.log(data); // { access_token, expires_in, token_type, refresh_token }
  return data.access_token;
}


export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function formatLongNames(string, isHyperLink) {
  if (isHyperLink) {
    const filenameArray = string.split('/')
    const filename = filenameArray[filenameArray.length - 1]

    if (!filename?.includes('.') && filename?.length > 15) {
      return filename.substr(0, 10) + "..." + fName.substr(-5)
    }
    const leftRightStrings = filename.split('.');

    //file name
    const fName = leftRightStrings[0];

    //file extension
    const fExtention = leftRightStrings[1];

    var lengthFname = fName.length;

    //if file name without extension contains more than 15 characters   
    if (lengthFname > 15) {
      return fName.substr(0, 10) + "..." + fName.substr(-5) + "." + fExtention
    }
    else
      return filename
  }

  else {
    if (!string?.includes('.') && string?.length > 15) {
      return string.substr(0, 10) + "..." + fName.substr(-5)
    }
    const leftRightStrings = string.split('.');

    //file name
    const fName = leftRightStrings[0];

    //file extension
    const fExtention = leftRightStrings[1];

    var lengthFname = fName.length;

    //if file name without extension contains more than 15 characters   
    if (lengthFname > 15) {
      return fName.substr(0, 10) + "..." + fName.substr(-5) + "." + fExtention
    }
    else
      return string

  }
}
export function formatToShortNames(string, isHyperLink) {
  if (isHyperLink) {
    const filenameArray = string.split('/')
    const filename = filenameArray[filenameArray.length - 1]

    if (!filename?.includes('.') && filename?.length > 10) {
      return filename.substr(0,5) + "..." + fName.substr(-5)
    }
    const leftRightStrings = filename.split('.');

    //file name
    const fName = leftRightStrings[0];

    //file extension
    const fExtention = leftRightStrings[1];

    var lengthFname = fName.length;

    //if file name without extension contains more than 15 characters   
    if (lengthFname > 10) {
      return fName.substr(0, 5) + "..." + fName.substr(-5) + "." + fExtention
    }
    else
      return filename
  }

  else {
    if (!string?.includes('.') && string?.length > 10) {
      return string.substr(0, 5) + "..." + fName.substr(-5)
    }
    const leftRightStrings = string.split('.');

    //file name
    const fName = leftRightStrings[0];

    //file extension
    const fExtention = leftRightStrings[1];

    var lengthFname = fName.length;

    //if file name without extension contains more than 15 characters   
    if (lengthFname > 10) {
      return fName.substr(0, 5) + "..." + fName.substr(-5) + "." + fExtention
    }
    else
      return string

  }
}

export const ALPHA_ARRAY = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']