package lk.rent4u.repo;

import lk.rent4u.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarRepo extends JpaRepository<Car,String> {

    List<Car> readByType(String type);

}
