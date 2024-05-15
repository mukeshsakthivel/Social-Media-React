package PostsData.Socila_media.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import PostsData.Socila_media.entities.*;

import PostsData.Socila_media.Repository.PostRepository;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostsController {
	
	@Autowired
	PostRepository postrepo;
	
	@GetMapping
	public List<Posts> getrequest()
	{
		System.out.println("request from react ");
		return postrepo.findAll();
		}
	
	@PostMapping
	public ResponseEntity<Posts> postrequest(@RequestBody Posts post){
		try {
			Posts savedPost = postrepo.save(post);
			return new ResponseEntity<>(savedPost, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PutMapping
	public ResponseEntity<Posts> putrequest(@RequestBody Posts post){
		try {
			Optional<Posts> postData = postrepo.findById(post.getId());
			if (postData.isPresent()) {
				Posts updatedPost = postrepo.save(post);
				return new ResponseEntity<>(updatedPost, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/{value}")
	public Optional<Posts> singlegetRequest(@PathVariable("value") int id)
	{
		return postrepo.findById(id);
	}
	

	@DeleteMapping("/{value}")
	public void delterequest(@PathVariable("value") int id)
	{
		postrepo.deleteById(id);
	}
	
}
