import Input from '@/components/Input';
import Select from '@/components/Select';
import SVGBackground from '@/components/SVGBackground';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/Button';
import { Formik, FormikErrors } from 'formik';
import { FC } from 'react';
import generateDiscriminator from '@/lib/functions/generateDiscriminator';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import LoginSchema from '@/lib/schemas/login';
import RegisterSchema from '@/lib/schemas/register';

interface FormValues {
	email: string;
	username: string;
	password: string;
}

// thanks copilot
const months = [
	{ label: 'January', value: '1' },
	{ label: 'February', value: '2' },
	{ label: 'March', value: '3' },
	{ label: 'April', value: '4' },
	{ label: 'May', value: '5' },
	{ label: 'June', value: '6' },
	{ label: 'July', value: '7' },
	{ label: 'August', value: '8' },
	{ label: 'September', value: '9' },
	{ label: 'October', value: '10' },
	{ label: 'November', value: '11' },
	{ label: 'December', value: '12' },
];

interface Props {
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
	errors: FormikErrors<FormValues>;
}

const Login: FC<Props> = ({ handleChange, handleBlur, errors }) => {
	return (
		<>
			<Input
				onChange={handleChange}
				onBlur={handleBlur}
				id="email"
				name="email"
				label="Email or phone number"
				required
				aria-required
				error={errors.email}
			/>
			<div className="w-full flex flex-col justify-center items-start gap-1">
				<Input
					onChange={handleChange}
					onBlur={handleBlur}
					id="password"
					name="password"
					label="Password"
					type="password"
					required
					aria-required
					error={errors.password}
				/>
				<Link passHref href="/forgot-password">
					<p className="text-discord-link text-sm font-medium leading-4 text-right cursor-pointer hover:underline underline-offset-1">
						Forgot your password?
					</p>
				</Link>
			</div>
		</>
	);
};

const Register: FC<Props> = ({ handleChange, handleBlur, errors }) => {
	return (
		<>
			<Input
				onChange={handleChange}
				onBlur={handleBlur}
				name="email"
				label="Email"
				error={errors.email}
			/>
			<Input
				onChange={handleChange}
				onBlur={handleBlur}
				name="username"
				label="Username"
				error={errors.username}
			/>
			<Input
				onChange={handleChange}
				onBlur={handleBlur}
				name="password"
				label="Password"
				type="password"
				error={errors.password}
			/>
			<div className="flex items-end justify-between gap-2 w-full">
				<Select
					label="Date of birth"
					placeholder="Day"
					options={[...Array(31)].map((_, i) => ({
						label: `${i + 1}`,
						value: `${i + 1}`,
					}))}
				/>
				<Select placeholder="Month" options={months} />
				<Select
					placeholder="Year"
					options={[...Array(100)].map((_, i) => ({
						label: `${new Date().getFullYear() - i}`,
						value: `${new Date().getFullYear() - i}`,
					}))}
				/>
			</div>
		</>
	);
};

const Authentication = () => {
	const router = useRouter();
	const supabase = useSupabaseClient();
	const type = router.pathname.split('/').pop();
	let Component: FC<Props>;
	const initialValues: FormValues = {
		email: '',
		username: '',
		password: '',
	};

	const handleSubmit = async (
		values: FormValues,
		setErrors: (errors: FormikErrors<FormValues>) => void
	) => {
		const { error } =
			type === 'login'
				? await supabase.auth.signInWithPassword(values)
				: await supabase.auth.signUp({
						...values,
						options: {
							data: {
								username: values.username,
								discriminator: generateDiscriminator(),
							},
							emailRedirectTo: 'http://localhost:3000/verify',
						},
				  });

		if (error) {
			setErrors({
				email: error.message,
				username: error.message,
				password: error.message,
			});
			return;
		}

		if (type === 'register') {
			localStorage.setItem('email', values.email);
			router.push('/verify');
		}

		if (type === 'login') {
			router.push('/');
		}
	};

	switch (type) {
		case 'login':
			Component = Login;
			break;
		case 'register':
			Component = Register;
			break;
	}

	return (
		<div className="flex justify-center items-center w-screen h-screen">
			<SVGBackground />
			<div className="motion-safe:animate-discord-bounce w-full bg-discord-chat lg:h-auto md:h-auto sm:h-auto lg:w-[520px] md:w-[500px] sm:w-[480px] p-8 mx-auto  rounded-md absolute select-none">
				<div className="flex flex-col items-center justify-center w-full h-full gap-6">
					<div className="text-center space-y-2">
						<h6 className="font-semibold text-2xl">
							{type === 'register' ? 'Create an account' : 'Welcome back!'}
						</h6>
						<p className="text-discord-dimmed">
							{type === 'login' && "We're so excited to see you again!"}
						</p>
					</div>
					<Formik
						initialValues={initialValues}
						onSubmit={(values, { setErrors }) =>
							handleSubmit(values, setErrors)
						}
						validationSchema={type === 'login' ? LoginSchema : RegisterSchema}
					>
						{({ handleSubmit, handleChange, handleBlur, errors }) => (
							<form
								onSubmit={handleSubmit}
								className="flex flex-col items-center justify-center w-full h-full gap-6"
							>
								<Component
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
								/>
								<div className="flex flex-col w-full gap-1">
									<Button fullWidth type="submit">
										<span className="text-white text-base font-medium">
											{type === 'login' ? 'Log In' : 'Continue'}
										</span>
									</Button>
									<div className="flex-grow flex gap-1 items-center">
										{type === 'login' && (
											<p className="text-discord-dimmed text-sm font-medium leading-4">
												Need an account?
											</p>
										)}
										<Link
											passHref
											href={`/${type === 'login' ? 'register' : 'login'}`}
										>
											<span className="text-discord-link hover:underline text-sm font-medium leading-4 underline-offset-1">
												{type === 'login'
													? 'Register'
													: 'Already have an account?'}
											</span>
										</Link>
									</div>
								</div>
							</form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
};

export default Authentication;
