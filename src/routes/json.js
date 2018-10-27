
export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(`{ val: 'Hello world', note: 'this is not json' }`);
}
