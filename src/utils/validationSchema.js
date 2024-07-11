import * as yup from 'yup';

import staticText from '@/utils/staticText.json';

const { formMeta } = staticText;

export const loginFormSchema = yup
  .object({
    username: yup
      .string()
      .trim()
      .required(formMeta.username.errorMessages.default),
    password: yup
      .string()
      .trim()
      .required(formMeta.password.errorMessages.default),
  })
  .required();

export const createUserFormSchem = yup
  .object({
    firstName: yup
      .string()
      .required(formMeta.firstName.errorMessages.default)
      .min(formMeta.firstName.minlength, formMeta.firstName.errorMessages[222])
      .matches(
        formMeta.firstName.regexPattern,
        formMeta.firstName.errorMessages[101]
      )
      .max(formMeta.firstName.maxlength, formMeta.firstName.errorMessages[221]),
    middleName: yup
      .string()
      .trim()
      .matches(
        formMeta.middleName.regexPattern,
        formMeta.firstName.errorMessages[101]
      )
      .max(
        formMeta.middleName.maxlength,
        formMeta.middleName.errorMessages[221]
      ),
    lastName: yup
      .string()
      .trim()
      .required(formMeta.lastName.errorMessages.default)
      .min(formMeta.lastName.minlength, formMeta.lastName.errorMessages[222])
      .matches(
        formMeta.lastName.regexPattern,
        formMeta.lastName.errorMessages[101]
      )
      .max(formMeta.lastName.maxlength, formMeta.lastName.errorMessages[221]),
    username: yup
      .string()
      .trim()
      .required(formMeta.email.errorMessages[224])
      .matches(
        formMeta.email.regexPattern,
        formMeta.email.errorMessages.default
      ),
    password: yup
      .string()
      .trim()
      .required(formMeta.password.errorMessages[224])
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        formMeta.password.errorMessages[221]
      ),
    cPassword: yup
      .string()
      .trim()
      .required(formMeta.cPassword.errorMessages[224])
      .oneOf(
        [yup.ref('password'), null],
        formMeta.cPassword.errorMessages[221]
      ),
    roleId: yup.string().required(formMeta.dropdownRole.errorMessages.default),
  })
  .required();

export const addRoleFrmSchema = yup
  .object({
    role: yup
      .string()
      .required(formMeta.role.errorMessages.default)
      .min(formMeta.role.minlength, formMeta.role.errorMessages[222])
      .matches(formMeta.role.regexPattern, formMeta.role.errorMessages[101])
      .max(formMeta.role.maxlength, formMeta.role.errorMessages[221]),
  })
  .required();

export const updateProfileSchema = yup
  .object({
    firstName: yup
      .string()
      .required(formMeta.firstName.errorMessages.default)
      .min(formMeta.firstName.minlength, formMeta.firstName.errorMessages[222])
      .matches(
        formMeta.firstName.regexPattern,
        formMeta.firstName.errorMessages[101]
      )
      .max(formMeta.firstName.maxlength, formMeta.firstName.errorMessages[221]),
    middleName: yup
      .string()
      .trim()
      .matches(
        formMeta.middleName.regexPattern,
        formMeta.firstName.errorMessages[101]
      )
      .max(
        formMeta.middleName.maxlength,
        formMeta.middleName.errorMessages[221]
      ),
    lastName: yup
      .string()
      .trim()
      .required(formMeta.lastName.errorMessages.default)
      .min(formMeta.lastName.minlength, formMeta.lastName.errorMessages[222])
      .matches(
        formMeta.lastName.regexPattern,
        formMeta.lastName.errorMessages[101]
      )
      .max(formMeta.lastName.maxlength, formMeta.lastName.errorMessages[221]),
  })
  .required();

export const updatePasswordSchema = yup
  .object({
    currentPassword: yup
      .string()
      .required(formMeta.currentPassword.errorMessages.default),
    password: yup
      .string()
      .trim()
      .required(formMeta.password.errorMessages[224])
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        formMeta.password.errorMessages[221]
      ),
    confirmPassword: yup
      .string()
      .trim()
      .required(formMeta.cPassword.errorMessages[224])
      .oneOf(
        [yup.ref('password'), null],
        formMeta.cPassword.errorMessages[221]
      ),
  })
  .required();

export const addSubjectFormSchema = yup
  .object({
    subjectName: yup
      .string()
      .required(formMeta.subjectName.errorMessages.default)
      .min(
        formMeta.subjectName.minlength,
        formMeta.subjectName.errorMessages[222]
      )
      .matches(
        formMeta.subjectName.regexPattern,
        formMeta.subjectName.errorMessages[101]
      )
      .max(
        formMeta.subjectName.maxlength,
        formMeta.subjectName.errorMessages[221]
      ),
    status: yup.string().trim().required(formMeta.status.errorMessages.default),
  })
  .required();
