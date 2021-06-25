package lk.rent4u.service.impl;

import lk.rent4u.dto.MaintainceDTO;
import lk.rent4u.entity.Maintaince;
import lk.rent4u.exception.ValidateException;
import lk.rent4u.repo.MaintainceRepo;
import lk.rent4u.service.MaintainceService;
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
public class MaintainceServiceImpl implements MaintainceService {
    @Autowired
    MaintainceRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addMaintaince(MaintainceDTO dto) {
        if (repo.existsById(dto.getMaintainceID())) {
            throw new ValidateException("Booking Return Already Exists");
        }
        repo.save(mapper.map(dto, Maintaince.class));
    }

    @Override
    public void deleteMaintaince(String id) {
        if (!repo.existsById(id)) {
            throw new ValidateException("No Booking return for Delete");
        }
        repo.deleteById(id);
    }

    @Override
    public MaintainceDTO searchMaintaince(String id) {
        Optional<Maintaince> Maintaince = repo.findById(id);
        if (Maintaince.isPresent()) {
            return mapper.map(Maintaince.get(), MaintainceDTO.class);
        }
        return null;
    }

    @Override
    public ArrayList<MaintainceDTO> getAllMaintainces() {
        List<Maintaince> all = repo.findAll();
        return mapper.map(all,new TypeToken<ArrayList<MaintainceDTO>>(){}.getType());
    }

    @Override
    public void updateMaintaince(MaintainceDTO dto) {
       if(repo.existsById(dto.getMaintainceID())){
           repo.save(mapper.map(dto,Maintaince.class));
       };
    }
    @Override
    public String getLastID() {
        return repo.getLastID();
    }

    @Override
    public String getNewID() {

        String lastID = getLastID();
        if (lastID != null) {
            String[] s = lastID.split("M");
            int value = Integer.parseInt(s[1]);
            value++;
            if (value < 10) {
                return "M00" + value;
            } else if (value < 100) {
                return "M0" + value;
            } else {
                return "M" + value;
            }
        } else {
            return "M001";
        }

    }

    @Override
    public List<MaintainceDTO> getMaintainingDetail() {
        List<Maintaince> all = repo.getMaintainingDetail("repairing");
        return mapper.map(all,new TypeToken<ArrayList<MaintainceDTO>>(){}.getType());
    }
}
