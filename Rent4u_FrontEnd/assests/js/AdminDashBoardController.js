// // ..............Driver section..........//
//
// // loadAllDrivers();
//
// import {get} from "../mdb/src/js/mdb/perfect-scrollbar/lib/css";
//
loadAllDrivers();

function loadAllDrivers() {
    $('#driverTbody').empty();
    $.ajax({
        method: 'GET',
        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver",
        dataType: 'json',
        success: function (resp) {
            let response = resp.data;
            for (var i in response) {
                let id = (response[i].driverID);
                let name = (response[i].name);
                let contactNo = response[i].contactNo;
                let nic = response[i].nic;
                let userName = response[i].userName;
                let password = response[i].password;
                let available = response[i].available;
                var row = `<tr><td>${id}</td><td>${name}</td><td>${contactNo}</td><td>${nic}</td><td>${userName}</td><td>${password}</td><td>${available}</td></tr>`;
                $('#driverTbody').append(row);

                $('#tblDriver #driverTbody tr').css("cursor", "pointer");
                $('#tblDriver #driverTbody tr').click(function () {

                    let id = $(this).children('td:eq(0)').text();
                    let name = $(this).children('td:eq(1)').text();
                    let contact = $(this).children('td:eq(2)').text();
                    let nic = $(this).children('td:eq(3)').text();
                    let username = $(this).children('td:eq(4)').text();
                    let psw = $(this).children('td:eq(5)').text();
                    let rbtn = $(this).children('td:eq(6)').text();

                    $('#driverID').val(id);
                    $('#drivername').val(name);
                    $('#driverContact').val(contact);
                    $('#dnic').val(nic);
                    $('#duserName').val(username);
                    $('#dPassword').val(psw);
                    setRadiobtn(rbtn + "");
                    console.log("RBTN " + rbtn);

                });


            }
        }
    });
}

function setRadiobtn(avalabilty) {
    console.log(avalabilty);


    if (avalabilty == "false") {
        $('#rbtnExit').attr('checked', true)
        // $('#rbtnIn').attr('checked', false);
        console.log("in f");
    } else if (avalabilty == "true") {
        $('#rbtnIn').attr('checked', true);
        $('#rbtnExit').attr('checked', false);
        console.log("in t");
    } else {
        $('#rbtnIn').attr('checked', true);
        $('#rbtnExit').attr('checked', false);
        console.log("in n");

    }
}

function checkDriverID() {
    if (/^(D)[0-9]{1,3}$/.test($('#driverID').val())) {
        $('#driverID').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#driverID').css('border', '3px solid red');
    }
    return false;
}

$('#driverID').on('keyup', function (event) {
    checkDriverID();
});

function checkDriverName() {
    if (/^[A-z ]{1,}$/.test($('#drivername').val())) {
        $('#drivername').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#drivername').css('border', '3px solid red');
    }
    return false;
}


$('#drivername').on('keyup', function (event) {
    checkDriverName();
});


function checkDriverContact() {
    if (/^[0-9]{10}$/.test($('#driverContact').val())) {//  ("^\\d{10}$")
        $('#driverContact').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#driverContact').css('border', '3px solid red');
    }
    return false;

}

$('#driverContact').on('keyup', function (event) {
    checkDriverContact();
});

function checkDriverNic() {
    if (/^[0-9]{9}(V)$/.test($('#dnic').val())) {
        $('#dnic').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#dnic').css('border', '3px solid red');
    }
    return false;

}

$('#dnic').on('keyup', function (event) {
    checkDriverNic();
});

function checkDuserName() {
    if (/^[A-z ]{1,}$/.test($('#duserName').val())) {
        $('#duserName').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#duserName').css('border', '3px solid red');
    }
    return false;
}


$('#duserName').on('keyup', function (event) {
    checkDuserName();
});

let Avail;
$('#rbtnExit').click(function () {
    Avail = false;
});
$('#rbtnIn').click(function () {
    Avail = true;
});

function checkAvailability() {
    if ($("#rbtnIn").prop("checked")) {
        return "true";
    } else if ($("#rbtnExit").prop("checked")) {
        return "false";
    }
    return null;
}

