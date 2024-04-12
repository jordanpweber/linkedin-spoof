'use strict';

// DOM Properties
const connectionsList = document.getElementById('connections-list');
const suggestedList = document.getElementById('suggested-list');

// Function to display users in the connections list
function displayConnections(users) {
    console.log('Displaying connections:', users);
    connectionsList.innerHTML = ''; // Clear existing items in connections list

    users.forEach(user => {
        const fullName = `${user.name.first} ${user.name.last}`;
        const city = user.location.city;

        const connectionItem = document.createElement('li');
        connectionItem.textContent = `${fullName}, ${city}`;
        connectionsList.appendChild(connectionItem);
    });
}

// Function to display users in the suggested list
function displaySuggestions(users) {
    console.log('Displaying suggested users:', users);
    suggestedList.innerHTML = ''; // Clear existing items in suggested list

    users.forEach(user => {
        const fullName = `${user.name.first} ${user.name.last}`;
        const city = user.location.city;

        const suggestedItem = document.createElement('li');
        suggestedItem.textContent = `${fullName}, ${city}`;
        suggestedList.appendChild(suggestedItem);
    });
}

// Fetch and Display Random Users for Connections and Suggestions
async function fetchAndDisplayRandomUsers(count) {
    try {
        const users = await fetchRandomUsers(count);
        displayConnections(users); // Populate connections list
        displaySuggestions(users); // Populate suggested list
    } catch (error) {
        console.error('Error fetching and displaying random users:', error);
    }
}

// Function to fetch random users from the API
async function fetchRandomUsers(count) {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${count}`);
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching random users:', error);
        return [];
    }
}

// Call the function to fetch and display random users when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchAndDisplayRandomUsers(10); // Specify the number of suggested users to display
});


