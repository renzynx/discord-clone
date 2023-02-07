import * as yup from 'yup';

const RegisterSchema = yup.object().shape({
	email: yup.string().email().required(),
	username: yup.string().min(2).max(32).required(),
	password: yup.string().min(6).required(),
});

export default RegisterSchema;
