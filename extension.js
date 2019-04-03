// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "paste-smms" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.paste2smms', function () {
		// The code you place here will be executed every time your command is executed
		this.socksProxy = vscode.workspace.getConfiguration('paste')['socks5proxy'];
		let socksProxyCmdOption = "";
		if (this.socksProxy!="")
		{
			socksProxyCmdOption="--socks5"
		}


		// Display a message box to the user
		vscode.window.showInformationMessage('正在上传至sm.ms...\nUploading to sm.ms...');
		let editor = vscode.window.activeTextEditor;

		let platform = process.platform;
//============================== Windows =======================================================

		if (platform === 'win32') {
			
		var execPasteWin = require('child_process').spawn;
		console.log(__dirname);
		pasteWin = execPasteWin(__dirname+'/res/pasteFromClip.bat', [socksProxyCmdOption,this.socksProxy])
		
		// 捕获标准输出并将其打印到控制台 
		pasteWin.stdout.on('data', function (data) { 
			console.log('standard output:\n'); 
			console.log(JSON.parse(data));
			
			if (JSON.parse(data).code==="success"){
				vscode.window.showInformationMessage('已上传至sm.ms...（Uploaded to sm.ms...）');
				editor.edit(textEditorEdit => {
				let img="![]("+JSON.parse(data).data.url+")"
				console.log(img);
				textEditorEdit.insert(editor.selection.active, img)
		
				})
			}else if (JSON.parse(data).code==="error") {
				vscode.window.showInformationMessage("错误(error): "+JSON.parse(data).msg);				
			}
		});
		// 捕获标准错误输出并将其打印到控制台 
		pasteWin.stderr.on('data', function (data) { 
		console.log('standard error output:\n' + data); 
		});
		// 注册子进程关闭事件 
		pasteWin.on('exit', function (code, signal) { 
		console.log('child process eixt ,exit:' + code)
		})
		
		}
		else {

//============================== Linux =======================================================
		var execPaste = require('child_process').spawn;
		console.log(socksProxyCmdOption);

		console.log(this.socksProxy);

		free = execPaste('sh', [__dirname+'/res/pasteFromClip.sh','/tmp/temp.png',socksProxyCmdOption,this.socksProxy])
		
		// 捕获标准输出并将其打印到控制台 
		free.stdout.on('data', function (data) { 
			console.log('standard output:\n'); 
			console.log(JSON.parse(data));
			
			if (JSON.parse(data).code==="success"){
				vscode.window.showInformationMessage('已上传至sm.ms...（Uploaded to sm.ms...）');
				editor.edit(textEditorEdit => {
				let img="![]("+JSON.parse(data).data.url+")"
				console.log(img);
				textEditorEdit.insert(editor.selection.active, img)
		
				})
			}else if (JSON.parse(data).code==="error") {
				vscode.window.showInformationMessage("错误(error): "+JSON.parse(data).msg);				
			}
		});
		// 捕获标准错误输出并将其打印到控制台 
		free.stderr.on('data', function (data) { 
		console.log('standard error output:\n' + data); 
		});
		// 注册子进程关闭事件 
		free.on('exit', function (code, signal) { 
		console.log('child process eixt ,exit:' + code)
		})
	}

	});

	context.subscriptions.push(disposable);
//	console.log('Congratulations, your extension "paste-smms" is now active!');

	
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
