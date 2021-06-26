// ..............DashBoard section..........//
$(document).ready(function () {
    getCountRegCust();
    getCountACars();
    getCountAvailDrivers();
    getCountMaintainceCar();
});

$('#adminOrdTab').click(function () {
    loadAllBooking();
});

//get count customer
function getCountRegCust() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/customer/custCount',
        async: true,
        success: function (response) {
            var resp = response.data;
            console.log(resp);
            $('#countCust').text(resp);
        }

    });
}

//get count available cars
function getCountACars() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/count/in',
        async: true,
        success: function (response) {
            var resp = response.data;
            console.log(resp);
            $('#countAcars').text(resp);
        }

    });
}

//get count available cars
function getCountAvailDrivers() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver/count/' + true,
        async: true,
        success: function (response) {
            var resp = response.data;
            console.log(resp);
            $('#countADrivers').text(resp);
        }

    });
}


//get count maintanice cars
function getCountMaintainceCar() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/maintaince/count',
        async: true,
        success: function (response) {
            var resp = response.data;
            console.log(resp);
            $('#countNeedMaintainceC').text(resp);
        }

    });
}



// ..............Car section..........//



//check carID
$('#carRegNo').on('keyup', function (event) {
    checkCarID();
});

function checkCarID() {
    if (/^[A-z ]{1,3}(-)[0-9]{4}$/.test($('#carRegNo').val())) {
        $('#carRegNo').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#carRegNo').css('border', '3px solid red');
    }
    return false;
}

$('#brand').on('keyup', function (event) {
    checkBrand();
});

//check brand
function checkBrand() {
    if (/^[A-z, |0-9:./]*\b$/.test($('#brand').val())) {
        $('#brand').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#brand').css('border', '3px solid red');
    }
    return false;
}

$('#type').click(function () {
    getSelectedCType();
});


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

//check no of passengers
$('#noofpsg').on('keyup', function (event) {
    checkNoOfPassenger();
});

$("#noofpsg").bind('keyup input', function () {
    checkNoOfPassenger();

});

function checkNoOfPassenger() {
    console.log($('#noofpsg').val());
    if ($('#noofpsg').val() > 0 & $('#noofpsg').val() != "") {
        $('#noofpsg').css('border', '3px solid green').focus();
        console.log("if")
        return true;
    } else {
        $('#noofpsg').css('border', '3px solid red').focus();
        console.log("else")

        return false;
    }
}

//check transmition type
$('#transmissionType').click(function () {
    checkTranstype();
});

function checkTranstype() {
    let type = ($('#transmissionType option:selected').text());
    if (type != "- Transmi: Type -") {
        $('#transmissionType').css('border', '3px solid green').focus();
        return type;

    } else {
        $('#transmissionType').css('border', '3px solid red').focus();
        return null;

    }
}

//check fuel type
$('#fuelType').click(function () {
    checkFueltype();
});


function checkFueltype() {
    let type = ($('#fuelType option:selected').text());
    if (type != "- Fuel Type -") {
        $('#fuelType').css('border', '3px solid green').focus();
        return type;

    } else {
        $('#fuelType').css('border', '3px solid red').focus();
        return null;

    }
}


//check color
$('#color').click(function () {
    checkColor();
});

function checkColor() {
    let type = ($('#color option:selected').text());
    if (type != "- Choose colour -") {
        $('#color').css('border', '3px solid green').focus();
        return type;

    } else {
        $('#color').css('border', '3px solid red').focus();
        return null;
    }
}

//check daily rate
$('#dailyrate').on('keyup', function (event) {
    checkDRate();
});

function checkDRate() {
    if (/^[0-9.]{1,}$/.test($('#dailyrate').val())) {
        $('#dailyrate').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#dailyrate').css('border', '3px solid red');
    }
    return false;
}

//check monthly rate
$('#monthlyrate').on('keyup', function (event) {
    checkMRate();
});

function checkMRate() {
    if (/^[0-9.]{1,}$/.test($('#monthlyrate').val())) {
        $('#monthlyrate').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#monthlyrate').css('border', '3px solid red');
    }
    return false;
}


//loose damage waiver
$('#lossdamage').on('keyup', function (event) {
    checkLossDm();
});

function checkLossDm() {
    if (/^[0-9.]{1,}$/.test($('#lossdamage').val())) {
        $('#lossdamage').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#lossdamage').css('border', '3px solid red');
    }
    return false;
}


//for month free millage
$('#fdprice').on('keyup', function (event) {
    checkFMforDay();
});

function checkFMforDay() {
    if (/^[0-9.]{1,}$/.test($('#fdprice').val())) {
        $('#fdprice').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#fdprice').css('border', '3px solid red');
    }
    return false;
}


//for month free millage
$('#fmprice').on('keyup', function (event) {
    checkFMforMonth();
});

function checkFMforMonth() {
    if (/^[0-9.]{1,}$/.test($('#fmprice').val())) {
        $('#fmprice').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#fmprice').css('border', '3px solid red');
    }
    return false;
}


//check price for extra km
$('#priceforextrakm').on('keyup', function (event) {
    checkExtraPforkm();
});

