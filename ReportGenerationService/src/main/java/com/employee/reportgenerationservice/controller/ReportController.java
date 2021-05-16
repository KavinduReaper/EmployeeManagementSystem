package com.employee.reportgenerationservice.controller;

import com.employee.reportgenerationservice.dto.ReportDTO;
import com.employee.reportgenerationservice.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/report")
public class ReportController {
    @Autowired
    ReportService reportService;
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "",method = RequestMethod.GET)
    public List<ReportDTO> getAll(){

        return reportService.getAllReport();
    }
}
