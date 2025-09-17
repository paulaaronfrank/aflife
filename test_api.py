#!/usr/bin/env python3
"""
Test script for the countries API
"""
import requests
import json

def test_api():
    base_url = "http://localhost:8000"
    
    print("Testing Countries API...")
    print("=" * 50)
    
    # Test the visited countries endpoint
    try:
        response = requests.get(f"{base_url}/api/countries/visited")
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {json.dumps(data, indent=2)}")
            print(f"Number of visited countries: {len(data.get('countries', []))}")
        else:
            print(f"Error: {response.text}")
            
    except requests.exceptions.ConnectionError:
        print("Error: Could not connect to the server. Make sure the Flask app is running on port 8000")
    except Exception as e:
        print(f"Error: {e}")
    
    # Test the images endpoint
    try:
        response = requests.get(f"{base_url}/api/images")
        print(f"\nImages endpoint - Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Images Response: {json.dumps(data, indent=2)}")
        else:
            print(f"Images Error: {response.text}")
            
    except requests.exceptions.ConnectionError:
        print("Error: Could not connect to the server. Make sure the Flask app is running on port 8000")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_api()