function checkExtraPforkm() {
    if (/^[0-9.]{1,}$/.test($('#priceforextrakm').val())) {
        $('#priceforextrakm').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#priceforextrakm').css('border', '3px solid red');
    }
    return false;
}


//clear function
function clearCarTextFields() {
    $('#carRegNo').val("");
    $('#brand').val("");
    $('#noofpsg').val("");
    $('#monthlyrate').val("");
    $('#dailyrate').val("");
    $('#lossdamage').val("");
    $('#fmprice').val("");
    $('#fdprice').val("");
    $('#priceforextrakm').val("");
    $("#addToMaintaince").attr("disabled", true);

    //clear combo
    $('#fuelType')[0].selectedIndex = 0;
    $('#color')[0].selectedIndex = 0;
    $('#transmissionType')[0].selectedIndex = 0;
    $('#type')[0].selectedIndex = 0;
    $('#carRegNo,#brand,#noofpsg,#monthlyrate,#dailyrate,#lossdamage,#fdprice,#fmprice,#priceforextrakm,#fuelType,#color,#transmissionType,#type').removeAttr("style");
}

$('#clearCar').click(function () {
    clearCarTextFields();

});

// loadAllCars();
loadAllCars();

//load driver
function loadAllCars() {
    $('.carTbody').empty();
    $.ajax({
        method: 'GET',
        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car",
        dataType: 'json',
        success: function (resp) {

            let response = resp.data;
            for (var i in response) {
                let id = (response[i].carID);
                let brand = (response[i].brand);
                let type = response[i].type;
                let noOfps = response[i].numberOfPassengers;
                let transmissionType = response[i].transmissionType;
                let fuelType = response[i].fuelType;
                let colour = response[i].colour;
                let monthlyRate = response[i].monthlyRate;
                let dailyRate = response[i].dailyRate;
                let lossDamageWaiver = response[i].lossDamageWaiver;
                let freeKmforDay = response[i].freeKmforDay;
                let freeKmforMonth = response[i].freeKmforMonth;
                let priceForExtraKM = response[i].priceForExtraKM;
                let status = response[i].status;
                let completeKm = response[i].completeKm;

                var row = `<tr><td>${id}</td><td>${brand}</td><td>${type}</td><td>${noOfps}</td><td>${transmissionType}
                            </td><td>${fuelType}</td><td>${colour}</td><td>${monthlyRate}</td><td>${dailyRate}</td>
                            <td>${lossDamageWaiver}</td><td>${freeKmforDay}</td><td>${freeKmforMonth}</td><td>${priceForExtraKM}</td><td>${status}</td><td>${completeKm}</td></tr>`;
                $('.carTbody').append(row);

                $('.carTbody tr').css({"cursor": "pointer"});
                $('.carTbody tr').click(function () {

                    let id = $(this).children('td:eq(0)').text();
                    let brand = $(this).children('td:eq(1)').text();
                    let type = $(this).children('td:eq(2)').text();
                    let noOfps = $(this).children('td:eq(3)').text();
                    let transmissionType = $(this).children('td:eq(4)').text();
                    let fuelType = $(this).children('td:eq(5)').text();
                    let colour = $(this).children('td:eq(6)').text();
                    let monthlyRate = $(this).children('td:eq(7)').text();
                    let dailyRate = $(this).children('td:eq(8)').text();
                    let lossDamageWaiver = $(this).children('td:eq(9)').text();
                    let freeKmforDay = $(this).children('td:eq(10)').text();
                    let freeKmforMonth = $(this).children('td:eq(11)').text();
                    let priceForExtraKM = $(this).children('td:eq(12)').text();
                    let status = $(this).children('td:eq(13)').text();
                    let completeKm = $(this).children('td:eq(14)').text();


                    $('#carRegNo').val(id);
                    $('#brand').val(brand);
                    $('#type')[0].selectedIndex = setCarType(type);
                    $('#noofpsg').val(noOfps);
                    $('#transmissionType')[0].selectedIndex = setTransType(transmissionType);
                    $('#fuelType')[0].selectedIndex = setFuelType(fuelType);
                    $('#color')[0].selectedIndex = setColor(colour);
                    $('#monthlyrate').val(monthlyRate);
                    $('#dailyrate').val(dailyRate);
                    $('#lossdamage').val(lossDamageWaiver);
                    $('#fdprice').val(freeKmforDay);
                    $('#fmprice').val(freeKmforMonth);
                    $('#priceforextrakm').val(priceForExtraKM)
                    $("#addToMaintaince").attr("disabled", true);
                    checkMaintaince(status, completeKm);
                    getCarImg();

                });

            }
        }
    });
}

//check Maintaince
function checkMaintaince(status, completeKm) {
    if (completeKm >= 5000) {
        Swal.fire({
            icon: 'info',
            title: 'Attention...!',
            text: 'This car needs to be maintained. The distance covered is 5000 km ',
        });
        $("#addToMaintaince").attr("disabled", false);

    }
}

//set car type
function setCarType(type) {
    if (type == "Genaral") {
        return 1;
    } else if (type = "Premium") {
        return 2;
    }
    return 3;
}

//set transmition type
function setTransType(type) {
    type = type.trim();

    if (type == "Manual") {
        console.log("type");
        return 1;
    }
    return 2;
}

