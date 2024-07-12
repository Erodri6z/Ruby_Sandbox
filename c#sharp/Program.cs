using System;
// using System.Collections.Generic;
// using System.Text.RegularExpressions;

public class Program
{
  public static bool ValidatePin(string pin)
  {
    if (pin.Length == 4 || pin.Length == 6)
    {
      foreach( char c in pin)
      {
        if (!char.IsDigit(c))
        {
          return false;
        }
      }
      return true;
    }
    return true;
  }
  public static void Main()
    {
    bool result = ValidatePin("21234");
      Console.WriteLine(result);
    }
}