// https://www.codewars.com/kata/5601c5f6ba804403c7000004

class Barycenter {
    
    public static double[] barTriang(double[] x, double[] y, double[] z)
    {
        double[] res = new double[2];
        res[0] = (double)((int)Math.round((x[0]+y[0]+z[0])/3*10000))/10000;
        res[1] = (double)((int)Math.round((x[1]+y[1]+z[1])/3*10000))/10000;
        return res;
    }
}