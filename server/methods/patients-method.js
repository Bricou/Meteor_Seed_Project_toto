Meteor.methods({

    addPatient: function (patient) {
        // Patients.schema.validate(patient);
        // TODO gerer les exceptions correctement
        // TODO eviter l'insertion en double
        console.log(patient);
        check(patient, Patients.schema);
        Patients.insert(patient);
    },

    getPatients: function (patient) {
        // List des patients à afficher dans patientList
        list = Patients.find({}, {fields:
            {
                '_id':1,
                nom:1,
                prenom:1,
                age:1,
                profession:1,
            }
        }).fetch();
        console.log(list);
        return list;
    }

});