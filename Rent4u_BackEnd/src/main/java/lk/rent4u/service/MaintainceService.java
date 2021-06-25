package lk.rent4u.service;

import lk.rent4u.dto.MaintainceDTO;
import lk.rent4u.entity.Maintaince;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;

public interface MaintainceService {
    void addMaintaince(MaintainceDTO dto);

    void deleteMaintaince(String id);

    MaintainceDTO searchMaintaince(String id);

    ArrayList<MaintainceDTO> getAllMaintainces();

    void updateMaintaince(MaintainceDTO dto);

    String getLastID();

    String getNewID();

    List<MaintainceDTO> getMaintainingDetail();


}
