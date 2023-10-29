import os

directory = f"{os.getcwd()}\\photos"
print(directory)

files = os.listdir(directory)

for file in files:
    print(f"\"photos/{file}\",")