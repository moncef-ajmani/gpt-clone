package com.gptclone.bakend.controller;


import com.gptclone.bakend.DTOs.AuthenticationResponseDTO;
import com.gptclone.bakend.DTOs.LoginRequestDTO;
import com.gptclone.bakend.DTOs.RegisterRequestDTO;
import com.gptclone.bakend.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody RegisterRequestDTO request){
        return authenticationService.register(request);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponseDTO> login(@RequestBody LoginRequestDTO request){
        return ResponseEntity.ok(authenticationService.login(request));

    }

}
