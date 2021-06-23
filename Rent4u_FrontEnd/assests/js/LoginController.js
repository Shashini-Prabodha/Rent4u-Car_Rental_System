//login
$('#btnLogin').click(function () {

    let userName = $('#userName').val();
    let password = $('#password').val();
    if (checkInputField()) {
        $.ajax({
            method: "get",
            url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/login/' + userName + '/' + password,
            async: false,
            success: function (response) {
                var role = response.data;
                console.log(role);
                if (role == "Admin") {
                    loginSave("Admin");
                    alertify.success('Admin Login', 'success', 2);
                    location.replace("AdminDashBoard.html");
                } else if (role == "Driver") {
                    alertify.success('Driver Login', 'success', 2);
                    location.replace("DriverDashBoard.html");
                    loginSave("Driver");

                } else if (role == "Customer") {
                    alertify.success('Customer Login', 'success', 2);
                    location.replace("CustomerDashBoard.html");
                    loginSave("Customer");

                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: 'User Name or Password Not matching!' + '\n' +
                            ' Please use the Create New Button to create a new account',
                    })
                }
            }
        });
    } else {
        // $('#driverID').css('border', '3px solid red');
    }
});
//getLastId
getNewLogID();

function getNewLogID() {
    let LastLoginID=1;
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/login/newLogId',
        async: false,
        success: function (response) {
            LastLoginID = response.data;
            console.log(LastLoginID+" login 52");
        }
    });
    return LastLoginID;
}

function loginSave(role) {
    let userName = $('#userName').val();
    let password = $('#password').val();
    $.ajax({
        method: "post",
        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/login",
        contentType: "application/json",
        async: false,
        data: JSON.stringify(
            {
                loginID:getNewLogID(),
                userName:userName,
                password:password,
               role:role
            }
        ),
        success: function (response) {
            console.log("login save method done");

        }});
}


$('#userName').on('keyup', function (event) {
    checkInputField();
});

$('#password').on('keyup', function (event) {
    checkInputField();
});


//check user name
function checkInputField() {
    if ($('#userName').val() != "") {
        $('#userName').css('border', '3px solid #0eab34');
        if ($('#password').val() != "") {
            $('#password').css('border', '3px solid #0eab34');
            return true;
        } else {
            $('#password').css('border', '3px solid red');
            return false;
        }
    } else {
        $('#userName').css('border', '3px solid red');
        return false;
    }
}


//check customer name

$('#inputName').on('keyup', function (event) {
    checkCustName();
});

function checkCustName() {
    if (/^[A-z ]{1,}$/.test($('#inputName').val())) {
        $('#inputName').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputName').css('border', '3px solid red');
    }
    return false;
}

//check contact
$('#inputContactNo').on('keyup', function (event) {
    checkCustomerContact();
});

function checkCustomerContact() {
    if (/^[0-9]{10}$/.test($('#inputContactNo').val())) {
        $('#inputContactNo').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputContactNo').css('border', '3px solid red');
    }
    return false;
}


//check address
$('#inputAddress').on('keyup', function (event) {
    checkAddress();
});

function checkAddress() {
    if (/^[A-z, |0-9:./]*\b$/.test($('#inputAddress').val())) {
        $('#inputAddress').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputAddress').css('border', '3px solid red');
    }
    return false;
}

//check email
$('#inputEmail').on('keyup', function (event) {
    checkEmail();
});

function checkEmail() {
    if (/^[A-z, |0-9]{1,}(@gmail.com)$/.test($('#inputEmail').val())) {
        $('#inputEmail').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputEmail').css('border', '3px solid red');
    }
    return false;
}


//check customer nic

$('#inputNIC').on('keyup', function (event) {
    checkCustomerNic();
});

function checkCustomerNic() {
    if (/^[0-9]{9}(V)$/.test($('#inputNIC').val())) {
        $('#inputNIC').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputNIC').css('border', '3px solid red');
    }
    return false;

}

//check customer lienceid

$('#inputDrivingLicence').on('keyup', function (event) {
    checkCustomerLicenceId();
});

function checkCustomerLicenceId() {
    if (/^(B)[0-9]{7}$/.test($('#inputDrivingLicence').val())) {
        $('#inputDrivingLicence').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputDrivingLicence').css('border', '3px solid red');
    }
    return false;

}

//check user name
$('#inputUserName').on('keyup', function (event) {
    checkCustuserName();
});

function checkCustuserName() {
    if (/^[A-z ]{1,}$/.test($('#inputUserName').val())) {
        $('#inputUserName').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#inputUserName').css('border', '3px solid red');
    }
    return false;
}

