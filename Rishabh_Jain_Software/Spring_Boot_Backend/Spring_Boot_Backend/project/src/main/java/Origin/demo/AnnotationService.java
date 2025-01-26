package Origin.demo;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnotationService {

    @Autowired
    private AnnotationRepository annotationRepository;

    public Annotation saveAnnotation(Annotation annotation) {
        return (Annotation) annotationRepository.save(annotation);
    }

    public List<Annotation> getAnnotationsByImage(String imageUrl) {
        return annotationRepository.findByImageUrl(imageUrl);
    }

    // Additional methods for handling other business logic can be added here
}
