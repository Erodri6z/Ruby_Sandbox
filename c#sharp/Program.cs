using System;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static char GetGrade(int s1, int s2, int s3)
  {
    int average = (s1 + s2 + s3)/ 3;


    if (average >= 90) 
    {
      return 'A';
    }
    else if (average >= 80)
    {
      return 'B';
    }
    else if (average >= 70)
    {
      return 'C';
    }
    else if (average >= 60)
    {
      return 'D';
    } 
    else
    {
      return 'F';
    }
  }
  public static void Main()
    {
      char result = GetGrade(93, 90, 93);
      Console.WriteLine(result);
    }
} 