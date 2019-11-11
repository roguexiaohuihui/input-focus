# A Webview API Sample


## Running the example

- Open this example in VS Code 1.40+
- `npm install`
- `npm run watch` or `npm run compile`
- `F5` to start debugging

1、Run the `Cat Coding: Start cat coding session` to create the webview.

the first time you create a webview, the focus is normal

2、Run again  the `Cat Coding: Start cat coding session` to create the webview.

the focus is normal

3、Switching to the webview in step 1, this focus is not working

		this._panel.onDidChangeViewState(
			e => {
				if (this._panel.visible) {
					this._panel.webview.postMessage({ command: 'showFocus' });
					this._update();
				}
			},
			null,
			this._disposables
		);
    
I listened for the toggle event and sent a message to the web to make it focus, but the focus didn't work

media/main.js:

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

help：I want to actively bring the webview into focus again when I switch back
