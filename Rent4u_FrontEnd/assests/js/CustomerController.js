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
    let customer;
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

            customer = data;

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
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/get/' + type + '/in',
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

//search car by id
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
                            url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver/get/list/randomDriver',
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
                            let bid = $('#cbookingID').val(data.bookingID);
                            console.log(data);
                            getBookingUpdateResp(bid);
                            loadAllCRBooking();
                            loadOrdersByCustomer();

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


// bookingID = $('#bookingId').val();
// console.log("booking ID == "+bookingID);

//load customer booking req
// function loadCustBooking(response) {
//
//     $('#cbookingTBody').empty();
//
//     $('#cbookingID').val(response.bookingID);
//
//     let bookingID = (response.bookingID);
//     let date = (response.date);
//     let customer = response.customer.customerID;
//     let car = response.car.carID;
//     let pickupDate = response.pickupDate;
//     let returnDate = response.returnDate;
//     let driver = response.driver.driverID;
//     let driverID = response.driver.driverID;
//     let d = driverID;
//     if (driverID == "D0") {
//         d = "No Need Driver";
//     }
//     let status = response.status;
//
//     var row = `<tr><td>${bookingID}</td><td>${date}</td><td>${customer}</td><td>${car}</td><td>${pickupDate}</td><td>${returnDate}</td><td>${d}</td><td>${status}</td></tr>`;
//     $('#cbookingTBody').append(row);
// }


function getBookingUpdateResp(id) {
    let bookingID = $('#cbookingID').val();
    console.log(bookingID);
    if (bookingID != "") {
        $.ajax({
            method: "get",
            url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking/' + bookingID,
            async: false,
            dataType: 'json',
            success: function (response) {
                let booking = response.data
                loadAllCRBooking();
                //  loadCustBooking(booking);
            }
        });
    }
}

function searchCust(id) {
    let response;
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/customer/' + id,
        async: true,
        dataType: 'json',
        success: function (resp) {
            response = resp.data;
            return response;

        }
    });
}

loadOrdersByCustomer();

