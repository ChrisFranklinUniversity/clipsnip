package com.clipsnip.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.StringUtils;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;

@RestController
@RequestMapping("/api/videos")
public class VideoController {

    private static final String VIDEO_DIR = "uploads/";

    @PostMapping("/upload")
    public ResponseEntity<String> uploadVideo(@RequestParam("file") MultipartFile file) {
        try {
            // Ensure directory exists
            Files.createDirectories(Paths.get(VIDEO_DIR));

            // Clean filename
            String filename = StringUtils.cleanPath(file.getOriginalFilename());
            Path filePath = Paths.get(VIDEO_DIR + filename);

            // Save the file to disk
            Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            return ResponseEntity.ok("Uploaded: " + filename);
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Upload failed");
        }
    }
}
