import Image from 'next/image';

const SVGBackground = () => {
	return (
		<Image
			src="/auth_background.svg"
			alt="Background"
			width={1920}
			height={1080}
			className="w-screen h-screen absolute top-0 left-0 z-0 pointer-events-none select-none opacity-0 lg:opacity-100 md:opacity-100 sm:opacity-100"
		/>
	);
};

export default SVGBackground;
