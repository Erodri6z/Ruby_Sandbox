using System;
using System.Collections.ObjectModel;
using System.Linq;
// using System.Collections.Generic;
// using System.Runtime.InteropServices;
// using System.Text.RegularExpressions;

public class Program
{
  public static int[] TwoSum(int[] nums, int target)
  {
    int a = 0;
    int b = 0;

    
    for (int i = 0; i < nums.Length; i++ )
    {
      for ( int j = 0; j < nums.Length; j++)
      {
        if (nums[i] + nums[j] == target)
        {
          a = nums[i];
          b = nums[j];
        }
      } 
    }

    return [a, b];
  }
  public static void Main()
    {
      int[] result = TwoSum([1,2,3], 4);
      Console.WriteLine($"{result[0]}, {result[1]}");
    }
} 
