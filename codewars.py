# n = "8 3 -5 42 -1 0 0 -9 4 7 4 -4"

def high_and_low(n):
  n_array = n.split()
  int_array = list(map(int, (n_array)))
  final_arr = sorted(int_array)
  print(str(final_arr[-1]) + "," + str(final_arr[0]))

high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4")