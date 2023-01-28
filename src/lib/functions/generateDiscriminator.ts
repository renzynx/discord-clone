export default function generateDiscriminator() {
	const random = Math.floor(Math.random() * 9000) + 1000;
	return `#${random}`;
}
