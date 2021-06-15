package lk.rent4u.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CarDTO {
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
}
