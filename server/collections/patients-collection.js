Patients = new Meteor.Collection('patients');

Patients.schema = new SimpleSchema({
    "prenom": {
        type: String,
        label: "Prénom"
    },
    "nom": {
        type: String,
        label: "Nom"
    },
    "profession": {
        type: String,
        label: "Profession"
    },
    "sexe": {
        type: String,
        label: "Sexe"
    },
    "taille": {
        type: Number,
        label: "Taille"
    },
    "naissance": {
        type: Date,
        label: "Date de naissance"
    }
});

Patients.attachSchema(Patients.schema);