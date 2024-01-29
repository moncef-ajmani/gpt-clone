package com.gptclone.bakend.repository;

import com.gptclone.bakend.entity.Conversation;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ConversationRepository extends MongoRepository<Conversation,String> {
}