//check file input 1
$('#inputfile1').on('keyup', function (event) {
    checkFileChoose1();
});

function checkFileChoose1() {
    console.log($('#inputfile1').val());

    if ($('#inputfile1').val() == '') {
        $('#inputfile1').css('border', '3px solid red');
        alertify.warning('Upload nic copy(front)');

    } else {
        $('#inputfile1').css('border', '3px solid #0eab34');

    }
    return true;

}

//check file input 2
$('#inputfile2').on('keyup', function (event) {
    checkFileChoose2();
});

function checkFileChoose2() {
    console.log($('#inputfile2').val());
    if ($('#inputfile2').val() == '') {
        $('#inputfile2').css('border', '3px solid red');
        alertify.warning('Upload nic copy(back)');

    } else {
        $('#inputfile2').css('border', '3px solid #0eab34');

    }
    return true;
}

//signup
$('#btncreate').click(function () {
        getLastCustID();

        let id = $("#custID").val();
        let name = $("#inputName").val();
        let contact = $("#inputContactNo").val();
        let address = $("#inputAddress").val();
        let email = $("#inputEmail").val();
        let licence = $("#inputDrivingLicence").val();
        let nic = $("#inputNIC").val();
        let userName = $("#inputUserName").val();
        let password = $("#inputPassword").val();
        let file1 = $("#inputfile1").val();
        let file2 = $("#inputfile2").val();

        if (id != "") {
            if (checkCustName() && name != "") {
                if (checkCustomerContact() && contact != "") {
                    if (checkAddress() && address != "") {
                        if (checkEmail() && email != "") {
                            if (checkCustomerLicenceId() && licence != "") {
                                if (checkCustomerNic() && nic != "") {
                                    console.log("check - "+checkCustomerUserNameValidity());
                                    if (checkCustomerUserNameValidity()) {
                                        if (password != null) {
                                            if (checkFileChoose1() && file1 != "") {
                                                if (checkFileChoose2() && file2 != "") {

                                            $.ajax({
                                                method: "post",
                                                url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/customer",
                                                contentType: "application/json",
                                                async: false,
                                                data: JSON.stringify(
                                                    {
                                                        customerID: id,
                                                        name: name,
                                                        contact: contact,
                                                        email: email,
                                                        address: address,
                                                        drivingLicenceNo: licence,
                                                        nicNo: nic,
                                                        userName: userName,
                                                        password: password
                                                    }
                                                ),
                                                success: function (data) {
                                                    alertify.success('Account Created! Please Login!', 'success', 2);
                                                }
                                            });
                                                } else {
                                                    $('#inputfile2').css('border', '3px solid red');
                                                }
                                            } else {
                                                $('#inputfile1').css('border', '3px solid red');
                                            }
                                        } else {
                                            $('#inputPassword').css('border', '3px solid red');
                                        }
                                    } else {
                                        $('#inputUserName').css('border', '3px solid red');
                                    }
                                } else {
                                    console.log("save error");
                                    $('#inputNIC').css('border', '3px solid red');
                                }
                            } else {
                                $('#inputDrivingLicence').css('border', '3px solid red');
                            }
                        } else {
                            $('#inputEmail').css('border', '3px solid red');
                        }
                    } else {
                        $('#inputAddress').css('border', '3px solid red');
                    }
                } else {
                    $('#inputContactNo').css('border', '3px solid red');
                }
            } else {
                $('#inputName').css('border', '3px solid red');
            }
        } else {
        }


    }
);
getLastCustID();

//getLastId
function getLastCustID() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/customer/lastId',
        async: false,
        success: function (response) {
            var data = response.data;
            console.log("data" + data);
            $('#custID').val(data)
            console.log($('#custID').val());
        }
    });
}

//check username
function checkCustomerUserNameValidity() {
    let userName = $('#inputUserName').val();
    let verify = false;
    if (checkCustuserName() && userName != "") {
        $.ajax({
            method: "get",
            url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/login/' + userName,
            async: false,
            success: function (response) {
                var resp = response.data;
                console.log("response " + resp);
                if (resp == "no") {
                    verify = true;
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Oops...',
                        text: resp,
                    });
                    $('#inputUserName').css('border', '3px solid red');
                }
            }

        });
    }
    return verify;

}

//model text clear
$("#btnClose").click(function () {
    $("#custID").val("");
    $("#inputName").val("");
    $("#inputContactNo").val("");
    $("#inputAddress").val("");
    $("#inputEmail").val("");
    $("#inputDrivingLicence").val("");
    $("#inputNIC").val("");
    $("#inputUserName").val("");
    $("#inputPassword").val("");
    $("#inputfile1").val("");
    $("#inputfile2").val("");
});