//set fuel type
function setFuelType(type) {
    if (type == "Petrol") {
        return 1;
    }
    return 2;
}

//check file input car
$('#formFile').on('keyup', function (event) {
    checkCarUpload();
});

function checkCarUpload() {
    console.log($('#formFile').val());

    if ($('#formFile').val() == '') {
        $('#formFile').css('border', '3px solid red');
        alertify.warning('Upload Car photo');

    } else {
        $('#formFile').css('border', '3px solid #0eab34');

    }
    return true;

}

//set color type
function setColor(type) {
    var val;
    switch (type) {
        case "Black":
            val = 1;
            break;
        case "Blue":
            val = 2;
            break;
        case "White":
            val = 3;
            break;
        case "Orange":
            val = 4;
            break;
        case "Silver":
            val = 5;
            break;
        case "Red":
            val = 6;
            break;
    }
    return val;
}


//delete car
$('#delCar').click(function () {
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
            let id = $("#carRegNo").val();
            if (checkCarID() && id != "") {
                $.ajax({
                    method: "delete",
                    url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/?id=' + id,
                    async: true,
                    success: function (response) {
                        loadAllCars();
                        clearCarTextFields();
                        Swal.fire(
                            'Deleted!',
                            'Car Delete Successfully...',
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
                $('#carRegNo').css('border', '3px solid red');
            }

        }
    });


});

// save car
$("#saveCar").click(function () {
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let carReg = $('#carRegNo').val();
            let brand = $('#brand').val();
            let cType = getSelectedCType();
            let noofpsg = $('#noofpsg').val();
            let transtype = checkTranstype();
            let fueltype = checkFueltype();
            let color = checkColor();
            let dailyrate = $('#dailyrate').val();
            let monthlyrate = $('#monthlyrate').val();
            let fmprice = $('#fmprice').val();
            let fdprice = $('#fdprice').val();
            let lossdamage = $('#lossdamage').val();
            let priceforexkm = $('#priceforextrakm').val();
            let status = "in";
            let completeKm = 0;
            let file = $('#formFile').val();



            if (checkCarID() && carReg != "") {
                if (checkBrand() && brand != "") {
                    if (cType != null) {
                        if (checkNoOfPassenger() && noofpsg != "") {
                            if (transtype != null) {
                                if (fueltype != null) {
                                    if (color != null) {
                                        if (checkDRate() && dailyrate != "") {
                                            if (checkMRate() && monthlyrate != "") {
                                                if (checkFMforMonth() && fmprice != "") {
                                                    if (checkFMforDay() && fdprice != "") {
                                                        if (checkLossDm() && lossdamage != "") {
                                                            if (checkExtraPforkm() && priceforexkm != "") {
                                                                if(checkCarUpload() && file!=""){
                                                                $.ajax({
                                                                    method: "post",
                                                                    url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car",
                                                                    contentType: "application/json",
                                                                    async: true,
                                                                    data: JSON.stringify(
                                                                        {
                                                                            carID: carReg,
                                                                            brand: brand,
                                                                            type: cType,
                                                                            numberOfPassengers: noofpsg,
                                                                            transmissionType: transtype,
                                                                            fuelType: fueltype,
                                                                            colour: color,
                                                                            dailyRate: dailyrate,
                                                                            monthlyRate: monthlyrate,
                                                                            freeKmforMonth: fmprice,
                                                                            freeKmforDay: fdprice,
                                                                            lossDamageWaiver: lossdamage,
                                                                            priceForExtraKM: priceforexkm,
                                                                            status: status,
                                                                            completeKm: completeKm
                                                                        }
                                                                    ),
                                                                    success: function (data) {
                                                                        uploadFiles();
                                                                        loadAllCars();
                                                                        Swal.fire({
                                                                            position: 'top-end',
                                                                            icon: 'success',
                                                                            title: 'Your work has been saved',
                                                                            showConfirmButton: false,
                                                                            timer: 1500
                                                                        })
                                                                        clearCarTextFields();
                                                                    }
                                                                });
                                                                } else {
                                                                    $('#formFile').css('border', '3px solid red');
                                                                }
                                                            } else {
                                                                $('#priceforextrakm').css('border', '3px solid red');
                                                            }
                                                        } else {
                                                            $('#lossdamage').css('border', '3px solid red');
                                                        }
                                                    } else {
                                                        $('#fdprice').css('border', '3px solid red');
                                                    }
                                                } else {
                                                    $('#fmprice').css('border', '3px solid red');
                                                }
                                            } else {
                                                $('#monthlyrate').css('border', '3px solid red');
                                            }
                                        } else {
                                            $('#dailyrate').css('border', '3px solid red');
                                        }
                                    } else {
                                        $('#color').css('border', '3px solid red');
                                    }
                                } else {
                                    $('#fuelType').css('border', '3px solid red');
                                }
                            } else {
                                $('#transmissionType').css('border', '3px solid red');
                            }
                        } else {
                            $('#noofpsg').css('border', '3px solid red');
                        }
                    } else {
                        $('#type').css('border', '3px solid red');
                    }
                } else {
                    $('#brand').css('border', '3px solid red');
                }
            } else {
                $('#carRegNo').css('border', '3px solid red');
            }
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
});

function uploadFiles() {
    let carReg = $('#carRegNo').val();

    var file = $("#formFile")[0].files[0];//access file object from input field
    var fileName= carReg+"."+($("#formFile")[0].files[0].name).split('.')[1]; //get file name

    var data = new FormData(); //setup form data object to send file data
    data.append("car", file, fileName); //append data

    $.ajax({
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/up',
        method: 'post',
        async: true,
        processData: false, //stop processing data of request body
        contentType: false, // stop setting content type by jQuery
        data: data,
        success: function () {
            // alert("File Uploaded");
        }
    });

}

function getCarImg() {
    let carReg = $('#carRegNo').val();
let path='../car/'+carReg+'.png';
console.log(path);
    $("#output").attr("src",path);
}

//search
$('#btnSearchCar').click(function () {
    //alertProsDone("Get all click");
    $(".carTbody").empty();
    let id = $("#searchCar").val();
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
                $('#type')[0].selectedIndex = setCarType(data.type);
                $('#noofpsg').val(data.numberOfPassengers);
                $('#transmissionType')[0].selectedIndex = setTransType(data.transmissionType);
                $('#fuelType')[0].selectedIndex = setFuelType(data.fuelType);
                $('#color')[0].selectedIndex = setColor(data.colour);
                $('#monthlyrate').val(data.monthlyRate);
                $('#dailyrate').val(data.dailyRate);
                $('#lossdamage').val(data.lossDamageWaiver);
                $('#fdprice').val(data.freeKmforDay);
                $('#fmprice').val(data.freeKmforMonth);
                $('#priceforextrakm').val(data.priceForExtraKM)
                $("#addToMaintaince").attr("disabled", true);
                checkMaintaince(data.status, data.completeKm);
                getCarImg();
                loadAllCars();
            }
        });
    } else {
        $('#driverID').css('border', '3px solid red');
    }
});

