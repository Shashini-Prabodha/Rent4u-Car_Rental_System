package lk.rent4u.service;

import lk.rent4u.dto.CarDTO;
import lk.rent4u.entity.Car;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface CarService {
    void addCar(CarDTO dto);

    void deleteCar(String id);

    CarDTO searchCar(String id);

    ArrayList<CarDTO> getAllCars();

    void updateCar(CarDTO dto);

    List<CarDTO> readByType(String type);

    List<CarDTO> getFiltingCar(String type,String status);

    int countByCarinStauts(String status);


}
