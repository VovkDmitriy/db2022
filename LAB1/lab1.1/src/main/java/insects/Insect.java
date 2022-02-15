package insects;

public class Insect {
	String title, picture, desc;

	public Insect(String title, String picture, String desc) {
		super();
		this.title = title;
		this.picture = picture;
		this.desc = desc;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	@Override
	public String toString() {
		return "{\"title\":\""+title+"\", \"picture\":\""+ picture+"\", \"desc\":\"" + desc + "\"}";
	}
	
	
	
	

}
