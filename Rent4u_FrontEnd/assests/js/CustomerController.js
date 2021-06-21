getLastLoginData();

function getLastLoginData() {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/login/lastLogUser',
        async: false,
        success: function (response) {
             let userName= response.data;
            console.log("userName login "+userName);
            getAllCustomerData(userName);
        }
    });
}
function getAllCustomerData(userName) {
    $.ajax({
        method: "get",
        url: 'http://localhost:8080/Rent4u_BackEnd_war_exploded/api/v1/customer/get/'+userName,
        async: false,
        success: function (response) {
            let data= response.data;
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
        var mm = today.getMonth()+1; //As January is 0.
        var yyyy = today.getFullYear();

        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        return (mm+'/'+dd+'/'+yyyy);
   }


   function setMsg() {

   }
   $('#msg').click(function () {
       if($('.popover').hasClass('in')){
           $(this).popover('hide');
       }
       else
       {
           $(this).attr('data-mdb-content','Welcome\nHello');
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

