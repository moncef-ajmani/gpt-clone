package com.gptclone.bakend.controller;

import com.gptclone.bakend.entity.History;
import com.gptclone.bakend.service.HistoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/history")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173/")
public class HistoryController {
    private final HistoryService historyService;

    @GetMapping
    public Object getHistory(){
        return historyService.getHistory();
    }
}
