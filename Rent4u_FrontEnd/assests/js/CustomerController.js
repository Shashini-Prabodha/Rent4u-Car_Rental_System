$('#custOrderTab').click(function () {

});














getLastLoginData();

function getLastLoginData() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/login/lastLogUser',
        async: false,
        success: function (response) {
            let userName = response.data;
            console.log("userName login " + userName);
            getAllCustomerData(userName);
        }
    });
}

function getAllCustomerData(userName) {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/customer/get/' + userName,
        async: false,
        success: function (response) {
            let data = response.data;
            $('#custID').val(data.customerID);
            $('#custName').val(data.name);
            $('#contact').val(data.contact);
            $('#email').val(data.email);
            $('#address').val(data.address);
            $('#licence').val(data.drivingLicenceNo);
            $('#nic').val(data.nicNo);
            $('#userName').val(data.userName);
            // $('#userName').val(data.password);


        }
    });
}

function getCurrentDate() {

    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (mm + '/' + dd + '/' + yyyy);
}


function setMsg() {

}

$('#msg').click(function () {
    if ($('.popover').hasClass('in')) {
        $(this).popover('hide');
    } else {
        $(this).attr('data-mdb-content', 'Welcome\nHello');
        $(this).popover('show');
    }

});


$("#cdate").val(getCurrentDate());

//
// const date1 = new Date('7/13/2010');
// const date2 = new Date('12/15/2010');
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// console.log(diffTime + " milliseconds");
// console.log(diffDays + " days");

//get car type
function getSelectedCType() {
    let type = ($('#type option:selected').text());
    if (type != "- Car Type -") {
        $('#type').css('border', '3px solid green').focus();
        return type;

    } else {
        $('#type').css('border', '3px solid red').focus();
        return null;

    }
}

$('#type').click(function () {

    let type = getSelectedCType();
    if (type != null) {
        getCarList(type);

    } else {
        $('#type').css('border', '3px solid red').focus();
    }
});


//get car list in type
function getCarList(type) {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/get/' + type,
        async: false,
        success: function (response) {
            let data = response.data;
            loadAllCarID(data);

        }
    });
}

//load all car id in type
function loadAllCarID(data) {
    $('#cmbCarID').empty();
    $('#cmbCarID').append(`<option value=0 id="option">- Car ID -</option>`);

    for (let i in data) {
        let id = data[i].carID;

        console.log(id);
        var option = `<option value=${i} id="option">${id}</option>`;
        $('#cmbCarID').append(option);
    }
}

// get car detail in car  id
function checkSelectedcmbId() {
    let cid = ($('#cmbCarID option:selected').text());
    if (cid != "- Car ID -") {
        $('#cmbCarID').css('border', '3px solid green').focus();
        return cid;

    } else {
        $('#cmbCarID').css('border', '3px solid red').focus();
        return null;

    }
}


$('#cmbCarID').click(function () {
    let id = checkSelectedcmbId();
    if (id != null) {
        searchCar(id);

    } else {
        $('#cmbCarID').css('border', '3px solid red').focus();
    }
});

//search
function searchCar(id) {

    if (id != "") {
        $.ajax({
            method: "get",
            url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/' + id,
            async: true,
            dataType: 'json',
            success: function (response) {

                var data = response.data;
                $('#carRegNo').val(data.carID);
                $('#brand').val(data.brand);
                $('#noofpsg').val(data.numberOfPassengers);
                $('#transtype').val(data.transmissionType);
                $('#fuel').val(data.fuelType);
                $('#color').val(data.colour);
                $('#monthlyRate').val(data.monthlyRate);
                $('#dailyRate').val(data.dailyRate);
                $('#lossdw').val(data.lossDamageWaiver);
                $('#freekmd').val(data.freeKmforDay);
                $('#freekmm').val(data.freeKmforMonth);
                $('#priceexkm').val(data.priceForExtraKM)

            }
        });
    }
}


// //get Booking ID
//
// function getNewBookingID() {
//     $.ajax({
//         method: "get",
//         url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking/newBookingId',
//         async: false,
//         success: function (response) {
//             $('#bookingId').val(response.data);
//
//         }
//     });
// }


//check pickup date
function checkingPickupDate() {
    let today = $('#cdate').val();
    let val = $('#pickupDate').val();
    if (val != "" && new Date(today) <= new Date(val)) {
        $('#pickupDate').css('border', '3px solid green').focus();
        return val;
    } else {
        $('#pickupDate').css('border', '3px solid red').focus();
        return null;
    }

}


