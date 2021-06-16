package lk.rent4u.repo;

import lk.rent4u.entity.BookingReturn;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingReturnRepo extends JpaRepository<BookingReturn,String> {
}
