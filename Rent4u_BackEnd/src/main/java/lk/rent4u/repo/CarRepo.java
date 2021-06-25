package lk.rent4u.repo;

import lk.rent4u.entity.Booking;
import lk.rent4u.entity.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CarRepo extends JpaRepository<Car,String> {

    List<Car> readByType(String type);

    @Query(value = "SELECT COUNT(c.carID) FROM Car c where c.status=:status")
    int countByCarinStauts( @Param("status") String status);

    @Query(value = "SELECT c from Car c where c.type=:type AND c.status=:status")
    List<Car> getFiltingCar(@Param("type") String type, @Param("status") String status);


}
