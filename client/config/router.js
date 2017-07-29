
FlowRouter.route('/', {
    action: function() {
        FlowRouter.go('/pageOne');
    }
});

FlowRouter.route('/pageOne', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "pageOne"});
    }
});

FlowRouter.route('/pageTwo', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "pageTwo"});
    }
});

FlowRouter.route('/addPatient', {
    action: function () {
        BlazeLayout.render("mainLayout", {content: "addPatient"});
    }
});

FlowRouter.route('/listPatients', {
    action: function () {
        BlazeLayout.render("mainLayout", {content: "listPatients"});
    }
});