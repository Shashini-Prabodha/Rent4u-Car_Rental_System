package lk.rent4u.controller;

import lk.rent4u.dto.PaymentDTO;
import lk.rent4u.exception.NotFoundException;
import lk.rent4u.service.PaymentService;
import lk.rent4u.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/v1/payment")
@CrossOrigin
public class PaymentController {

    @Autowired
    PaymentService service;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity getAllPayment(){
        ArrayList<PaymentDTO> allPayments = service.getAllPayments();
        for (PaymentDTO allPayment : allPayments) {
            System.out.println("controller"+allPayment.getPaymentID());
        }
        return new ResponseEntity(new StandardResponse("200","Done",allPayments), HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity savePayment(@RequestBody PaymentDTO dto){
        if(dto.getPaymentID().trim().length() <=0){
            throw new NotFoundException("Payment ID cannot be empty");
        }
        System.out.println("36"+dto.getPaymentID());
        service.addPayment(dto);
        return new ResponseEntity(new StandardResponse("201","Done",dto), HttpStatus.CREATED);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity searchPayment(@PathVariable String id){
        PaymentDTO dto = service.searchPayment(id);
        return new ResponseEntity(new StandardResponse("200","Done",dto),HttpStatus.OK);
    }

    @DeleteMapping(params = {"id"})
    public ResponseEntity deletePayment(@RequestParam String id){
        service.deletePayment(id);
        return new ResponseEntity(new StandardResponse("200","Done",null),HttpStatus.OK);
    }

    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updatePayment(@RequestBody PaymentDTO dto) {
        if (dto.getPaymentID().trim().length() <= 0) {
            throw new NotFoundException("No ID provided to update");
        }
        service.updatePayment(dto);
        return new ResponseEntity(new StandardResponse("200", "Done", null), HttpStatus.OK);
    }
    @GetMapping(path = "/get/{id}")
    public ResponseEntity getAllPaymentByCustomer(@PathVariable String id){
        List<PaymentDTO> allPayments = service.getPaymentCid(id);
        return new ResponseEntity(new StandardResponse("200","Done",allPayments), HttpStatus.OK);
    }
}
