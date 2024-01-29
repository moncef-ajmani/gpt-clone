package com.gptclone.bakend.service;

import com.gptclone.bakend.entity.User;
import com.gptclone.bakend.entity.History;
import com.gptclone.bakend.repository.HistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HistoryService {
    private final HistoryRepository historyRepository;
    private final UserService userService;

    public History getHistory(){
        User user = userService.getUser();
        History history = historyRepository.findByUserId(user.getId()).get();
        return history;
    }
    public History createHistory(){
        return historyRepository.save(new History());
    }
}
