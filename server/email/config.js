Meteor.startup(function() {

  Meteor.Mailgun.config({
    username: 'postmaster@sandboxf17f22db7f4d49abac3e63238cb4dabf.mailgun.org',
    password: 'gun123456'
  });
  //process.env.MAIL_URL = 'smtp://postmaster%40sandboxf17f22db7f4d49abac3e63238cb4dabf.mailgun.org:gun123456@smtp.mailgun.org:587';

  Meteor.methods({
    'sendContactEmail': function(name, email, message) {
      this.unblock();

      Meteor.Mailgun.send({
        to: 'recipient@example.com',
        from: name + ' <' + email + '>',
        subject: 'New Contact Form Message',
        text: message,
        html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message})
      });
    }
  });
});
