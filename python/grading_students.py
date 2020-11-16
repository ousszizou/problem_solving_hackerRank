def mapFunc(grade):
  if grade < 38:
    return grade
  r = grade + (5 - grade % 5)
  if (r - grade) < 3:
    return r
  return grade

def gradingStudents(grades):
  result = list(map(mapFunc, grades))
  print(result)

gradingStudents([84, 29, 57])
