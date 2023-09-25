package com.nadeeshani.fullstack.backend.repository;

import com.nadeeshani.fullstack.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
