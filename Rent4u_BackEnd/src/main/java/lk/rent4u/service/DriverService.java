package lk.rent4u.service;

import lk.rent4u.dto.DriverDTO;
import java.util.ArrayList;
import java.util.List;


public interface DriverService {
    void addDriver(DriverDTO dto);

    void deleteDriver(String id);

    DriverDTO searchDriver(String id);

    ArrayList<DriverDTO> getAllDrivers();

    void updateDriver(DriverDTO dto);

    boolean findByUserName(String userName);

    boolean findByUserNameAndPassword(String userName, String password);

    DriverDTO getDriver(String userName);

    List<DriverDTO> readByAvailable(boolean available);

    DriverDTO getRandomDriver();
}