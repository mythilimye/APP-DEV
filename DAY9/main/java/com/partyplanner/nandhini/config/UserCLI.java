package com.partyplanner.nandhini.config;

import static com.partyplanner.nandhini.enumerated.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.partyplanner.nandhini.model.User;
import com.partyplanner.nandhini.repository.UserRepository;

import lombok.RequiredArgsConstructor;
@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void run(String... args) throws Exception { 
        if(userRepository.count()>0)
        return;
        var user=User.builder()
            .name("nandhini")
            .email("nandhini@gmail.com")
            .password(passwordEncoder.encode("nandhini123"))
            .role(ADMIN)
            .build();
        userRepository.save(user);

      
    }

}
