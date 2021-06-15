package lk.rent4u.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DriverDTO {
    private String driverID;
    private String name;
    private String contactNo;
    private String nic;
    private String userName;
    private String password;
    private int available;
}
