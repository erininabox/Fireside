const db = require('./models/user.js')
const data = require('./dummy.json');

db.create(data.users, (err, seededUsers) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log(seededUsers.length, 'users created successfully');
    console.log('done!');
    process.exit();
})