//check pickup date
function checkingReturnDate() {
    let today = $('#cdate').val();
    let pick = $('#pickupDate').val();
    let rtn = $('#returnDate').val();
    if (rtn != "" && new Date(today) <= new Date(rtn) && new Date(pick) <= new Date(rtn)) {
        $('#returnDate').css('border', '3px solid green').focus();
        return rtn;
    } else {
        $('#returnDate').css('border', '3px solid red').focus();
        return null;
    }

}

$('#pickupDate').on('change', function () {
    checkingPickupDate();
});

$('#returnDate').on('change', function () {
    checkingReturnDate();
});

function checkDriverNeed() {

    if ($("#needDriver").prop('checked') == true) {
        console.log('tick');
        return true;
    } else {
        console.log('no');
        return false;
    }
}

console.log("$('#custID').val() - " + $('#custID').val());

//send req btn
$('#sendBookingReq').click(function () {

    let today = $('#cdate').val();
    let custID = $('#custID').val();

    let pickupDate = checkingPickupDate();
    let returnDate = checkingReturnDate();
    let cType = getSelectedCType();
    let carid = checkSelectedcmbId();

    let car;
    let driver = null;
    let customer;

    if (cType != null) {
        if (carid != null) {
            if (pickupDate != null) {
                if (returnDate != null) {


                    $.ajax({
                        method: "get",
                        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/' + carid,
                        async: false,
                        dataType: 'json',
                        success: function (response) {
                            car = response.data;
                        }
                    });
                    $.ajax({
                        method: "get",
                        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/customer/' + custID,
                        async: false,
                        dataType: 'json',
                        success: function (response) {
                            customer = response.data;
                        }
                    });
                    console.log(checkDriverNeed() + " - checkDriverNeed()");

                    if (checkDriverNeed()) {
                        $.ajax({
                            method: "get",
                            url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver/read/randomDriver',
                            async: false,
                            dataType: 'json',
                            success: function (response) {
                                driver = response.data;
                            }
                        });
                    } else {
                        $.ajax({
                            method: "get",
                            url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver/' + "D0",
                            async: false,
                            dataType: 'json',
                            success: function (response) {
                                driver = response.data;
                            }
                        });
                    }
                    console.log("did " + driver + " car " + car + " cust " + customer);
                    $.ajax({
                        method: "post",
                        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking",
                        contentType: "application/json",
                        async: false,
                        data: JSON.stringify(
                            {
                                bookingID: "B",
                                date: today,
                                pickupDate: pickupDate,
                                returnDate: returnDate,
                                status: "pending",
                                customer: customer,
                                car: car,
                                driver: driver
                            }
                        ),
                        success: function (response) {
                            let data = response.data;
                            $('#cbookingID').val(data.bookingID);
                            console.log(data);
                            // loadCustBooking(data);


                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    });


                } else {
                    $('#returnDate').css('border', '3px solid red').focus();
                }
            } else {
                $('#pickupDate').css('border', '3px solid red').focus();
            }
        } else {
            $('#cmbCarID').css('border', '3px solid red').focus();

        }
    } else {
        $('#type').css('border', '3px solid red').focus();

    }

});

loadCustBooking()
//load customer booking req
function loadCustBooking(response) {
    $('#cbookingTBody').empty();

    $('#cbookingID').val(response.bookingID);
    let bookingID = (response.bookingID);
    let date = (response.date);
    let customer = response.customer.customerID;
    let car = response.car.carID;
    let pickupDate = response.pickupDate;
    let returnDate = response.returnDate;
    let driver = response.driver.driverID;
    let driverID = response[i].driver.driverID;
    if (driverID == "D0") {
        driverID = "No Need Driver";
    }
    let status = response.status;

    var row = `<tr><td>${bookingID}</td><td>${date}</td><td>${customer}</td><td>${car}</td><td>${pickupDate}</td><td>${returnDate}</td><td>${driver}</td><td>${status}</td></tr>`;
    $('#cbookingTBody').append(row);
    driverID = response[i].driver.driverID;
}


function getBookingUpdateResp() {
    let bookingID = $('#cbookingID').val();
console.log(bookingID);
if(bookingID!="") {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking' +bookingID,
        async: false,
        dataType: 'json',
        success: function (response) {
            let booking = response.data;
            loadCustBooking(booking);
        }
    });
}
}












//
// saveDefaultDriver();
// function saveDefaultDriver() {
//     $.ajax({
//         method: "post",
//         url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver",
//         contentType: "application/json",
//         async: false,
//         data: JSON.stringify(
//             {
//                 driverID: "D0",
//                 name: null,
//                 contactNo: 0,
//                 nic: null,
//                 userName: null,
//                 password: null,
//                 available: false
//             }
//         ),
//         success: function (data) {
//         }
//     });
// }


