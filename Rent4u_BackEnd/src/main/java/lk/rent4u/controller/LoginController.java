package lk.rent4u.controller;


import lk.rent4u.dto.BookingDTO;
import lk.rent4u.dto.CustomerDTO;
import lk.rent4u.dto.LoginDTO;
import lk.rent4u.exception.NotFoundException;
import lk.rent4u.service.AdminService;
import lk.rent4u.service.CustomerService;
import lk.rent4u.service.DriverService;
import lk.rent4u.service.LoginService;
import lk.rent4u.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("api/v1/login")
@CrossOrigin
public class LoginController {
    @Autowired
    CustomerService customerService;

    @Autowired
    AdminService adminService;

    @Autowired
    DriverService driverService;

    @Autowired
    LoginService loginService;


    @GetMapping(path = "/get/log/lastLogId")
    public ResponseEntity getLastLoginID(){
        String lastID = loginService.getLastID();

        return new ResponseEntity(new StandardResponse("200","Done",lastID),HttpStatus.OK);
    }

    @GetMapping(path = "/newLogId")
    public ResponseEntity getNewLoginID(){
        String newID = loginService.genarateLogID();

        return new ResponseEntity(new StandardResponse("200","Done",newID),HttpStatus.OK);
    }

    @GetMapping(path = "/lastLogUser")
    public ResponseEntity getLoginUserName(){
        LoginDTO loginDTO = loginService.searchLogin(loginService.getLastID());
        System.out.println("loginDTO "+loginDTO.getUserName());
        return new ResponseEntity(new StandardResponse("200","Done",loginDTO.getUserName()),HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveLogin(@RequestBody LoginDTO dto) {
        if(dto.getLoginID().trim().length() <=0){
            throw new NotFoundException("Login ID cannot be empty");
        }
        loginService.addLogin(dto);
        return new ResponseEntity(new StandardResponse("201", "Done", dto), HttpStatus.CREATED);

    }

    @GetMapping(path = "/{userName}")
    public ResponseEntity searchUserName(@PathVariable String userName) {
        System.out.println(adminService.findByUserName(userName) + " - " + driverService.findByUserName(userName) + " - " + customerService.findByUserName(userName));
        if (adminService.findByUserName(userName) || driverService.findByUserName(userName) || customerService.findByUserName(userName)) {
            return new ResponseEntity(new StandardResponse("400", "error", "Already using this user Name. Please use another name"), HttpStatus.OK);
        } else {
            return new ResponseEntity(new StandardResponse("200", "Done", "no"), HttpStatus.OK);
        }


    }

    @GetMapping(path = "/{userName}/{password}")
    public ResponseEntity searchUserNameAndPw(@PathVariable String userName, @PathVariable String password) {

        if (adminService.findByUserNameAndPassword(userName, password)) {
            return new ResponseEntity(new StandardResponse("200", "Done", "Admin"), HttpStatus.OK);
        } else {
            if (driverService.findByUserNameAndPassword(userName, password)) {
                return new ResponseEntity(new StandardResponse("200", "Done", "Driver"), HttpStatus.OK);
            } else {
                if (customerService.findByUserNameAndPassword(userName, password)) {
                    return new ResponseEntity(new StandardResponse("200", "Done", "Customer"), HttpStatus.OK);
                } else {
                    return new ResponseEntity(new StandardResponse("200", "Done", "No"), HttpStatus.OK);
                }
            }
        }

    }

}
