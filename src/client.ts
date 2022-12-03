import { HoudiniClient, type RequestHandlerArgs } from '$houdini';

async function fetchQuery({
	fetch,
	text = '',
	variables = {},
	metadata
}: RequestHandlerArgs) {
	const url = 'http://127.0.0.1:42011/api/graphql';
	const result = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});
	return await result.json();
}

export default new HoudiniClient(fetchQuery);
