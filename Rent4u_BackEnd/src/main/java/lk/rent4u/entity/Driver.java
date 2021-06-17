package lk.rent4u.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class Driver {
    @Id
    private String driverID;
    private String name;
    private int contactNo;
    private String nic;
    private String userName;
    private String password;
    private boolean available;
//
//    @OneToMany(mappedBy = "driver",cascade = CascadeType.ALL)
//    private List<Booking> bookings = new ArrayList<Booking>();
}
