names = open('/Users/gustafbrostedt/Documents/p022_names.txt')
listNames = names.read().replace('"','').split(',')
# print(len(listNames))


def score_name(name):
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  score = 0
  for letter in name:
    score += (alphabet.index(letter)) + 1
  return score


def score_list(names):
  names = sorted(names)
  score = 0
  for i in range(len(names)):
    nameScore = score_name(names[i]) * (i+1)
    score += nameScore

  return score

print(score_list(listNames))
