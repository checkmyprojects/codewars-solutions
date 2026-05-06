// https://www.codewars.com/kata/6089c7992df556001253ba7d

// You will also have to create an instance method named howMany() (or how_many()).

// The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

import java.util.*;

class Song {
  private String title, artist;
  private HashSet<String> listened = new HashSet<String>();
  
  public Song(String title, String artist) {
    this.title = title;
    this.artist = artist;
  }
  
  public int howMany(ArrayList<String> names) {
    int oldLength = listened.size();
    names.forEach(name -> listened.add(name.toLowerCase()));
    return listened.size()-oldLength;
  }
  
  public String getTitle() {
    return title;
  }
  
  public String getArtist() {
    return artist;
  }
}