package Origin.demo;


import javax.persistence.*;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Annotation{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type; // Circle or Rectangle
    private int startX;
    private int startY;
    private int endX;
    private int endY;
    private String imageUrl; // URL of the uploaded image


}

