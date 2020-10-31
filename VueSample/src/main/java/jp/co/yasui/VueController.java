package jp.co.yasui;

import org.springframework.boot.context.properties.source.ConfigurationPropertyName.Form;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class VueController {
	
	@GetMapping("/hello")
	public String getTemplate(Model model) {
		return "hello";
	}
	
	@GetMapping("/event")
	public String getEvent(Model model) {
		return "event";
	}
	
	@GetMapping("/uploadindex")
	public String getUploadindex(Model model) {
		return "uploadindex";
	}
	
	@PostMapping("/top")
	public String postTop(@ModelAttribute Form form, Model model) {
		System.out.println(form+":"+model);
		return "redirect:/index";
	}

}
