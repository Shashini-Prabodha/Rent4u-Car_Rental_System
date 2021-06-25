package lk.rent4u.controller;


import lk.rent4u.dto.MaintainceDTO;
import lk.rent4u.exception.NotFoundException;
import lk.rent4u.service.MaintainceService;
import lk.rent4u.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/maintaince")
@CrossOrigin
public class MaintainceController {

    @Autowired
    private MaintainceService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllMaintainces() {
        ArrayList<MaintainceDTO> allMaintainces = service.getAllMaintainces();
        return new ResponseEntity(new StandardResponse("200", "Done", allMaintainces), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveMaintaince(@RequestBody MaintainceDTO MaintainceDTO) {
        if (MaintainceDTO.getMaintainceID().trim().length() <= 0) {
            throw new NotFoundException("Maintaince ID cannot be empty");
        }
        service.addMaintaince(MaintainceDTO);
        return new ResponseEntity(new StandardResponse("201", "Done", MaintainceDTO), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchMaintaince(@PathVariable String id) {
        MaintainceDTO MaintainceDTO = service.searchMaintaince(id);
        return new ResponseEntity(new StandardResponse("200", "Done", MaintainceDTO), HttpStatus.OK);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteMaintaince(@RequestParam String id) {
        service.deleteMaintaince(id);
        return new ResponseEntity(new StandardResponse("200", "Done", null), HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateMaintaince(@RequestBody MaintainceDTO MaintainceDTO) {
        if (MaintainceDTO.getMaintainceID().trim().length() <= 0) {
            throw new NotFoundException("Maintaince ID provided to update");
        }
        service.updateMaintaince(MaintainceDTO);
        return new ResponseEntity(new StandardResponse("200", "Done", MaintainceDTO), HttpStatus.OK);

    }

    @GetMapping(path = "/newMaintainceId")
    public ResponseEntity getNewMaintainceID(){
        String newID = service.getNewID();

        return new ResponseEntity(new StandardResponse("200","Done",newID),HttpStatus.OK);
    }
    @GetMapping(path = "/get/repairing")
    public ResponseEntity getMaintainingDetails(){
        List<MaintainceDTO> list = service.getMaintainingDetail();

        return new ResponseEntity(new StandardResponse("200","Done",list),HttpStatus.OK);
    }

}