// save driver
$("#saveDriver").click(function () {
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let id = $("#driverID").val();
            let name = $("#drivername").val();
            let contact = $("#driverContact").val();
            let nic = $("#dnic").val();
            let username = $("#duserName").val();
            let password = $("#dPassword").val();
            let availability = checkAvailability();
            if (checkDriverID() && id != "") {
                if (checkDriverName() && name != "") {
                    if (checkDriverContact() && contact != "") {
                        if (checkDriverNic() && nic != "") {
                            if (checkDuserName() && username != "") {
                                if (password != "") {
                                    if (availability != null) {

                                        $.ajax({
                                            method: "post",
                                            url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver",
                                            contentType: "application/json",
                                            async: true,
                                            data: JSON.stringify(
                                                {
                                                    driverID: id,
                                                    name: name,
                                                    contactNo: contact,
                                                    nic: nic,
                                                    userName: username,
                                                    password: password,
                                                    available: availability
                                                }
                                            ),
                                            success: function (data) {
                                                loadAllDrivers();
                                                //   alertProsDone("Driver Saved Successfully...!");
                                                Swal.fire({
                                                    position: 'top-end',
                                                    icon: 'success',
                                                    title: 'Your work has been saved',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                                clearTextFields();

                                            }
                                        });
                                    } else {
                                        $('#rbtnIn').focus();
                                    }
                                } else {
                                    $('#dPassword').css('border', '3px solid red');
                                }
                            } else {
                                $('#duserName').css('border', '3px solid red');
                            }
                        } else {
                            $('#dnic').css('border', '3px solid red');
                        }
                    } else {
                        $('#driverContact').css('border', '3px solid red');
                    }
                } else {
                    $('#drivername').css('border', '3px solid red');
                }
            } else {
                $('#driverID').css('border', '3px solid red');
            }

        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
});

//get All
$('#getAllDriver').click(function () {
    loadAllDrivers();

    //alertProsDone("Get all click");
});

//search
$('#btnSearchDriver').click(function () {
    //alertProsDone("Get all click");
    $("#driverTbody").empty();
    let id = $("#searchDriver").val();
    if (id != "") {
        $.ajax({
            method: "get",
            url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver/' + id,
            async: true,
            dataType: 'json',
            success: function (response) {
                var data = response.data;

                $('#driverID').val(data.driverID);
                $('#drivername').val(data.name);
                $('#driverContact').val(data.contactNo);
                $('#dnic').val(data.nic);
                $('#duserName').val(data.userName);
                $('#dPassword').val(data.password);
                setRadiobtn(data.available + "");
                loadAllDrivers();
            }
        });
    } else {
        $('#driverID').css('border', '3px solid red');
    }
});

//delete
$('#delDriver').click(function () {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            let id = $("#driverID").val();
            if (checkDriverID() && id != "") {
                $.ajax({
                    method: "delete",
                    url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver/?id=' + id,
                    async: true,
                    success: function (response) {
                        loadAllDrivers();
                        alertProsDone("Driver Delete Successfully...!");
                        clearTextFields();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    },
                    error: function (response) {
                        Swal.fire(
                            'Deleted!',
                            'Cannot Found this ID',
                            'error'
                        )
                    }
                });
            } else {
                $('#driverID').css('border', '3px solid red');
            }

        }
    });


});

//update
$("#updateDriver").click(function () {
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let id = $("#driverID").val();
            let name = $("#drivername").val();
            let contact = $("#driverContact").val();
            let nic = $("#dnic").val();
            let username = $("#duserName").val();
            let password = $("#dPassword").val();
            let availability = checkAvailability();
            if (checkDriverID() && id != "") {
                if (checkDriverName() && name != "") {
                    if (checkDriverContact() && contact != "") {
                        if (checkDriverNic() && nic != "") {
                            if (checkDuserName() && username != "") {
                                if (password != "") {
                                    if (availability != null) {

                                        $.ajax({
                                            method: "put",
                                            url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver",
                                            contentType: "application/json",
                                            async: true,
                                            data: JSON.stringify(
                                                {
                                                    driverID: id,
                                                    name: name,
                                                    contactNo: contact,
                                                    nic: nic,
                                                    userName: username,
                                                    password: password,
                                                    available: availability
                                                }
                                            ),
                                            success: function (data) {
                                                loadAllDrivers();
                                                //   alertProsDone("Driver Saved Successfully...!");
                                                Swal.fire({
                                                    position: 'top-end',
                                                    icon: 'success',
                                                    title: 'Upadeted !',
                                                    showConfirmButton: false,
                                                    timer: 1500
                                                })
                                                clearTextFields();

                                            }
                                        });
                                    } else {
                                        $('#rbtnIn').focus();
                                    }
                                } else {
                                    $('#dPassword').css('border', '3px solid red');
                                }
                            } else {
                                $('#duserName').css('border', '3px solid red');
                            }
                        } else {
                            $('#dnic').css('border', '3px solid red');
                        }
                    } else {
                        $('#driverContact').css('border', '3px solid red');
                    }
                } else {
                    $('#drivername').css('border', '3px solid red');
                }
            } else {
                $('#driverID').css('border', '3px solid red');
            }

        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
});




// function checkCustomerFill() {
//     let customer = searchCustomer($('#cmbCustID option:selected').text());
//     if (customer == null) {
//         $('#cmbCustID').css('border', '3pxsolid red').focus();
//         $("#lblCustomerID").text("Select Customer ID");
//         return false;
//     }
//     $('#cmbCustID').css('border', '3px solid #0eab34').focus();
//     $("#lblCustomerID").text("");
//     return true;
// }
//clear
$('#clearDriver').click(function () {
    clearTextFields();
});

function clearTextFields() {
    $('#driverID').val("");
    $('#drivername').val("");
    $('#driverContact').val("");
    $('#dnic').val("");
    $('#duserName').val("");
    $('#dPassword').val("");
    $('#rbtnIn').attr('checked', false);
    $('#rbtnExit').attr('checked', false);
}