package com.employee.reportgenerationservice.service;

import com.employee.reportgenerationservice.dto.ReportDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReportService {

    public List<ReportDTO> getAllReport(){
        List<ReportDTO> reportDTO = new ArrayList<ReportDTO>();

        return reportDTO;
    }
}
