# File: backend/app.py
from flask import Flask, request, jsonify
from supabase import create_client, Client
import os

# Directly assign the values
SUPABASE_URL = "https://cnrrxbiamggizeplmwnp.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNucnJ4YmlhbWdnaXplcGxtd25wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxOTMyMTMsImV4cCI6MjA1Mjc2OTIxM30.wQnZMQs4pzF9qLgtoF8UgzOcDvvw-Ka6giVZgNvy9Qk"

# Create supabase client
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    if data.get('username') == 'admin' and data.get('password') == 'admin':
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

@app.route('/submit', methods=['POST'])
def submit_user():
    data = request.form
    file = request.files['file']

    if not file:
        return jsonify({"message": "No file uploaded"}), 400

    # Upload file to Supabase storage
    file_path = f"public/{file.filename}"
    response = supabase.storage.from_('profile-pictures').upload(file_path, file)

    if response.get('error'):
        return jsonify({"message": response['error']['message']}), 500

    # Insert user data into Supabase database
    user_data = {
        "name": data.get('name'),
        "email": data.get('email'),
        "contact_date": data.get('contact_date'),
        "profile_picture_url": file_path,
    }

    result = supabase.table('users').insert(user_data).execute()
    if result.get('error'):
        return jsonify({"message": result['error']['message']}), 500

    return jsonify({"message": "User submitted successfully"}), 201

@app.route('/users', methods=['GET'])
def get_users():
    search = request.args.get('search', '').lower()
    response = supabase.table('users').select('*').execute()

    if response.get('error'):
        return jsonify({"message": response['error']['message']}), 500

    users = response.get('data', [])
    if search:
        users = [
            user for user in users
            if search in user['name'].lower() or search in user['email'].lower()
        ]

    return jsonify(users), 200

if __name__ == '__main__':
    app.run(debug=True)