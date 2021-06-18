package lk.rent4u.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
public class Car {
    @Id
    private String carID;
    //    private String registrationNumber;
    private String brand;
    private String type;
    private int numberOfPassengers;
    private String transmissionType;
    private String fuelType;
    private double priceForExtraKM;
    private String colour;
    private double dailyRate;
    private double monthlyRate;
    private double freeMillagePrice;
    private String freeMillageDuration;
    private double lossDamageWaiver;
    private String status;


    @OneToMany(mappedBy = "car",cascade = CascadeType.ALL)
    private List<Booking> bookings = new ArrayList<Booking>();
}
