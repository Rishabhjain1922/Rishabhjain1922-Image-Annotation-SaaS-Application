package Origin.demo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnnotationRepository<Annotation> extends JpaRepository<Annotation, Long> {
    List<Origin.demo.Annotation> findByImageUrl(String imageUrl);
    // Additional custom queries can be added if needed
}
