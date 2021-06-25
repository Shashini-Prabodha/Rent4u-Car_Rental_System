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
@CrossOrigin
public class CustomerController {
    @Autowired
    CustomerService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllCustomer(){
        ArrayList<CustomerDTO> allCustomers = service.getAllCustomers();
        return new ResponseEntity(new StandardResponse("200","Done",allCustomers),HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity savecustomer(@RequestBody CustomerDTO dto){
        if(dto.getCustomerID().trim().length() <=0){
            throw new NotFoundException("Customer ID cannot be empty");
        }
        service.addCustomer(dto);
        return new ResponseEntity(new StandardResponse("201","Done",dto), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchCustomer(@PathVariable String id){
        CustomerDTO dto = service.searchCustomer(id);
        return new ResponseEntity(new StandardResponse("200","Done",dto),HttpStatus.OK);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteCustomer(@RequestParam String id){
        service.deleteCustomer(id);
        return new ResponseEntity(new StandardResponse("200","Done",null),HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateCustomer(@RequestBody CustomerDTO dto) {
        if (dto.getCustomerID().trim().length() <= 0) {
            throw new NotFoundException("No ID provided to update");
        }
        service.updateCustomer(dto);
        return new ResponseEntity(new StandardResponse("200", "Done", dto), HttpStatus.OK);
    }

    @GetMapping(path = "lastId")
    public ResponseEntity getLastCID(){
        String id = service.getLastID();
        return new ResponseEntity(new StandardResponse("200","Done",id),HttpStatus.OK);
    }


    @GetMapping(path = "custCount")
    public ResponseEntity getCountofCustomer(){
        int count = service.countByCustomerID();
        System.out.println("cotroller "+count);
        return new ResponseEntity(new StandardResponse("200","Done",count),HttpStatus.OK);
    }

    @GetMapping(path = "/get/{userName}")
    public ResponseEntity getCustomer(@PathVariable String userName){
        CustomerDTO dto = service.getuCustomer(userName);
        System.out.println(dto.getCustomerID());
        return new ResponseEntity(new StandardResponse("200","Done",dto),HttpStatus.OK);
    }
}
