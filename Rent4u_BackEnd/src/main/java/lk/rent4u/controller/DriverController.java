package lk.rent4u.controller;

import lk.rent4u.dto.CustomerDTO;
import lk.rent4u.dto.DriverDTO;
import lk.rent4u.exception.NotFoundException;
import lk.rent4u.service.DriverService;
import lk.rent4u.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("api/v1/driver")
@CrossOrigin

public class DriverController {

    @Autowired
    DriverService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllDrivers() {
        ArrayList<DriverDTO> allDrivers = service.getAllDrivers();
        return new ResponseEntity(new StandardResponse("200", "Done", allDrivers), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveDriver(@RequestBody DriverDTO driverDTO) {
        if (driverDTO.getDriverID().trim().length() <= 0) {
            throw new NotFoundException("Driver id cannot be empty");
        }
        service.addDriver(driverDTO);
        return new ResponseEntity(new StandardResponse("201", "Done", driverDTO), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchDriver(@PathVariable String id){
        DriverDTO driverDTO = service.searchDriver(id);
        return new ResponseEntity(new StandardResponse("200","Done",driverDTO),HttpStatus.OK);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteDriver(@RequestParam String id){
        service.deleteDriver(id);
        return new ResponseEntity(new StandardResponse("200","Done",null),HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateDriver(@RequestBody DriverDTO dto){
        if(dto.getDriverID().trim().length() <=0){
            throw new NotFoundException("No ID provided to update");
        }
        service.updateDriver(dto);
        return new ResponseEntity(new StandardResponse("200","Done",dto),HttpStatus.OK);
    }
    @GetMapping(path = "/get/{userName}")
    public ResponseEntity getDriver(@PathVariable String userName){
        DriverDTO dto = service.getDriver(userName);
        return new ResponseEntity(new StandardResponse("200","Done",dto),HttpStatus.OK);
    }

    @GetMapping(path = "/get/list/randomDriver")
    public ResponseEntity getRandomDriver(){
        System.out.println("c68 ");
        DriverDTO dto = service.getRandomDriver();
        System.out.println("c69 "+dto);
        return new ResponseEntity(new StandardResponse("200","Done",dto),HttpStatus.OK);
    }

}
