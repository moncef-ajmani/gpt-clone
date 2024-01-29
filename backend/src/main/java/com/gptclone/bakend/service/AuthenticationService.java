package com.gptclone.bakend.service;

import com.gptclone.bakend.DTOs.AuthenticationResponseDTO;
import com.gptclone.bakend.DTOs.LoginRequestDTO;
import com.gptclone.bakend.DTOs.RegisterRequestDTO;
import com.gptclone.bakend.entity.History;
import com.gptclone.bakend.enums.Role;
import com.gptclone.bakend.entity.User;
import com.gptclone.bakend.repository.HistoryRepository;
import com.gptclone.bakend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final HistoryRepository historyRepository;

    public ResponseEntity<Object> register(RegisterRequestDTO request){
        Optional<User> existingUser = userRepository.findByEmail(request.getEmail());
        if(existingUser.isPresent()){
            return ResponseEntity.badRequest().body("User Already Exist");
        }
        var user = User
                .builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        User savedUser = userRepository.save(user);
        Map<String,Object> claims = new HashMap<>();
        claims.put("username",request.getUsername());
        var jwtToken = jwtService.generateToken(claims,user);

        historyRepository.save(new History(null,savedUser.getId(),new ArrayList<>()));

        return ResponseEntity.ok(AuthenticationResponseDTO
                .builder()
                .token(jwtToken)
                .build());

    }

    public AuthenticationResponseDTO login(LoginRequestDTO request){

        //authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        } catch (AuthenticationException e) {
            // Handle authentication failure, e.g., log the error or throw a custom exception
            throw new RuntimeException("Authentication failed: " + e.getMessage());
        }

        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();

        Map<String,Object> claims = new HashMap<>();
        claims.put("username",user.getName());

        var jwtToken = jwtService.generateToken(claims,user);

        return AuthenticationResponseDTO
                .builder()
                .token(jwtToken)
                .build();
    }

}
