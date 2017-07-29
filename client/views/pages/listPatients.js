Template.listPatients.created = function () {
    Meteor.call('getPatients', function (err, result) {
        Session.set("patients", result);
    });
};

Template.listPatients.rendered = function(){

    // Initialize dataTables
    $('.dataTables-example').DataTable({
        dom: '<"html5buttons"B>lTfgitp',
        buttons: [
            { extend: 'copy'},
            {extend: 'csv'},
            {extend: 'excel', title: 'ExampleFile'},
            {extend: 'pdf', title: 'ExampleFile'},

            {extend: 'print',
                customize: function (win){
                    $(win.document.body).addClass('white-bg');
                    $(win.document.body).css('font-size', '10px');

                    $(win.document.body).find('table')
                        .addClass('compact')
                        .css('font-size', 'inherit');
                }
            }
        ]

    });

};

Template.listPatients.helpers({
    Patients : function () {
        return Session.get("patients") || "Loading";
    }
});