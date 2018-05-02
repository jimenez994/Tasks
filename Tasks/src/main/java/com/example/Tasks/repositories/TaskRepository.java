package com.example.Tasks.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Tasks.models.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {
	ArrayList<Task> findAll();
}
