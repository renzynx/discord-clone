import Input from '@/components/Input';
import Select from '@/components/Select';
import SVGBackground from '@/components/SVGBackground';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/Button';

const Authentication = () => {
	const router = useRouter();
	const type = router.pathname.split('/').pop();
	let component: JSX.Element | null = null;

	switch (type) {
		case 'login':
			component = (
				<>
					<Input label="Email or phone number" required aria-required />
					<div className="w-full flex flex-col justify-center items-start gap-1">
						<Input label="Password" type="password" required aria-required />
						<Link passHref href="/forgot-password">
							<p className="text-discord-link text-sm font-medium leading-4 text-right cursor-pointer hover:underline">
								Forgot your password?
							</p>
						</Link>
					</div>
				</>
			);
			break;
		case 'register':
			component = (
				<>
					<Input label="Email" />
					<Input label="Username" />
					<Input label="Password" type="password" />
					<div className="flex items-end justify-between gap-2 w-full">
						<Select
							label="Date of birth"
							placeholder="Day"
							options={[
								{
									label: 'January',
									value: 'january',
								},
								{
									label: 'February',
									value: 'february',
								},
							]}
						/>
						<Select
							placeholder="Month"
							options={[
								{
									label: 'January',
									value: 'january',
								},
								{
									label: 'February',
									value: 'february',
								},
							]}
						/>
						<Select
							placeholder="Year"
							options={[
								{
									label: 'January',
									value: 'january',
								},
								{
									label: 'February',
									value: 'february',
								},
							]}
						/>
					</div>
				</>
			);
			break;
	}

	return (
		<div className="flex justify-center items-center w-screen h-screen">
			<SVGBackground />
			<div className="animate-discord-bounce w-full bg-transparent lg:h-auto md:h-auto sm:h-auto lg:w-[520px] md:w-[500px] sm:w-[480px] p-8 mx-auto lg:bg-discord-black md:bg-discord-black sm:bg-discord-black rounded-md absolute">
				<div className="flex flex-col items-center justify-center w-full h-full gap-6">
					<div className="text-center select-none space-y-2">
						<h6 className="font-semibold text-2xl">
							{type === 'register' ? 'Create an account' : 'Welcome back!'}
						</h6>
						<p className="text-discord-dimmed">
							{type === 'login' && "We're so excited to see you again!"}
						</p>
					</div>
					{component}
					<div className="flex flex-col w-full gap-1">
						<Button fullWidth>
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
								<span className="text-discord-link hover:underline text-sm font-medium leading-4">
									{type === 'login' ? 'Register' : 'Already have an account?'}
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Authentication;
