import random

for i in range(0, 110, 10):
    print(f"""
{i}% {{
    transform: translate({random.randrange(-50,50) / 10}px, {random.randrange(-50,50) / 10}px);
}}""")