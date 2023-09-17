var app = require('app');  
var BrowserWindow = require('browser-window');  


var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});
    
    
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 960, height: 660});

  // and load the index.html of the app.
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
 
 
    mainWindow = null;
  }); 
    
}); 
