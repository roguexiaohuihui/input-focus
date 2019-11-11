// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
	// eslint-disable-next-line no-undef
	var input = document.getElementById('input_1')
	input.focus()
	// Handle messages sent from the extension to the webview
	window.addEventListener('message', event => {
		const message = event.data // The json data that the extension sent
		switch (message.command) {
			case 'showFocus':
				console.log('showFocus')
				console.log('input:', input)
				input.focus()
				break
		}
	})
}())
