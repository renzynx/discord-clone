import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from './Button';
import Input from './Input';

const VerifyScreen = () => {
	const [code, setCode] = useState('');
	const supabase = useSupabaseClient();
	const router = useRouter();

	return (
		<div className="flex justify-between items-center w-screen h-screen">
			<div className="flex flex-col justify-between items-center w-1/2 mx-auto gap-16 h-full">
				<Image width={350} height={350} src="/verify.svg" alt="verify" />
				<div className="h-full">
					<h1 className="text-3xl text-center">Verification Required</h1>
					<p className="text-center text-discord-dimmed">
						We&apos;ve detected something out of the ordinary going on, and we
						want to keep you and the community safe. To continue using Discord,{' '}
						<strong>we will need you to verify your account.</strong>
					</p>
				</div>
				<div className="flex justify-center items-end">
					<Input
						type="text"
						onChange={(e) => setCode(e.target.value)}
						value={code}
						label="Verification Code"
					/>
					<Button
						compact
						onClick={async () => {
							const email = localStorage.getItem('email');
							if (email) {
								const { error } = await supabase.auth.verifyOtp({
									type: 'signup',
									email: email,
									token: code,
								});

								if (error) {
									console.log(error);
								} else {
									localStorage.removeItem('email');
									router.push('/');
								}
							} else {
								router.push('/login');
							}
						}}
					>
						Verify
					</Button>
				</div>
				<div className="p-3">
					<p className="text-[15px] text-discord-dimmed">
						Think you&apos;re seeing this by mistake?
					</p>
					<div className="flex justify-center gap-3">
						<a href="#" className="text-discord-link font-medium">
							Support
						</a>
						<p className="text-discord-dimmed">•</p>
						<a href="#" className="text-discord-link font-medium">
							Logout
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VerifyScreen;
