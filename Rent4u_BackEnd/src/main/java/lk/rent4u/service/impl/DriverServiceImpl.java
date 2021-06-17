package lk.rent4u.service.impl;

import lk.rent4u.dto.DriverDTO;
import lk.rent4u.entity.Driver;
import lk.rent4u.exception.ValidateException;
import lk.rent4u.repo.DriverRepo;
import lk.rent4u.service.DriverService;
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
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void addDriver(DriverDTO dto) {
//        if (driverRepo.existsById(dto.getDriverID())) {
//            throw new ValidateException("Driver already exist");
//        }
//        driverRepo.save(mapper.map(dto, Driver.class));
        if (driverRepo.existsById(dto.getDriverID())){
            throw new ValidateException("Driver Already Exist");
        }
        System.out.println(dto);
        driverRepo.save(
                mapper.map(dto, Driver.class)
        );
    }

    @Override
    public void deleteDriver(String id) {
        if (!driverRepo.existsById(id)) {
            throw new ValidateException("No Driver for Delete..!");
        }
        driverRepo.deleteById(id);
    }

    @Override
    public DriverDTO searchDriver(String id) {
        Optional<Driver> driver = driverRepo.findById(id);
        if (driver.isPresent()) {
            return mapper.map(driver.get(), DriverDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<DriverDTO> getAllDrivers() {
        List<Driver> all = driverRepo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<DriverDTO>>() {
        }.getType());
    }


    @Override
    public void updateDriver(DriverDTO dto) {
        if (driverRepo.existsById(dto.getDriverID())) {
            driverRepo.save(mapper.map(dto, Driver.class));
        }
    }
}
