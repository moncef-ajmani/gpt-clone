package com.gptclone.bakend.service;

import com.gptclone.bakend.DTOs.AuthenticationResponseDTO;
import com.gptclone.bakend.DTOs.LoginRequestDTO;
import com.gptclone.bakend.DTOs.RegisterRequestDTO;
import com.gptclone.bakend.enums.Role;
import com.gptclone.bakend.model.User;
import com.gptclone.bakend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponseDTO register(RegisterRequestDTO request){

        var user = User
                .builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        Map<String,Object> claims = new HashMap<>();
        claims.put("username",request.getUsername());
        var jwtToken = jwtService.generateToken(claims,user);

        return AuthenticationResponseDTO
                .builder()
                .token(jwtToken)
                .build();
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
