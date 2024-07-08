import os

directory = os.path.join(os.getcwd(), "photos")
print(directory)

files = os.listdir(directory)
files.sort()

for file in files:
    print(f"\"photos/{file}\",")