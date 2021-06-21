package lk.rent4u.service.impl;

import lk.rent4u.dto.CustomerDTO;
import lk.rent4u.dto.LoginDTO;
import lk.rent4u.entity.Customer;
import lk.rent4u.entity.Driver;
import lk.rent4u.entity.Login;
import lk.rent4u.exception.ValidateException;
import lk.rent4u.repo.LoginRepo;
import lk.rent4u.service.LoginService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class LoginServiceImpl implements LoginService {

    @Autowired
    LoginRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addLogin(LoginDTO dto) {

        if (repo.existsById(String.valueOf(dto.getLoginID()))) {
            throw new ValidateException("LoginID Already Exist");
        }
        repo.save(mapper.map(dto, Login.class));
    }

    @Override
    public LoginDTO searchLogin(String id) {
        Optional<Login> login = repo.findById(id);
        if (login.isPresent()) {
            return mapper.map(login.get(), LoginDTO.class);
        }
        return null;
    }

    @Override
    public String getLastID() {
        String lastID = repo.getLastID();
       return lastID;
    }

    @Override
    public String genarateLogID() {
        String lastID = getLastID();
        if (lastID!=null){
            String[] s = lastID.split("L");
            int value= Integer.parseInt(s[1]);
            value++;
            return "L"+value;
        }else{
            return "L1";
        }
    }


}
