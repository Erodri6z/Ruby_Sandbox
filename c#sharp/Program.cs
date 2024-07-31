// using System;
using System.Collections.ObjectModel;
// using System.Linq;
// using System.Collections.Generic;
// using System.Runtime.InteropServices;
// using System.Text.RegularExpressions;

public class Program
{
  public static int[] TwoSum(int[] nums, int target)
  {
    for (int i = 0; i < nums.Length; i++ )
    {
      for ( int j = 0; j < nums.Length; j++)
      {
        if (nums[i] + nums[j] == target && i != j)
        {
          return new int[]{i,j};
        }
      } 
    }
    return new int[0];
  }
  public static void Main()
    {
      int[] result = TwoSum([2,2,3], 4);
      Console.WriteLine($"{result[0]}, {result[1]}");
    }
} 
