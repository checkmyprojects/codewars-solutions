// https://www.codewars.com/kata/57a93f93bb9944516d0000c1

// In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

// >>> let d = new Dictionary();

// >>> d.newEntry("Apple", "A fruit that grows on trees");

// >>> console.log(d.look("Apple"));
// A fruit that grows on trees

// >>> console.log(d.look("Banana"));
// Can't find entry for Banana

import java.util.HashMap;

public class Dictionary extends HashMap<String,String> {
    public Dictionary(){ super(); }

    public void newEntry(String key, String value){ this.put(key, value); }

    public String look(String key){ return this.getOrDefault(key, "Cant find entry for "+key); }
}