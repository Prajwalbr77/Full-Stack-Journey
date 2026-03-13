class Car{
    String name;
    int noOfseats;
    float price;
}

class Pbyreference  {
    public static void main(String [] args){
        Car c1 = new Car();
        c1.name = "Benz";
        c1.noOfseats = 6;
        c1.price = 4.44f;

        System.out.println(c1.name);
        System.out.println(c1.noOfseats);
        System.out.println(c1.price);
System.out.println("----------------------------------");
        Car c2 = new Car();
        c2.name = "Audi";
        c2.noOfseats = 6;
        c2.price = 3.44f;

         System.out.println(c2.name);
        System.out.println(c2.noOfseats);
        System.out.println(c2.price);
    }
}