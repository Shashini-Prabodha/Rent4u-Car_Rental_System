package lk.rent4u.service;

import lk.rent4u.dto.CarDTO;

import java.util.ArrayList;

public interface CarService {
    void addCar(CarDTO dto);

    void deleteCar(String id);

    CarDTO searchCar(String id);

    ArrayList<CarDTO> getAllCars();

    void updateCar(CarDTO dto);
}