// update car
$("#updateCar").click(function () {
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Save`,
        denyButtonText: `Don't save`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let carReg = $('#carRegNo').val();
            let brand = $('#brand').val();
            let cType = getSelectedCType();
            let noofpsg = $('#noofpsg').val();
            let transtype = checkTranstype();
            let fueltype = checkFueltype();
            let color = checkColor();
            let dailyrate = $('#dailyrate').val();
            let monthlyrate = $('#monthlyrate').val();
            let fmprice = $('#fmprice').val();
            let fdprice = $('#fdprice').val();
            let lossdamage = $('#lossdamage').val();
            let priceforexkm = $('#priceforextrakm').val();
            let status = "in";
            let completeKm = 0;


            if (checkCarID() && carReg != "") {
                if (checkBrand() && brand != "") {
                    if (cType != null) {
                        if (checkNoOfPassenger() && noofpsg != "") {
                            if (transtype != null) {
                                if (fueltype != null) {
                                    if (color != null) {
                                        if (checkDRate() && dailyrate != "") {
                                            if (checkMRate() && monthlyrate != "") {
                                                if (checkFMforMonth() && fmprice != "") {
                                                    if (checkFMforDay() && fdprice != "") {
                                                        if (checkLossDm() && lossdamage != "") {
                                                            if (checkExtraPforkm() && priceforexkm != "") {
                                                                $.ajax({
                                                                    method: "put",
                                                                    url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car",
                                                                    contentType: "application/json",
                                                                    async: true,
                                                                    data: JSON.stringify(
                                                                        {
                                                                            carID: carReg,
                                                                            brand: brand,
                                                                            type: cType,
                                                                            numberOfPassengers: noofpsg,
                                                                            transmissionType: transtype,
                                                                            fuelType: fueltype,
                                                                            colour: color,
                                                                            dailyRate: dailyrate,
                                                                            monthlyRate: monthlyrate,
                                                                            freeKmforMonth: fmprice,
                                                                            freeKmforDay: fdprice,
                                                                            lossDamageWaiver: lossdamage,
                                                                            priceForExtraKM: priceforexkm,
                                                                            status: status,
                                                                            completeKm: completeKm
                                                                        }
                                                                    ),
                                                                    success: function (data) {
                                                                        loadAllCars();
                                                                        Swal.fire({
                                                                            position: 'top-end',
                                                                            icon: 'success',
                                                                            title: 'Your work has been saved',
                                                                            showConfirmButton: false,
                                                                            timer: 1500
                                                                        })
                                                                        clearCarTextFields();
                                                                    }
                                                                });

                                                            } else {
                                                                $('#priceforextrakm').css('border', '3px solid red');
                                                            }
                                                        } else {
                                                            $('#lossdamage').css('border', '3px solid red');
                                                        }
                                                    } else {
                                                        $('#fdprice').css('border', '3px solid red');
                                                    }
                                                } else {
                                                    $('#fmprice').css('border', '3px solid red');
                                                }
                                            } else {
                                                $('#monthlyrate').css('border', '3px solid red');
                                            }
                                        } else {
                                            $('#dailyrate').css('border', '3px solid red');
                                        }
                                    } else {
                                        $('#color').css('border', '3px solid red');
                                    }
                                } else {
                                    $('#fuelType').css('border', '3px solid red');
                                }
                            } else {
                                $('#transmissionType').css('border', '3px solid red');
                            }
                        } else {
                            $('#noofpsg').css('border', '3px solid red');
                        }
                    } else {
                        $('#type').css('border', '3px solid red');
                    }
                } else {
                    $('#brand').css('border', '3px solid red');
                }
            } else {
                $('#carRegNo').css('border', '3px solid red');
            }
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    })
});


