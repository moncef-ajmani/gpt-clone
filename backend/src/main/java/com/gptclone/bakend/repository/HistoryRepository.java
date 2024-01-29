package com.gptclone.bakend.repository;

import com.gptclone.bakend.entity.History;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface HistoryRepository extends MongoRepository<History,String> {
    Optional<History> findByUserId(String userId);
}
