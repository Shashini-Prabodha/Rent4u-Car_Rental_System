package lk.rent4u.dto;

import lk.rent4u.entity.Car;
import lk.rent4u.entity.Customer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MaintainceDTO {
    private String maintainceID;
    private Date date;
    private String details;
    private Car car;

}
