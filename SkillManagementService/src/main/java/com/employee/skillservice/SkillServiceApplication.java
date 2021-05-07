package com.employee.skillservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class SkillServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(SkillServiceApplication.class, args);
    }

}
