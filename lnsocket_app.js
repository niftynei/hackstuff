async function go() {
	try {
		const LNSocket = await lnsocket_init()
		const ln = LNSocket()

		ln.genkey()
		await ln.connect_and_init("02cca6c5c966fcf61d121e3a70e03a1cd9eeeea024b26ea666ce974d43b242e636", "104.131.77.55:9999")

		const rune = "NZG2PwTxSltQt3JMtlbwz1dxOdNnnssWH5Sztk6pKdM9MTEmbWV0aG9kXmxpc3R8bWV0aG9kXmdldHxtZXRob2Q9c3VtbWFyeSZtZXRob2QvZ2V0c2hhcmVkc2VjcmV0Jm1ldGhvZC9saXN0ZGF0YXN0b3Jl"
		const res = await ln.rpc({ method: "getinfo", rune })

		document.body.innerHTML = `<pre>${JSON.stringify(res.result, undefined, 2)}</pre>`
	} catch (e) {
		document.body.innerHTML = e.toString()
	}
}

go()
