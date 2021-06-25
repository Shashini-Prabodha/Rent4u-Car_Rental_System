package lk.rent4u.controller;

import lk.rent4u.dto.CarDTO;
import lk.rent4u.exception.NotFoundException;
import lk.rent4u.service.CarService;
import lk.rent4u.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/car")
@CrossOrigin
public class CarController {

    @Autowired
    private CarService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllCars() {
        ArrayList<CarDTO> allCars = service.getAllCars();
        return new ResponseEntity(new StandardResponse("200", "Done", allCars), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveCar(@RequestBody CarDTO carDTO) {
        if (carDTO.getCarID().trim().length() <= 0) {
            throw new NotFoundException("Car ID cannot be empty");
        }
        service.addCar(carDTO);
        return new ResponseEntity(new StandardResponse("201", "Done", carDTO), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchCar(@PathVariable String id) {
        CarDTO carDTO = service.searchCar(id);
        return new ResponseEntity(new StandardResponse("200", "Done", carDTO), HttpStatus.OK);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteCar(@RequestParam String id) {
        service.deleteCar(id);
        return new ResponseEntity(new StandardResponse("200", "Done", null), HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateCar(@RequestBody CarDTO carDTO){
        if (carDTO.getCarID().trim().length() <= 0) {
            throw new NotFoundException("Car ID provided to update");
        }
        service.updateCar(carDTO);
        return new ResponseEntity(new StandardResponse("200", "Done", carDTO), HttpStatus.OK);

    }

    @GetMapping(path = "/get/{type}")
    public ResponseEntity getCarsByType(@PathVariable String type) {
        List<CarDTO> allCars = service.readByType(type);
        return new ResponseEntity(new StandardResponse("200", "Done", allCars), HttpStatus.OK);
    }

    @GetMapping(path = "/get/{type}/{status}")
    public ResponseEntity getCarsByTypeandStatus(@PathVariable String type,@PathVariable String status) {
        List<CarDTO> allCars = service.getFiltingCar(type,status);
        return new ResponseEntity(new StandardResponse("200", "Done", allCars), HttpStatus.OK);
    }

    @GetMapping(path = "/count/{status}")
    public ResponseEntity getCarcountbyStatus(@PathVariable String status) {
        int count = service.countByCarinStauts(status);
        return new ResponseEntity(new StandardResponse("200", "Done", count), HttpStatus.OK);
    }

    @GetMapping(path = "/needmaintaince")
    public ResponseEntity getNeddMaintanceCar() {
        List<CarDTO> needMaintainceCar = service.getNeedMaintainceCar();
        return new ResponseEntity(new StandardResponse("200", "Done", needMaintainceCar), HttpStatus.OK);
    }
}
