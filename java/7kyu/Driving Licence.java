// https://www.codewars.com/kata/586a1af1c66d18ad81000134

// The UK driving number is made up from the personal details of the driver. The individual letters and digits can be code using the below information

public class Solution {
	public static final String standardValues = "9AA";
	
	  public static String driver(final String[] data) {
		  
		  String surname = data[2];
		  String[] birthDate = data[3].split("-");
		  String first = data[0];
		  String middle = data[1];
		  String gender = data[4];
		  
		  StringBuilder builder = new StringBuilder();
		  
		  builder.append(formatSurname(surname).toUpperCase());
		  builder.append(birthDate[2].substring(2, 3));
		  builder.append(formatMonthValue(birthDate, gender));
		  builder.append(formatDayValue(birthDate));
		  builder.append(birthDate[2].substring(3, 4));
		  builder.append(formatInitialRule(first));
		  builder.append(formatInitialRule(middle));
		  builder.append(standardValues);
	  
		  return builder.toString().trim(); 
		  }

	private static String formatInitialRule(String name) {
		if(null == name || name.isEmpty()) {
			return "9";
		}

		return name.substring(0, 1);
	}

	private static String formatDayValue(String[] birthDate) {
		String fred = birthDate[0];
		
		return fred.length() == 1? "0".concat(fred) : fred;

	}

	private static String formatMonthValue(String[] birthDate, String gender) {
		String birthMonth = birthDate[1].substring(0, 3).toUpperCase();
		String fred = Months.valueOf(birthMonth).getMonth();
		
		if(gender.toUpperCase().equals("F")) {
			int value = Integer.parseInt(fred.substring(0,1));
			value = value + 5;
			return String.valueOf(value).concat(fred.substring(1,2));
		}
		
		return fred;
	}

	private static String formatSurname(String surname) {
		int length = surname.length();
		StringBuilder builder = new StringBuilder();
		
		if(length >= 5) {
			builder.append(surname.substring(0, 5));
		} else {
			builder.append(surname);
			
			for (int i = 1; i <= 5 - length; i++) {
				builder.append("9");
			}
		}

		return builder.toString().trim();
	}
}

	 enum Months {
		JAN ("01"),
		FEB ("02"),
		MAR ("03"),
		APR ("04"),
		MAY ("05"),
		JUN ("06"),
		JUL ("07"),
		AUG ("08"),
		SEP ("09"),
		OCT ("10"),
		NOV ("11"),
		DEC ("12");
		 
     private String month;
		 
     public String getMonth()
	   {
	      return this.month;
       }

	 private Months(String month)
	   {
	      this.month = month;
	   }
	}