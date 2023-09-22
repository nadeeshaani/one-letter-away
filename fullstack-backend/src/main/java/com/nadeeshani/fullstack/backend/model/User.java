package com.nadeeshani.fullstack.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class User {
    @Id
    @GeneratedValue
    private int id;
    private String username;
    private String name;
    private String message;
    @Lob
    private byte[] profileImage;

    




}
