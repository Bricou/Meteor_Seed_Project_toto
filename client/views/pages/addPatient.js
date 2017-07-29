Template.addPatient.events({

    'submit .addPatient'(event) {
        event.preventDefault();
        prenom = event.target.prenom.value;
        nom = event.target.nom.value;
        profession = event.target.profession.value;
        sexe = event.target.sexe.value;
        taille = Number(event.target.taille.value);
        // naissance = Date.parse(event.target.naissance.value);
        naissance = Date(moment(event.target.naissance.value, "DD/MM/YYYY").format("MM-DD-YYY"));
        naissance = Date.now();
        patient = {
            prenom: prenom,
            nom: nom,
            profession: profession,
            sexe: sexe,
            taille: taille,
            naissance: naissance,
        };
        console.log(patient);
        console.log(Date.now());
        Meteor.call('addPatient', patient, (error, reponse) => {
            if (error) {
                console.warn(error.reason);
            } else {
                console.log(reponse);
            }
        });
    },

});