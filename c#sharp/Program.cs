﻿using System;
// using System.Text.RegularExpressions;

public class Program
{
  public static int Opposite(int n)
  {
    return n * -1;
  }
  public static void Main()
    {
      int result = Opposite(-5);
      Console.WriteLine(result);
    }
}