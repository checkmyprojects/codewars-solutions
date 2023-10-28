// https://www.codewars.com/kata/547c71fdc5b2b38db1000098

public class NameMe {
  public static final String thisKata = "This Kata has serious issues. Do you want us to use getters or not?"
      + "Why is there a member for fullName when it is a calculated result?"
      + "Why do the tests require that the fields be public; why are they testing the fields at all?";
  public String firstName;
  public String lastName;
  public String fullName;
  
  public String getFirstName() {
    return firstName;
  }
  
  public String getLastName() {
    return lastName;
  }
  
  public String getFullName() {
    return fullName;
  }
  
  public NameMe(String first, String last) {
    this.firstName = first;
    this.lastName = last;
    this.fullName = firstName + " " + lastName;
  }
}