//status
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

//message
export const SUCCESSFULLY_CREATED ="Record Created Successfully"
export const SUCCESSFULLY_UPDATED ="Record Updated Successfully"
export const SUCCESSFULLY_DELETED ="Record Deleted Successfully"
export const SUCCESSFULLY_FETCHED ="Record Fetched Successfully"
export const NOT_EXIST_TO_MODIFY = "Record Not Exist to Modify"
export const PASSWORD_UPDATED_SUCCESSFULLY = "Password Updated Successfully"
export const INVALID_CREDENTIALS = "Invalid Credentials"
export const INVALID_TOKEN = "Invalid Token"
export const USERNAME_EMAIL_DOESNT_EXIST = "Username/Email Doesn't Exist"
export const HAVE_NO_PERMISSIONS = "You Have No Permissions"
export const REQUIRED_PERMISSION_KEY = "Permission Key Is Required"


//REGEX
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const mobileRegex = /^\d{10}$/;
export const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;


// courseCategory,

export const courseCategory = ['frontend', 'backend', 'database', 'deployment', 'ui/ux'];
export const courseLanguage = ['react','node','mongodb','mongoose','html','css','javascript'];
export const questionAnswerType = ['text','image','code'];
export const genderType = ["male", "female", "other"];
export const usersType = ["user", "admin", "super-admin","sub-admin"];
export const permissionsList = ["POST","GET","PUT","PATCH","DELETE"]