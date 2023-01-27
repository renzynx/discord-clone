import Error from 'next/error';

const NotFound = () => {
	return (
		<div className="bg-black">
			<Error statusCode={404} />
		</div>
	);
};

export default NotFound;

NotFound.layout = false;
