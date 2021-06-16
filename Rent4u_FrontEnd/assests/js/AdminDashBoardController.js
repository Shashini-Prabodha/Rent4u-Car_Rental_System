// ..............Driver section..........//
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
        $('#drivername').css('border', '3pxsolid red');
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
        $('#driverContact').css('border', '3pxsolid red');
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
        $('#dnic').css('border', '3pxsolid red');
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
        $('#duserName').css('border', '3pxsolid red');
    }
    return false;
}


$('#duserName').on('keyup', function (event) {
    checkDuserName();
});

let Avail;
$('#rbtnExit').click(function () {
    Avail = "exit";
});
$('#rbtnIn').click(function () {
    Avail = "in";
});

function checkAvailability() {
    console.log(Avail);
    return Avail
}

// save driver
$("#saveDriver").click(function () {
    let id = $("#driverID").val();
    let name = $("#drivername").val();
    let contact = $("#driverContact").val();
    let nic = $("#dnic").val();
    let username = $("#duserName").val();
    let password = $("#dPassword").val();
    let availability = checkAvailability();

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
            console.log(data);
        }
    });

});
function loadAllDrivers() {

}

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