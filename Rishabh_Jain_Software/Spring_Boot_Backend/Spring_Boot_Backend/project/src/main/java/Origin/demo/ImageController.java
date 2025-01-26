package Origin.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ImageController<HttpServletRequest> {

    @Autowired
    private AnnotationService annotationService;

    private static final String IMAGE_UPLOAD_DIR = "uploaded-images/";

    // Endpoint to upload an image
    @PostMapping("/upload")
    public String uploadImage(@RequestParam("file") MultipartFile file) throws IOException {
        String imageName = file.getOriginalFilename();
        File destination = new File(IMAGE_UPLOAD_DIR + imageName);
        file.transferTo(destination);
        return "Image uploaded successfully: " + imageName;
    }

    // Endpoint to create an annotation
    @PostMapping("/annotations")
    public Annotation createAnnotation(@RequestBody Annotation annotation) {
        return annotationService.saveAnnotation(annotation);
    }

    // Endpoint to fetch annotations by image URL
    @GetMapping("/annotations")
    public List<Annotation> getAnnotations(@RequestParam("imageUrl") String imageUrl) {
        return annotationService.getAnnotationsByImage(imageUrl);
    }

    // Endpoint to serve uploaded images
    @GetMapping("/images/{imageName}")
    public File getImage(@PathVariable String imageName, HttpServletRequest request) {
        return new File(IMAGE_UPLOAD_DIR + imageName);
    }
}
