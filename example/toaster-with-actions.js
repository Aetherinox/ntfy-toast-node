const path = require('path');
const notifier = require('../index');

/*
    Push notifications
*/

notifier.notify(
    {
        message: 'Are you sure you want to continue?',
        icon: path.join(__dirname, 'example_1.png'),
        actions: ['OK', 'Cancel']
    },
    (err, data) => {
        // Will also wait until notification is closed.
        console.log('Waited');
        console.log(JSON.stringify({ err, data }, null, '\t'));
    }
);

// Built-in actions:
notifier.on('timeout', () => {
    console.log('Timed out!');
});
notifier.on('activate', () => {
    console.log('Clicked!');
});
notifier.on('dismissed', () => {
    console.log('Dismissed!');
});

// Buttons actions (lower-case):
notifier.on('ok', () => {
    console.log('"Ok" was pressed');
});
notifier.on('cancel', () => {
    console.log('"Cancel" was pressed');
});
