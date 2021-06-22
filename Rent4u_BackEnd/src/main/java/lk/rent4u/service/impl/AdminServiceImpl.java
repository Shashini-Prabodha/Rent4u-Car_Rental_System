package lk.rent4u.service.impl;

import lk.rent4u.dto.AdminDTO;
import lk.rent4u.dto.AdminDTO;
import lk.rent4u.dto.DriverDTO;
import lk.rent4u.entity.Admin;
import lk.rent4u.entity.Admin;
import lk.rent4u.entity.Driver;
import lk.rent4u.exception.ValidateException;
import lk.rent4u.repo.AdminRepo;
import lk.rent4u.service.AdminService;
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
public class AdminServiceImpl implements AdminService {
    @Autowired
    AdminRepo repo;

    @Autowired
    ModelMapper mapper;

    public void addAdmin(AdminDTO dto) {
        if (repo.existsById(dto.getAdminID())) {
            throw new ValidateException("Admin Already Exists");
        }
        repo.save(mapper.map(dto, Admin.class));
    }

    public void deleteAdmin(String id) {
        if (!repo.existsById(id)) {
            throw new ValidateException("No Admin for Delete");
        }
        repo.deleteById(id);
    }

    public AdminDTO searchAdmin(String id) {
        Optional<Admin> Admin = repo.findById(id);
        if (Admin.isPresent()) {
            return mapper.map(Admin.get(), AdminDTO.class);
        }
        return null;
    }

    public ArrayList<AdminDTO> getAllAdmins() {
        List<Admin> all = repo.findAll();
        return mapper.map(all, new TypeToken<ArrayList<AdminDTO>>() {
        }.getType());
    }

    public void updateAdmin(AdminDTO dto) {
        if (repo.existsById(dto.getAdminID())) {
            repo.save(mapper.map(dto, Admin.class));
        }
    }

    @Override
    public boolean findByUserName(String userName) {
        Optional<Admin> byUserName = repo.findByUserName(userName);
        return byUserName.isPresent();
    }

    @Override
    public boolean findByUserNameAndPassword(String userName, String password) {
        Optional<Admin> byUserNameAndPassword = repo.findByUserNameAndPassword(userName,password);
        return byUserNameAndPassword.isPresent();
    }

    @Override
    public AdminDTO getAdmin(String userName) {
        Admin admin = repo.getAdmin(userName);
        return mapper.map(admin,AdminDTO.class);
    }

}
