package lk.rent4u.service;

import lk.rent4u.dto.AdminDTO;
import lk.rent4u.dto.DriverDTO;

import java.util.ArrayList;

public interface AdminService {
    void addAdmin(AdminDTO dto);

    void deleteAdmin(String id);

    AdminDTO searchAdmin(String id);

    ArrayList<AdminDTO> getAllAdmins();

    void updateAdmin(AdminDTO dto);

    boolean findByUserName(String userName);

    boolean findByUserNameAndPassword(String userName, String password);

    AdminDTO getAdmin(String userName);

}
