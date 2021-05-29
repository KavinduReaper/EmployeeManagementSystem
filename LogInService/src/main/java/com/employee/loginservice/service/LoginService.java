package com.employee.loginservice.service;

import com.employee.loginservice.dto.LoginDTO;
import com.employee.loginservice.model.Login;
import com.employee.loginservice.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    LoginRepository loginRepository;
    
    public boolean checklogin(LoginDTO loginDTO) {
        try{
            System.out.println(loginRepository.findByEmailPassword(loginDTO.getEmail(),loginDTO.getPassword()));
            return loginRepository.findByEmailPassword(loginDTO.getEmail(),loginDTO.getPassword());
        }catch (Exception e){
            System.out.println(e);
            return false;
        }

    }

    public String registerUser(LoginDTO loginDTO) {
        String result = "";
        try{
            if(loginRepository.findByEmail(loginDTO.getEmail())){
                result = "Email Exist";
            }else{
                Login login = new Login(loginDTO.getEmail(),loginDTO.getPassword());
                loginRepository.save(login);
                result = "Successfully Created";
            }
        }catch(Exception e){
            result = "Error in server";
        }
        System.out.println(result);
        return result;
    }

}
