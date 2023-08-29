def generateParenthesis(n):
    def backtrack(s, left, right):
        if len(s) == 2 * n:
            combinations.append(s)
            return
        if left < n:
            backtrack(s + '(', left + 1, right)
        if right < left:
            backtrack(s + ')', left, right + 1)

    combinations = []
    backtrack('', 0, 0)
    return combinations

# Example usage:
n = 2
result = generateParenthesis(n)
print(result)
