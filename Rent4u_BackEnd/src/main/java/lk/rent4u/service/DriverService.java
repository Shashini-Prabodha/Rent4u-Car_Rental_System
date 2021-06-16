package lk.rent4u.service;

import lk.rent4u.dto.DriverDTO;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;


public interface DriverService {
    void addDriver(DriverDTO dto);

    void deleteDriver(String id);

    DriverDTO searchDriver(String id);

    ArrayList<DriverDTO> getAllDrivers();

    void updateDriver(DriverDTO dto);
}
