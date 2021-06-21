package lk.rent4u.service.impl;

import lk.rent4u.dto.AdminDTO;
import lk.rent4u.entity.Admin;
import lk.rent4u.entity.Customer;
import lk.rent4u.entity.Driver;
import lk.rent4u.repo.AdminRepo;
import lk.rent4u.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Optional;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
    @Autowired
    AdminRepo repo;

    @Override
    public void addAdmin(AdminDTO dto) {
    }

    @Override
    public void deleteAdmin(String id) {

    }

    @Override
    public AdminDTO searchAdmin(String id) {
        return null;
    }

    @Override
    public ArrayList<AdminDTO> getAllAdmins() {
        return null;
    }

    @Override
    public void updateAdmin(AdminDTO dto) {

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

}