// ..............Customer section..........//
// loadAllCustomers
loadAllCustomers();

//load customers
function loadAllCustomers() {
    $('.customerTbody').empty();
    $.ajax({
        method: 'GET',
        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/customer",
        dataType: 'json',
        success: function (resp) {
            let response = resp.data;
            for (var i in response) {
                let id = (response[i].customerID);
                let name = (response[i].name);
                let contactNo = response[i].contact;
                let email = response[i].email;
                let address = response[i].address;
                let drivingLicenceNo = response[i].drivingLicenceNo;
                let nicNo = response[i].nicNo;

                var row = `<tr><td>${id}</td><td>${name}</td><td>${contactNo}</td><td>${email}</td><td>${address}</td><td>${drivingLicenceNo}</td><td>${nicNo}</td></tr>`;
                $('.customerTbody').append(row);

                // $('#tblDriver #driverTbody tr').css({"cursor": "pointer"});
                // $('#tblDriver #driverTbody tr').click(function () {
                //
                //     let id = $(this).children('td:eq(0)').text();
                //     let name = $(this).children('td:eq(1)').text();
                //     let contactNo = $(this).children('td:eq(2)').text();
                //     let email = $(this).children('td:eq(3)').text();
                //     let address = $(this).children('td:eq(4)').text();
                //     let drivingLicenceNo = $(this).children('td:eq(5)').text();
                //     let nicNo = $(this).children('td:eq(6)').text();


                // });


            }
        }
    });
}


//search
$('#btnSearchCust').click(function () {
    //alertProsDone("Get all click");
    $(".customerTbody").empty();
    let id = $("#searchCustomer").val();
    if (id != "") {
        $.ajax({
            method: "get",
            url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/customer/' + id,
            async: true,
            dataType: 'json',
            success: function (resp) {
                var response = resp.data;

                let id = (response[i].customerID);
                let name = (response[i].name);
                let contactNo = response[i].contact;
                let email = response[i].email;
                let address = response[i].address;
                let drivingLicenceNo = response[i].drivingLicenceNo;
                let nicNo = response[i].nicNo;


                var row = `<tr><td>${id}</td><td>${name}</td><td>${contactNo}</td><td>${email}</td><td>${address}</td><td>${drivingLicenceNo}</td><td>${nicNo}</td></tr>`;
                $('.customerTbody').append(row);
            }
        });
    } else {
        $('#driverID').css('border', '3px solid red');
    }
});


// ..............Booking section..........//

// loadAllbooking
loadAllBooking();

//load customers
function loadAllBooking() {
    $('#bookingTBody').empty();
    $.ajax({
        method: 'GET',
        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking",
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
                if (driverID == "D0") {
                    d = "No Need Driver";
                }
                let status = response[i].status;

                var row = `<tr><td>${bookingID}</td><td>${orddate}</td><td>${customerID}</td><td>${carID}</td><td>${pickupDate}</td><td>${returnDate}</td><td>${d}</td><td>${status}</td></tr>`;
                $('#bookingTBody').append(row);

            }
        }
    });
}


// loadAllbooking
loadAllRBooking();

//load all req booking
function loadAllRBooking() {
    $('#bookingReqTBody').empty();

    $.ajax({
        method: 'GET',
        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking/get/pending",
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

                var row = `<tr><td>${bookingID}</td><td>${orddate}</td><td>${customerID}</td><td>${carID}</td><td>${pickupDate}</td><td>${returnDate}</td><td>${d}</td><td>${status}</td>
                            <td><button type="button" class="btn btn-success rounded-pill btn-sm px-3" id="accept"><i class="far fa-check-circle fa-2x"></i></button>
                                </td><td><button type="button" class="btn btn-danger rounded-pill btn-sm px-3"" id="reject"><i class="fas fa-trash-alt fa-2x"></i></button></td></tr>`;
                $('#bookingReqTBody').append(row);


                $('#tblReqBooking #bookingReqTBody').on('click', "#accept", function () {
                    let closest = $(this).closest('tr');

                    let bookingId = closest.find('td:eq(0)').text();
                    let ordDate = closest.find('td:eq(1)').text();
                    let cid = closest.find('td:eq(2)').text();
                    let carid = closest.find('td:eq(3)').text();
                    let pickupdate = closest.find('td:eq(4)').text();
                    let returnDate = closest.find('td:eq(5)').text();
                    let driverId = closest.find('td:eq(6)').text();
                    let status = "Accept";
                    updateBooking(bookingId, ordDate, cid, carid, pickupdate, returnDate, driverId, status);

                });

                $('#tblReqBooking #bookingReqTBody').on('click', "#reject", function () {
                    let closest = $(this).closest('tr');

                    let bookingId = closest.find('td:eq(0)').text();
                    let ordDate = closest.find('td:eq(1)').text();
                    let cid = closest.find('td:eq(2)').text();
                    let carid = closest.find('td:eq(3)').text();
                    let pickupdate = closest.find('td:eq(4)').text();
                    let returnDate = closest.find('td:eq(5)').text();
                    let driverId = closest.find('td:eq(6)').text();
                    let status = "Reject";
                    updateBooking(bookingId, ordDate, cid, carid, pickupdate, returnDate, driverId, status);
                });


            }
        }
    });
}

