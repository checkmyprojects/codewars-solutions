// https://www.codewars.com/kata/5761a717780f8950ce001473

class AgeDiff {
    public static String CalculateAge(int birth, int yearTo) {
        int a = yearTo - birth;
        if (a == 0) return "You were born this very year!";
        if (a == 1) return "You are 1 year old.";
        if (a == -1) return "You will be born in 1 year.";

        return a > 0 ? "You are " + a + " years old." : "You will be born in " + (-a) + " years.";
    }
}