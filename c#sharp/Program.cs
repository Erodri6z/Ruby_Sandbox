using System;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
    public static double BasicOp(char operation, double value1, double value2)
    {
      if (operation == '+')
      {
        return value1 + value2;
      }
      else if (operation == '-')
      {
        return value1 - value2;
      }
      else if (operation == '*')
      {
        return value1 * value2;
      }
      else if (operation == '/')
      {
        return value1 / value2;
      }
      else
      {
        return -1;
      }
    }
  public static void Main()
    {
    double result = BasicOp('*', 2, 4);
      Console.WriteLine(result);
    }
}