function updateBooking(bookingId, ordDate, cid, carid, pickupdate, returnDate, driverId, status) {
    console.log("bookingId " + bookingId + " " + cid + " " + driverId + " " + carid);


    let car = null;
    let driver = null;
    let customer = null;
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/' + carid,
        async: false,
        dataType: 'json',
        success: function (response) {
            car = response.data;
            console.log("car " + car);
            if (status == "Accept") {
                updateCarAjax(car);
            }
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
                if (status == "Accept") {
                    updateDriverAjax(driver);
                }
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
                status: status,
                customer: customer,
                car: car,
                driver: driver
            }
        ),
        success: function (data) {
            loadAllRBooking();
            // Swal.fire({
            //     position: 'top-end',
            //     icon: 'success',
            //     title: 'Upadeted !',
            //     showConfirmButton: false,
            //     timer: 1500
            // })

            alertify.success('Request Sent', 'success', 2);
            clearDriverTextFields();

        }
    });
}

function updateCarAjax(car) {
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
                colour: car.colour,
                dailyRate: car.dailyRate,
                monthlyRate: car.monthlyRate,
                freeKmforMonth: car.freeKmforMonth,
                freeKmforDay: car.freeKmforDay,
                lossDamageWaiver: car.lossDamageWaiver,
                priceForExtraKM: car.priceForExtraKM,
                status: "Booking",
                completeKm: car.completeKm
            }
        ),
        success: function (data) {
            loadAllCars();

            clearCarTextFields();
        }
    });

}

// ..............Driver section..........//

// loadAllDrivers();
loadAllDrivers();

//load driver
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
                if (id != "D0") {
                    var row = `<tr><td>${id}</td><td>${name}</td><td>${contactNo}</td><td>${nic}</td><td>${userName}</td><td>${password}</td><td>${available}</td></tr>`;
                    $('#driverTbody').append(row);

                    $('#tblDriver #driverTbody tr').css({"cursor": "pointer"});
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
        }
    });
}

//set radio btn
function setRadiobtn(avalabilty) {

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

//check driverID
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

//check driver name
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

//check user nic
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

//check user name
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

// rbtn process
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
                                                clearDriverTextFields();

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
                        clearDriverTextFields();

                        Swal.fire(
                            'Deleted!',
                            'Driver Delete Successfully...',
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
                                                clearDriverTextFields();
                                                return true;
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

function updateDriverAjax(driver) {
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
                available: false
            }
        ),
        success: function (data) {
            loadAllDrivers();
            clearDriverTextFields();
            return true;
        }
    });
}

//clear
$('#clearDriver').click(function () {
    clearDriverTextFields();
});

//clear driver function
function clearDriverTextFields() {
    $('#driverID').val("");
    $('#drivername').val("");
    $('#driverContact').val("");
    $('#dnic').val("");
    $('#duserName').val("");
    $('#dPassword').val("");
    $('#rbtnIn').attr('checked', false);
    $('#rbtnExit').attr('checked', false);
}

//......................payment section..................................

//load all payments
loadAllPayments();

function loadAllPayments() {
    $('#adminPaymentTBody').empty();
    $.ajax({
        method: 'GET',
        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/payment",
        dataType: 'json',
        async: true,
        success: function (resp) {
            let response = resp.data;
            for (var i in response) {

                let pid = response[i].paymentID;
                let orddate = response[i].date;
                let amount = response[i].amount;
                let description = response[i].description;
                let bookingID = response[i].booking.bookingID;

                var row = `<tr><td>${pid}</td><td>${orddate}</td><td>${amount}</td><td>${description}</td><td>${bookingID}</td></tr>`;
                $('#adminPaymentTBody').append(row);

            }
        }
    });
}

//...................booking return section......................

function getCurrentDate() {

    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (yyyy + '-' + mm + '-' + dd);
}

$('#today').val(getCurrentDate());

let book = null;
let paymentOb = null;
//search payment
$('#btnSearchPid').click(function () {
    let pid = $('#searchPid').val();
    let today = $('#today').val();


    if (pid != "") {

        $.ajax({
            method: 'GET',
            url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/payment/" + pid,
            dataType: 'json',
            async: true,
            success: function (resp) {
                let response = resp.data;
                paymentOb = response;

                let payid = response.paymentID;
                let orddate = response.date;
                let amount = response.amount;
                let description = response.description;
                let booking = response.booking;
                book = booking;
                $('#paylastAmount').val(amount);
                $('#paylastDesc').val(description);
                $('#bookingId').val(booking.bookingID);
                $('#pickup').val(booking.pickupDate);
                $('#returnDate').val(booking.returnDate);

                let did = booking.driver.driverID;
                if (did == "No Need Driver") {
                    $('#driver').val("No");
                } else {
                    $('#driver').val(did);
                }

                $('#driver').val();

                let dateDiff = getDateDiff(today, $('#pickup').val());

                let dailyRate = booking.car.dailyRate;
                let prcexkm = booking.car.priceForExtraKM;
                let freekmd = booking.car.freeKmforDay;


                $('#rentforusingDate').val(dailyRate * dateDiff);

                if ($('#driver').val() == "No") {
                    $('#driverpayment').val(0);
                    $('#driverpayment').attr("disabled", true);

                } else {
                    $('#driverpayment').val(dateDiff * 1000);

                }
            }
        });

    }
});


