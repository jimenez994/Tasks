package com.example.Tasks.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Tasks.models.Task;
import com.example.Tasks.repositories.TaskRepository;

@Service
public class TaskService {
	@Autowired
	private TaskRepository taskRepo;
	
	public String create(Task task) {
		taskRepo.save(task);
		return "you created a task";
	}
	public String update(Task task) {
		taskRepo.save(task);
		return "you updated a task";
	}
	public String destroy(Long id) {
		taskRepo.delete(id);
		return "You just deleted a task";
	}
	public ArrayList<Task> all(){
		return taskRepo.findAll();
	}
	public Task findById(Long id) {
		return taskRepo.findOne(id);
	}

}
