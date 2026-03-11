class Demo{
    int a;
    float b;
    char c;
}

class practice {
    public static void main(String args[]){
       Demo d = new Demo();
       d.a = 123;
       d.b = 23.4f;
       d.c = 'C';

       System.out.println(d.a);
       System.out.println(d.b);
       System.out.println(d.c);
    }
}