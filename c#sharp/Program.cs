using System;

public class Program
{
    public static int SumOfIntegers(params int[] numbers)
    {
        int sum = 0;
        foreach (int number in numbers)
        {
            sum += (number * number);
        }
        return sum;
    }

    public static void Main()
    {
        int result = SumOfIntegers(5,3,4);
        Console.WriteLine(result);  
    }
}