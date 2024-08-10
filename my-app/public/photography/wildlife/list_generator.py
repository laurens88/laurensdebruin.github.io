import os
import json
import random

def get_filtered_filenames(directory):
    filenames = []
    for filename in os.listdir(directory):
        if '_low' not in filename and not filename.endswith('.py'):
            filenames.append(filename)
    return filenames

def main():
    directory = '.'  # Specify your directory here, '.' for current directory
    output_file = 'output_filenames.json'  # Specify the output file name

    # Get filtered filenames
    filtered_filenames = get_filtered_filenames(directory)

    # Shuffle the list
    random.shuffle(filtered_filenames)

    # Write the shuffled list to an output file in JSON format
    with open(output_file, 'w') as f:
        json.dump(filtered_filenames, f, indent=4)

    print(f"Shuffled list of filenames has been written to {output_file}")

if __name__ == "__main__":
    main()
