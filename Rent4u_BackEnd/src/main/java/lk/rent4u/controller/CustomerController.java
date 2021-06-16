package lk.rent4u.controller;

import lk.rent4u.dto.CustomerDTO;
import lk.rent4u.exception.NotFoundException;
import lk.rent4u.service.CustomerService;
import lk.rent4u.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("api/v1/customer")
public class CustomerController {
    @Autowired
    CustomerService service;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity savecustomer(@RequestBody CustomerDTO dto){
        if(dto.getCustomerID().trim().length() <=0){
            throw new NotFoundException("Customer ID cannot be empty");
        }
        service.addCustomer(dto);
        return new ResponseEntity(new StandardResponse("201","Done",dto), HttpStatus.CREATED);
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllCustomer(){
        ArrayList<CustomerDTO> allCustomers = service.getAllCustomers();
        return new ResponseEntity(new StandardResponse("200","Done",allCustomers),HttpStatus.OK);
    }
}
