package com.gptclone.bakend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
public class BakendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BakendApplication.class, args);
    }

}
