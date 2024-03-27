package com.partyplanner.nandhini.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.partyplanner.nandhini.model.User;
import java.util.Optional;
public interface UserRepository extends JpaRepository<User,String>{

    Optional <User> findByEmail(String username);

}
