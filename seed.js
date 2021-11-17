const db = require('./models/user.js')
const data = require('./dummy.json');


db.deleteMany({}, (err, result) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log(result.deletedCount, 'users deleted');

    db.create(data.users, (err, seededUsers) => {
        if (err) {
            console.log(err);
            process.exit();
        }
        console.log(seededUsers.length, 'users created successfully');
        console.log('done!');
        process.exit();
    })
})