package com.employee.reportgenerationservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ReportgenerationserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ReportgenerationserviceApplication.class, args);
    }

}
