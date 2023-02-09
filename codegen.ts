import 'dotenv/config';
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'src/graphql/schema/schema.graphql',
	documents: 'src/graphql/**/*.graphql',
	generates: {
		'./src/generated/graphql.tsx': {
			plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
		},
	},
};

export default config;
