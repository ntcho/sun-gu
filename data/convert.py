import re

# import csv
# import json


# def csv_to_json(csv_file, json_file):
#     # Open the CSV file
#     with open(csv_file, "r") as file:
#         # Create a CSV reader object
#         reader = csv.DictReader(file)

#         # Convert each row into a dictionary
#         data = [row for row in reader]

#     # Write the data to a JSON file
#     with open(json_file, "w") as file:
#         # Convert the data to JSON format
#         json_data = json.dumps(data, indent=4)

#         # Write the JSON data to the file
#         file.write(json_data)


# # Specify the input CSV file path
# csv_file = "data.csv"

# # Specify the output JSON file path
# json_file = "data.json"

# # Call the function to convert CSV to JSON
# csv_to_json(csv_file, json_file)


def replace_substring(
    file_path,
):
    # Read the file
    with open(file_path, "r") as file:
        lines = file.readlines()

    # Replace the substring using regex
    modified_lines = [modifyline(line) for line in lines]

    # Write the modified lines back to the file
    with open(file_path, "w") as file:
        file.writelines(modified_lines)


def modifyline(line):
    # Replace the substring using regex
    if line.strip().startswith("tags:"):
        tags = re.findall(r"tags: \'(.+)\'", line)[0].split(", ")
        string = ", ".join([f"'{tag}'" for tag in tags])
        return f"tags: [{string}]\n"
    else:
        return line


# Specify the file path
file_path = "data.js"

# Call the function to replace the substring
replace_substring(file_path)
