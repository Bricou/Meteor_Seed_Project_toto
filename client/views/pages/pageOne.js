Template.pageOne.events({
    'click .addPatient': function () {
        console.log("toto");
        patient = {
            "nom": "OULO'",
            "prenom": "Franck"
        };
        Meteor.call('getPatients', (error, reponse) => {
            if (error) {
                console.warn(error.reason);
            } else {
                console.log(reponse);
            }
        });
    }
});