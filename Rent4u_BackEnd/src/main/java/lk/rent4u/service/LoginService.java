package lk.rent4u.service;

import lk.rent4u.dto.CustomerDTO;
import lk.rent4u.dto.DriverDTO;
import lk.rent4u.dto.LoginDTO;

public interface LoginService {
    void addLogin(LoginDTO dto);

    LoginDTO searchLogin(String id);

    String getLastID();

    String genarateLogID();

}
