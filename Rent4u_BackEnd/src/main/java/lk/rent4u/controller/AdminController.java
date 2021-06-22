package lk.rent4u.controller;

import lk.rent4u.dto.AdminDTO;
import lk.rent4u.exception.NotFoundException;
import lk.rent4u.service.AdminService;
import lk.rent4u.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("api/v1/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    AdminService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllAdmin(){
        ArrayList<AdminDTO> allAdmins = service.getAllAdmins();
        return new ResponseEntity(new StandardResponse("200","Done",allAdmins), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity saveAdmin(@RequestBody AdminDTO dto){
        if(dto.getAdminID().trim().length() <=0){
            throw new NotFoundException("Admin ID cannot be empty");
        }
        service.addAdmin(dto);
        return new ResponseEntity(new StandardResponse("201","Done",dto), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchAdmin(@PathVariable String id){
        AdminDTO dto = service.searchAdmin(id);
        return new ResponseEntity(new StandardResponse("200","Done",dto),HttpStatus.OK);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deleteAdmin(@RequestParam String id){
        service.deleteAdmin(id);
        return new ResponseEntity(new StandardResponse("200","Done",null),HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updateAdmin(@RequestBody AdminDTO dto) {
        if (dto.getAdminID().trim().length() <= 0) {
            throw new NotFoundException("No ID provided to update");
        }
        service.updateAdmin(dto);
        return new ResponseEntity(new StandardResponse("200", "Done", null), HttpStatus.OK);
    }
}
