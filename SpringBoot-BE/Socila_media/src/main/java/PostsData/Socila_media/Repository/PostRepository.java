package PostsData.Socila_media.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import PostsData.Socila_media.entities.Posts;


public interface PostRepository extends JpaRepository<Posts, Integer> {


}
