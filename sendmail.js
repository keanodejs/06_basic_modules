sendmail = require('sendmail')();

sendmail({
    from: 'xxx@kea.dk',
    to: 'xxx@gmail.com',
    subject: 'test sendmail',
    content: 'Mail of test sendmail ',
}, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
