package com.employee.loginservice.repository;

import com.employee.loginservice.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface LoginRepository extends JpaRepository<Login, Long> {


    @Query("SELECT CASE WHEN COUNT(c) > 0 THEN true ELSE false END FROM Login c WHERE c.email = :email")
    boolean findByEmail(@Param("email")String email);

    @Query("SELECT CASE WHEN COUNT(c) > 0 THEN true ELSE false END FROM Login c WHERE c.email = :email AND c.password = :password")
    boolean findByEmailPassword(@Param("email")String email,@Param("password") String password);
}
