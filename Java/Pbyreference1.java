class Car1{
    String name;
    int noOfseats;
    float cost;
}

public class Pbyreference1 {
    public static void main(String args[]){
        Car1 c = new Car1();
        c.name="BMW";
        c.noOfseats=6;
        c.cost=2.22f;
        System.out.println(c.name);
         System.out.println(c.noOfseats);
          System.out.println(c.cost);
          System.out.println("================");

           Car1 c1 = new Car1();
        c1.name="Benz";
        c1.noOfseats=6;
        c1.cost=3.22f;
        System.out.println(c1.name);
         System.out.println(c1.noOfseats);
          System.out.println(c1.cost);
    }
}
