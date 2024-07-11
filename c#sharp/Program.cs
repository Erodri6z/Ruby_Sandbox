using System;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
    public static int Past(int h, int m, int s)
    {
      int minutes = 60000;
      int seconds = 1000;
      int hours = 3600000;
      return (h * hours) + (minutes * m) + (s * seconds);
    }
  public static void Main()
    {
      int result = Past(0,1,1);
      Console.WriteLine(result);
    }
}