package lk.rent4u.service.impl;

import lk.rent4u.dto.DriverDTO;
import lk.rent4u.entity.Customer;
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
import java.util.Random;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepo driverRepo;

    @Autowired
    private ModelMapper mapper;


    @Override
    public void addDriver(DriverDTO dto) {

        if (driverRepo.existsById(dto.getDriverID())){
            throw new ValidateException("Driver Already Exist");
        }
        driverRepo.save(mapper.map(dto, Driver.class));
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

    @Override
    public boolean findByUserName(String userName) {
        Optional<Driver> byUserName = driverRepo.findByUserName(userName);
        return byUserName.isPresent();
    }

    @Override
    public boolean findByUserNameAndPassword(String userName,String password) {
        Optional<Driver> byUserNameAndPassword = driverRepo.findByUserNameAndPassword(userName, password);
        return byUserNameAndPassword.isPresent();
    }

    @Override
    public DriverDTO getDriver(String userName) {
        Driver driver = driverRepo.getDriver(userName);
        return mapper.map(driver,DriverDTO.class);
    }

    @Override
    public List<DriverDTO> readByAvailable(boolean available) {
        List<Driver> drivers = driverRepo.readByAvailable(true);
        return mapper.map(drivers,new TypeToken<List<DriverDTO>>(){}.getType());
    }

    @Override
    public DriverDTO getRandomDriver() {

        Random random = new Random();
        int i = random.nextInt(50);

        DriverDTO dto = searchDriver("L" + i);
        while (dto==null){
            i = random.nextInt(50);
            dto = searchDriver("L" + i);
        }
        return dto;
    }

}
