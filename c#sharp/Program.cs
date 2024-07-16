using System;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static char GetGrade(int s1, int s2, int s3)
  {
    int average = (s1 + s2 + s3)/ 3;
    char grade = 'A';

    if (average >= 90) 
    {
      grade = 'A';
    }
    else if (average >= 80)
    {
      grade = 'B';
    }
    else if (average >= 70)
    {
      grade = 'C';
    }
    else if (average >= 60)
    {
      grade = 'D';
    } 
    else
    {
      grade = 'F';
    }

    return grade;
  }
  public static void Main()
    {
      char result = GetGrade(93, 90, 93);
      Console.WriteLine(result);
    }
} 

