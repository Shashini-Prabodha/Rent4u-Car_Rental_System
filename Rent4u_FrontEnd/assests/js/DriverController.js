
getLastLoginData();

function getLastLoginData() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/login/lastLogUser',
        async: true,
        success: function (response) {
            let userName = response.data;
            console.log("userName login " + userName);
            getAllDriverData(userName);
        }
    });
}


function getAllDriverData(userName) {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/driver/get/' + userName,
        async: true,
        success: function (response) {
            let data = response.data;
            $('#hiddnDriverID').val(data.driverID);
            loadAllSchedule();

        }
    });
}


function loadAllSchedule() {
    let id = $('#hiddnDriverID').val();
console.log("in");
    $('#driverScheduleTBody').empty();
    $.ajax({
        method: 'GET',
        url: "http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/booking/get/list/" + id,
        dataType: 'json',
        async: true,
        success: function (resp) {
            let response = resp.data;
            for (var i in response) {

                let custName = response[i].customer.name;
                let contact = response[i].customer.contact;
                let carID = response[i].car.carID;
                let pick = response[i].pickupDate;
                let rtnd = response[i].returnDate;

                var row = `<tr><td>${custName}</td><td>${contact}</td><td>${carID}</td><td>${pick}</td><td>${rtnd}</td></tr>`;
                $('#driverScheduleTBody').append(row);

            }
        }
    });
}