function getDateDiff(today, pick) {

    const date1 = new Date(today);
    const date2 = new Date(pick);
    const diffTime = Math.abs(date1 - date2);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " diffDays");
    return diffDays;
}

function calPriceforExtrakm(freekmd, prcexkm, dateDiff) {
    let totkm = $('#totkm').val();
    freekmd = freekmd * dateDiff;
    if (freekmd >= totkm) {
        $('#priceExkm').val("00");
    } else {
        let km = totkm - freekmd;
        $('#priceExkm').val(km * prcexkm);
    }
}

$('#calPayment').click(function () {
    let today = $('#today').val();

    let lastPayment = $('#paylastAmount').val();
    let driverPay = $('#driverpayment').val();
    let dmg = $('#dmgPayment').val();
    let rentforDate = $('#rentforusingDate').val();
    let totkm = $('#totkm').val();

    let booking = book;
    let dateDiff = getDateDiff(today, $('#pickup').val());

    let prcexkm = booking.car.priceForExtraKM;
    console.log("prcexkm - " + prcexkm)
    let freekmd = booking.car.freeKmforDay;

    calPriceforExtrakm(freekmd, prcexkm, dateDiff);

    let pcekm = $('#priceExkm').val();


    if (checkDmgPay() && dmg != "") {
        if (checkTotKm() && totkm != "") {
            let tot = parseFloat(driverPay) + parseFloat(dmg) + parseFloat(rentforDate) + parseFloat(pcekm);
            console.log(tot + " tot");
            $('#total').val(tot);
            $('#balance').val(parseFloat(lastPayment) - parseFloat(tot));

        } else {
            $('#dmgPayment').css('border', '3px solid red');
        }
    } else {
        $('#dmgPayment').css('border', '3px solid red');
    }


});

//loose damage waiver payment
$('#dmgPayment').on('keyup', function (event) {
    checkDmgPay();
});

function checkDmgPay() {
    if (/^[0-9.]{1,}$/.test($('#dmgPayment').val())) {
        $('#dmgPayment').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#dmgPayment').css('border', '3px solid red');
    }
    return false;
}

//totle km
$('#totkm').on('keyup', function (event) {
    checkTotKm();
});

function checkTotKm() {
    if (/^[0-9.]{1,}$/.test($('#dmgPayment').val())) {
        $('#totkm').css('border', '3px solid #0eab34');
        return true;
    } else {
        $('#totkm').css('border', '3px solid red');
    }
    return false;
}


$('#submitPayment').click(function () {
    let booking = book;
    let payment = paymentOb;
    let pid = $('#searchPid').val();
    let today = $('#today').val();

    let lastPayment = $('#paylastAmount').val();
    let tot = $('#total').val();
    let totkm = $('#totkm').val();
    let bookingid = $('#bookingId').val();
    let driverid = $('#driver').val();

    let car = booking.car;
    let driver = booking.driver;
    let newDriver = null;
    let lastCkm = car.completeKm;

    let lcompletekm = parseFloat(lastCkm) + parseFloat(totkm);

    console.log('driverid' + driverid);

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
                colour: car.colour,
                dailyRate: car.dailyRate,
                monthlyRate: car.monthlyRate,
                freeKmforMonth: car.freeKmforMonth,
                freeKmforDay: car.freeKmforDay,
                lossDamageWaiver: car.lossDamageWaiver,
                priceForExtraKM: car.priceForExtraKM,
                status: "in",
                completeKm: lcompletekm
            }
        ),
        success: function (data) {
            loadAllCars();
        }
    });


    if (driverid != "No") {
        console.log('driverid2' + driverid);

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
                console.log('driverid2' + driver.driverID);
                newDriver = data.data;


                loadAllDrivers();
                $.ajax({
                    method: "put",
                    url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking",
                    contentType: "application/json",
                    async: false,
                    data: JSON.stringify(
                        {
                            bookingID: booking.bookingID,
                            date: booking.date,
                            pickupDate: booking.pickupDate,
                            returnDate: booking.returnDate,
                            status: "Done",
                            customer: booking.customer,
                            car: car,
                            driver: newDriver
                        }
                    ),
                    success: function (response) {
                        let b = response.data;

                        loadAllBooking();

                        $.ajax({
                            method: "put",
                            url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/payment",
                            async: false,
                            contentType: "application/json",
                            data: JSON.stringify(
                                {
                                    paymentID: pid,
                                    date: today,
                                    amount: tot,
                                    description: "All Renting Payment Complete",
                                    booking: b
                                }
                            ),
                            success: function (response) {
                                loadAllPayments();
                                alertify.success('Payment Success', 'success', 2);
                            }
                        });
                    }
                });

            }
        });
    }
    // } else {
    //     $.ajax({
    //         method: "get",
    //         url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver/' + "D0",
    //         async: false,
    //         dataType: 'json',
    //         success: function (response) {
    //             driver = response.data;
    //
    //         }
    //     });
    // }


});

