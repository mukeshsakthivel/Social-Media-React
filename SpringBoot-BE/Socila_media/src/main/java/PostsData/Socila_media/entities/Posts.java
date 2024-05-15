package PostsData.Socila_media.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Posts {
	@Id
	private int id;
	private String title;
	private String datetime;
	private String body;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDatetime() {
		return datetime;
	}
	public void setDatetime(String datetime) {
		this.datetime = datetime;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}

}
