package com.example.Tasks.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Tasks.models.Task;
import com.example.Tasks.services.TaskService;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/")
public class TaskController {
	
	@Autowired 
	private TaskService _taskS;
	
	@GetMapping("allTasks")
	public ArrayList<Task> all(){
		return _taskS.all();
	}
	
	@PostMapping("new")
	public String createTask(@RequestBody Task task) {
		System.out.println(task);
		return _taskS.create(task);
	}
	
	@GetMapping("task/{id}")
	public Task getTask(@PathVariable("id") long id) {
		return _taskS.findById(id);
	}
	
	@DeleteMapping("task/{id}")
	public String deleteTask(@PathVariable("id") long id) {
		return _taskS.destroy(id);
	}
	
	@PutMapping("task")
	public String updateTask(@RequestBody Task task) {
		return _taskS.update(task);
	}
	


}