// ..................................................Maintaince Section Start..............
getneedMaintainceCar();
getNEwMaintainceID();
getMaintainceCar();

function getneedMaintainceCar() {
    $('#needMaintainceTBody').empty();
    $('#btnaddMaintaince').attr("disabled", true);


    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/needmaintaince',
        async: false,
        dataType: 'json',
        success: function (resp) {
            let response = resp.data;
            for (var i in response) {
                let id = (response[i].carID);
                let brand = (response[i].brand);
                let status = response[i].status;
                let completeKm = response[i].completeKm;

                var row = `<tr><td>${id}</td><td>${brand}</td><td>${completeKm}</td><td>${status}</td></tr>`;
                $('#needMaintainceTBody').append(row);

                $('#needMaintainceTBody tr').css({"cursor": "pointer"});
                $('#needMaintainceTBody tr').click(function () {

                        let id = $(this).children('td:eq(0)').text();
                        let st = $(this).children('td:eq(3)').text();

                        $('#carid').val(id);

                    if (st == "in") {
                            $('#btnaddMaintaince').attr("disabled", false);

                        } else {
                            $('#btnaddMaintaince').attr("disabled", true);
                        alertify.warning('This car is'+st);

                    }

                    }
                );

            }
        }
    });
}


$('#btnaddMaintaince').click(function () {
    let carid = $('#carid').val();
    let mid = $('#maintainceid').val();

    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/' + carid,
        async: true,
        dataType: 'json',
        success: function (resp) {
            let car = resp.data;


            $.ajax({
                method: "post",
                url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/maintaince",
                contentType: "application/json",
                async: false,
                data: JSON.stringify(
                    {
                        maintainceID: mid,
                        date: getCurrentDate(),
                        details: "repairing",
                        car: car
                    }
                ),
                success: function (data) {
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
                                colour: car.colour,
                                dailyRate: car.dailyRate,
                                monthlyRate: car.monthlyRate,
                                freeKmforMonth: car.freeKmforMonth,
                                freeKmforDay: car.freeKmforDay,
                                lossDamageWaiver: car.lossDamageWaiver,
                                priceForExtraKM: car.priceForExtraKM,
                                status: "maintaince",
                                completeKm: car.completeKm
                            }
                        ),
                        success: function (data) {
                            getNEwMaintainceID();
                            getMaintainceCar();
                            getneedMaintainceCar();
                        }
                    });
                }
            });
        }
    });
});

function getNEwMaintainceID() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/maintaince/newMaintainceId',
        async: true,
        dataType: 'json',
        success: function (resp) {
            $('#maintainceid').val(resp.data);

        }
    });
}



function getMaintainceCar() {
    $('#maintainceTBody').empty();
    $('#btnMaintainceDone').attr("disabled", true);


    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/maintaince/get/repairing',
        async: true,
        dataType: 'json',
        success: function (resp) {
            let response = resp.data;
            for (var i in response) {

                let id = response[i].maintainceID;
                let date = response[i].date;
                let detail = response[i].details;
                let carid = response[i].car.carID;


                var row = `<tr><td>${id}</td><td>${date}</td><td>${carid}</td><td>${detail}</td></tr>`;
                $('#maintainceTBody').append(row);

                $('#maintainceTBody tr').css({"cursor": "pointer"});
                $('#maintainceTBody tr').click(function () {
                        $('#btnMaintainceDone').attr("disabled", false);

                        let id = $(this).children('td:eq(0)').text();
                        let cid = $(this).children('td:eq(2)').text();

                        $('#carid').val(cid);
                        $('#oldmid').val(id);

                }
                );

            }
        }
    });
}

$('#btnMaintainceDone').click(function () {
    let carid = $('#carid').val();
    let mid = $('#oldmid').val();

    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/car/' + carid,
        async: true,
        dataType: 'json',
        success: function (resp) {
            let car = resp.data;


            $.ajax({
                method: "put",
                url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/maintaince",
                contentType: "application/json",
                async: false,
                data: JSON.stringify(
                    {
                        maintainceID: mid,
                        date: getCurrentDate(),
                        details: "complete",
                        car: car
                    }
                ),
                success: function (data) {
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
                                colour: car.colour,
                                dailyRate: car.dailyRate,
                                monthlyRate: car.monthlyRate,
                                freeKmforMonth: car.freeKmforMonth,
                                freeKmforDay: car.freeKmforDay,
                                lossDamageWaiver: car.lossDamageWaiver,
                                priceForExtraKM: car.priceForExtraKM,
                                status: "in",
                                completeKm: 0
                            }
                        ),
                        success: function (data) {
                            getMaintainceCar();
                        }
                    });
                }
            });
        }
    });
});
















