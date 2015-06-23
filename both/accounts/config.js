AccountsTemplates.configure({
    // Behaviour
    enablePasswordChange: true,
    showForgotPasswordLink: true,
    sendVerificationEmail: true,
    showResendVerificationEmailLink: true
});

AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
// AccountsTemplates.configureRoute('hide');
// AccountsTemplates.configureRoute('resendValidationEmail');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('verifyEmail');