function loadOrdersByCustomer() {
    //
    // let userName = $('#userName').val();
    // console.log("439 - " + userName);
    // let customer;
    //
    // if (userName != "") {
    //     $.ajax({
    //         method: "get",
    //         url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/customer/get/' + userName,
    //         async: false,
    //         success: function (response) {
    //             let data = response.data;
    //
    //         }
    //     });
    //     console.log("437 - " + customer);

    let customer = $('#custID').val();

    $('#custBookingTBody').empty();
    if (customer != null) {
        $.ajax({
            method: "get",
            url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking/read/record/' + customer,
            dataType: 'json',
            success: function (resp) {
                let response = resp.data;
                for (var i in response) {
                    let orddate = (response[i].date);
                    let customerID = response[i].customer.customerID;
                    let carID = response[i].car.carID;
                    let pickupDate = response[i].pickupDate;
                    let returnDate = response[i].returnDate
                    let driverID = response[i].driver.driverID;
                    let d = driverID;
                    if (driverID == "D0") {
                        d = "No Need Driver";
                    }
                    let status = response[i].status;

                    var row = `<tr><td>${orddate}</td><td>${customerID}</td><td>${carID}</td><td>${pickupDate}</td><td>${returnDate}</td><td>${d}</td><td>${status}</td></tr>`;
                    $('#custBookingTBody').append(row);
                }
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


// loadAllbooking
loadAllCRBooking();


$("#btnRent").attr("disabled", true);


//load all req booking
function loadAllCRBooking() {

    let cid = $('#custID').val();

    $('#cbookingTBody').empty();

    $.ajax({
        method: 'GET',
        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking//get/adminResp/" + cid,
        dataType: 'json',
        async: false,
        success: function (resp) {
            let response = resp.data;
            for (var i in response) {
                let bookingID = (response[i].bookingID);
                let orddate = (response[i].date);
                let customerID = response[i].customer.customerID;
                let carID = response[i].car.carID;
                let pickupDate = response[i].pickupDate;
                let returnDate = response[i].returnDate
                let driverID = response[i].driver.driverID;
                let d = driverID;
                let status = response[i].status;
                if (driverID == "D0") {
                    d = "No Need Driver";
                }

                var row = `<tr><td>${bookingID}</td><td>${orddate}</td><td>${customerID}</td><td>${carID}</td><td>${pickupDate}</td><td>${returnDate}</td><td>${d}</td><td>${status}</td></tr>`;
                $('#cbookingTBody').append(row);

                $('#cbookingTBody tr').css({"cursor": "pointer"});
                $('#cbookingTBody tr').click(function () {

                    let bookingId = $(this).children('td:eq(0)').text();
                    let ord = $(this).children('td:eq(1)').text();
                    let custid = $(this).children('td:eq(2)').text();
                    let carid = $(this).children('td:eq(3)').text();
                    let pickup = $(this).children('td:eq(4)').text();
                    let rtndate = $(this).children('td:eq(5)').text();
                    let drvid = $(this).children('td:eq(6)').text();
                    let status = $(this).children('td:eq(7)').text();

                    $('#cbookingID').val(bookingId);
                    $('#hiddnCar').val(carid);
                    $('#hiddnCust').val(custid);
                    $('#hiddnDriver').val(drvid);
                    $('#hiddnord').val(ord);
                    $('#hiddnpick').val(pickup);
                    $('#hiddnReturn').val(rtndate);

                    if (status == "Accept") {
                        $("#btnRent").attr("disabled", false);

                        if (drvid != "No Need Driver") {
                            $('#msg').click(function () {
                                let dname;
                                let dcontact;
                                $("#btnRent").attr("disabled", true);
                                $.ajax({
                                    method: "get",
                                    url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver/' + did,
                                    async: false,
                                    dataType: 'json',
                                    success: function (response) {
                                        var data = response.data;
                                        dname = data.name;
                                        dcontact = data.contactNo;
                                        let text = ("------------Your Reqeust Accepted!------------\n * Your Driver Name - " + dname + "\n* Driver Contact - " + dcontact);
                                        if ($('.popover').hasClass('in')) {
                                            $('#msg').popover('hide');
                                        } else {
                                            $('#msg').attr('data-mdb-content', text);
                                            $('#msg').popover('show');
                                        }
                                    }
                                });

                            });
                        } else {
                            let text = ("...............Your Reqeust Accepted!.................\n Enjoy tour!");
                            $('#msg').click(function () {

                                if ($('.popover').hasClass('in')) {
                                    $('#msg').popover('hide');
                                } else {
                                    $('#msg').attr('data-mdb-content', text);
                                    $('#msg').popover('show');
                                }
                            });
                        }
                    } else if (status == "Reject") {
                        $("#btnRent").attr("disabled", true);

                        let text = ("................Request Denied !..................\nThank you for your order.\n Please try again for booking .");
                        $('#msg').click(function () {

                            if ($('.popover').hasClass('in')) {
                                $('#msg').popover('hide');
                            } else {
                                $('#msg').attr('data-mdb-content', text);
                                $('#msg').popover('show');
                            }
                        });

                    } else {
                    }

                });


            }
        }
    });
}

$('#btnDeleteOrder').click(function () {


    let bookingId = $('#cbookingID').val();
    let carid = $('#hiddnCar').val();
    let cid = $('#hiddnCust').val();
    let driverId = $('#hiddnDriver').val();
    let ordDate = $('#hiddnord').val();
    let pickupdate = $('#hiddnpick').val();
    let returnDate = $('#hiddnReturn').val();
console.log('driverId'+driverId+'book'+bookingId+'car'+carid+'cid'+cid);
    let car;
    let driver;
    let customer;
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
            $.ajax({
                method: "get",
                url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/' + carid,
                async: false,
                dataType: 'json',
                success: function (response) {
                    car = response.data;
                    console.log("car " + car);
                    updateCarinAjax(car);
                }
            });
            $.ajax({
                method: "get",
                url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/customer/' + cid,
                async: false,
                dataType: 'json',
                success: function (response) {
                    customer = response.data;
                    console.log("cust " + customer);

                }
            });

            if (driverId != "No Need Driver") {
                $.ajax({
                    method: "get",
                    url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver/' + driverId,
                    async: false,
                    dataType: 'json',
                    success: function (response) {
                        driver = response.data;
                        console.log("driver " + driver);

                        updateDriAjax(driver);
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

            $.ajax({
                method: "put",
                url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking",
                contentType: "application/json",
                async: false,
                data: JSON.stringify(
                    {
                        bookingID: bookingId,
                        date: ordDate,
                        pickupDate: pickupdate,
                        returnDate: returnDate,
                        status: "Cancel",
                        customer: customer,
                        car: car,
                        driver: driver
                    }
                ),
                success: function (data) {
                    loadAllCRBooking();
                    // Swal.fire({
                    //     position: 'top-end',
                    //     icon: 'success',
                    //     title: 'Upadeted !',
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // })

                    alertify.success('Request Sent', 'success', 2);

                }
            });

        }
    });

});

function updateCarinAjax(car) {
    $.ajax({
        method: "put",
        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car",
        contentType: "application/json",
        async: false,
        data: JSON.stringify(
            {
                carID: car.carID,
                brand: car.brand,
                type: car.type,
                numberOfPassengers: car.numberOfPassengers,
                transmissionType: car.transmissionType,
                fuelType: car.fuelType,
                colour: car.color,
                dailyRate: car.dailyRate,
                monthlyRate: car.monthlyRate,
                freeKmforMonth: car.freeKmforMonth,
                freeKmforDay: car.freeKmforDay,
                lossDamageWaiver: car.lossDamageWaiver,
                priceForExtraKM: car.priceForExtraKM,
                status: "in",
                completeKm: car.completeKm
            }
        ),
        success: function (data) {
        }
    });

}

function updateDriAjax(driver) {
    $.ajax({
        method: "put",
        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver",
        contentType: "application/json",
        async: true,
        data: JSON.stringify(
            {
                driverID: driver.driverID,
                name: driver.name,
                contactNo: driver.contactNo,
                nic: driver.nic,
                userName: driver.userName,
                password: driver.password,
                available: true
            }
        ),
        success: function (data) {
            return true;
        }
    });
}

