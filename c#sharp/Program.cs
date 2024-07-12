using System;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static bool ValidatePin(string pin)
  {
    int x = Convert.ToInt16(pin);
    if (x.ToString().Count() == 4 || x.ToString().Count() == 6)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  public static void Main()
    {
    bool result = ValidatePin("21234");
      Console.WriteLine(result);
    }
}