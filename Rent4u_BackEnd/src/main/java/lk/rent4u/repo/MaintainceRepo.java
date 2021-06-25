package lk.rent4u.repo;

import lk.rent4u.entity.Maintaince;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MaintainceRepo extends JpaRepository<Maintaince,String> {
    @Query(value = "SELECT maintainceID FROM Maintaince ORDER BY maintainceID DESC LIMIT 1",nativeQuery = true)
    String getLastID();

    @Query(value = "SELECT m FROM Maintaince m where m.details=:details")
    List<Maintaince> getMaintainingDetail(@Param("details") String details);
}
