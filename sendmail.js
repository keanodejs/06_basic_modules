sendmail = require('sendmail')();

sendmail({
    from: 'xxx@kea.dk',
    to: 'clausbove@gmail.com',
    subject: 'test sendmail',
    content: 'Mail of test sendmail ',
}, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});
