package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class VueController {
	
	@GetMapping("/hello")
	public String getTemplate(Model model) {
		return "hello";
	}

}
