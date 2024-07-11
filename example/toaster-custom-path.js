const path = require('path');

/*
    Target specific notification vendor
*/

const { WindowsToaster } = require('../');

/*
    withFallback
    Fallback to Growl or Balloons?

    customPath
    Relative/Absolute path if you want to use your fork of SnoreToast.exe
*/

const customPath = path.join('vendor', 'ntfyToast', 'ntfytoast.exe');
const notifier = new WindowsToaster({
    withFallback: false,
    customPath: customPath
});

/*
    Push notifications
*/

notifier.notify(
    {
        message: 'Hello!',
        icon: path.join(__dirname, 'example_1.png'),
        sound: true
    },
    function (err, data) {
        // Will also wait until notification is closed.
        console.log('Waited');
        console.log(JSON.stringify({ err, data }));
    }
);

notifier.on('timeout', () => {
    console.log('Timed out!');
});

notifier.on('click', () => {
    console.log('Clicked!');
});
