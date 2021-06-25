package lk.rent4u.service.impl;

import lk.rent4u.dto.CarDTO;
import lk.rent4u.entity.Car;
import lk.rent4u.exception.ValidateException;
import lk.rent4u.repo.CarRepo;
import lk.rent4u.service.CarService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CarServiceImpl implements CarService {

    @Autowired
    private CarRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addCar(CarDTO dto) {
        if (repo.existsById(dto.getCarID())) {
            throw new ValidateException("Car Already Exists");
        }
        repo.save(mapper.map(dto, Car.class));
    }

    @Override
    public void deleteCar(String id) {
        if (!repo.existsById(id)) {
            throw new ValidateException("No Customer for delete");
        }
        repo.deleteById(id);
    }

    @Override
    public CarDTO searchCar(String id) {
        Optional<Car> car = repo.findById(id);

        if (car.isPresent()) {
            return mapper.map(car.get(), CarDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<CarDTO> getAllCars() {
        List<Car> all = repo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<CarDTO>>() {
        }.getType());
    }

    @Override
    public void updateCar(CarDTO dto) {
        if (repo.existsById(dto.getCarID())) {
            repo.save(mapper.map(dto, Car.class));

        }
    }

    @Override
    public List<CarDTO> readByType(String type) {
        List<Car> all = repo.readByType(type);
        return mapper.map(all, new TypeToken<ArrayList<CarDTO>>() {
        }.getType());
    }

    @Override
    public List<CarDTO> getFiltingCar(String type, String status) {
        List<Car> all = repo.getFiltingCar(type,status);
        return mapper.map(all, new TypeToken<ArrayList<CarDTO>>() {
        }.getType());
    }

    @Override
    public int countByCarinStauts(String status) {
        return repo.countByCarinStauts(status);
    }
}
