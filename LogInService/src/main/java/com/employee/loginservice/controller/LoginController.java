package com.employee.loginservice.controller;


import com.employee.loginservice.dto.LoginDTO;
import com.employee.loginservice.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/login")
public class LoginController {
    @Autowired
    LoginService loginService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "",method = RequestMethod.POST)
    public boolean check(@RequestBody LoginDTO loginDTO){

        return loginService.checklogin(loginDTO);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public String register(@RequestBody LoginDTO loginDTO){
        return loginService.registerUser(loginDTO);
    }


}
