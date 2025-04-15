import random
POSSIBLE_CHARS = "░▒▓█▀▄▖▗▘▙▚▛▜▝▞▟"

while True:
	try:
		val = int(input("how many chars?\n> "))
		break
	except ValueError:
		print("value must be a number lol\n")

for i in range(val):
	print(random.choice(POSSIBLE_CHARS), end="", flush=True)
print()