package com.example.official_lysis.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CommonController {

    @GetMapping("/home")
    public String showHomePage() {
        return "Home";
    }

    @GetMapping("/about")
    public String showAboutPage() {
        return "AboutUs";
    }

    @GetMapping("/contact")
    public String showContactPage() {
        return "Contact";
    }

    @GetMapping("/service")
    public String showServicetPage() {
        return "Service";
    }
}
