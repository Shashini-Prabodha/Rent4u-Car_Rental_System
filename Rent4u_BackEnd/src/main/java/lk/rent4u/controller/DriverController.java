package lk.rent4u.controller;

import lk.rent4u.dto.DriverDTO;
import lk.rent4u.exception.NotFoundException;
import lk.rent4u.service.DriverService;
import lk.rent4u.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/driver")
@CrossOrigin

public class DriverController {

    @Autowired
    DriverService service;

//    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity saveDriver(@RequestBody DriverDTO dto){
//        if(dto.getDriverID().trim().length() <= 0){
//            throw new NotFoundException("Driver id cannot be empty");
//        }
//        service.addDriver(dto);
//        return new ResponseEntity(new StandardResponse("201","Done",dto), HttpStatus.CREATED);
//    }
    @GetMapping
    public String getdata(){
        return "Hello";
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveDriver(@RequestBody DriverDTO driverDTO){
        if (driverDTO.getDriverID().trim().length() <= 0){
            throw new NotFoundException("Driver id cannot be empty");
        }
        service.addDriver(driverDTO);
        return new ResponseEntity(new StandardResponse("201","Done",driverDTO), HttpStatus.CREATED);
    }
}
//pdk inn