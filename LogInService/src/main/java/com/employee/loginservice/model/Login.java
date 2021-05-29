package com.employee.loginservice.model;

import reactor.util.annotation.NonNull;

import javax.persistence.*;

@Entity
@Table(name = "login")
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @NonNull
    @Column
    private String email;

    @NonNull
    @Column
    private String password;


    public Login() {
    }

    public Login(String userName, String password) {
        this.password = password;
        this.email = userName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String userName) {
        this.email = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
